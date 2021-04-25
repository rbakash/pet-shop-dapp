var Adoption = artifacts.require("Adoption");

// Exposed by the truffle framework to support smart contract deployment 
module.exports = function(deployer) {
  deployer.deploy(Adoption);
};