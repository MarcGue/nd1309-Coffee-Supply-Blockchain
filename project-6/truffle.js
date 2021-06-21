const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "9c6288cb418f48a48094bb33548dd4f5";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      addressIndex: 2
    },
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};