var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "xxxx";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/xxxx");
      },
      network_id: 4,
      skipDryRun: true,
      gas: 5500000,
      gasPrice: 10000000000
  }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};
