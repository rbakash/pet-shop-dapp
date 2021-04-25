// SPDX-License-Identifier: MIT -- specifies the source code is licensed under MIT

// Source code is written for Solidity version 0.4.22, or a newer version of the language up to, but not including version 0.9.0
pragma solidity >=0.4.22 <0.9.0;

contract Adoption {
    
    // Array of addresses, in our case the pet is 16 so the array size is 16
    // Adopter is of type called address, which holds an Ethereum 20-byte address, so 16 * 20 bytes of space is reserved in every node as a part of block, Be careful !!!!
    // Public makes it accessable to the outside contract and creates a function to access the variable value   
    address[16] public adopters;

    // Adopting a pet
    // Function parameter is petId and is declared as public, so anyone can access the function(Other smart contracts can call the function just like openAPI)
    // It's not declared view, so it can modify the contract state
    function adopt(uint256 petId) public returns (uint256) {

        // This check for the validity of the chosen pet
        require(petId >= 0 && petId <= 15);

        // Save the address against the choosen pet as key
        // The address of an account or a smart contract who called this function is given by msg.sender
        // msg.sender is a 160bit number denoting your public key
        adopters[petId] = msg.sender;

        return petId;
    }

    // Retrieving the adopters or getter function for the smart contract state adopters
    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
    
}
