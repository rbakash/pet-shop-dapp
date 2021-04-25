module.exports = {

  // See <http://truffleframework.com/docs/advanced/configuration> for more about customizing your Truffle configuration!
  //  contracts_directory: "./allMyStuff/someStuff/theContractFolder",

  // Will contain all the contracts artifacts ( all the contract related information so that the compiler need not have to compile once again. 
  // Contains contract bytecode to be executed, comilper used, how deployed it etc!!!)
  // contracts_build_directory: "./output"

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }

  // optional config values:
  // gas -- transcation fee determined by the suply and demand between the miners and this field reprensents the maximum amount of gas (or energy) that you're willing to spend on a particular transaction
  // gasPrice -- gas price used for the contract deployment
  // from - default address to use for any transaction Truffle makes during migrations
  // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
  //          - function that returns a web3 provider instance (see below.)
  //          - if specified, host and port are ignored.
  // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
  }
  
};


