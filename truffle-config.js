const path = require("path");
module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    dashboard: {
      port: 24012
    },
    loom_testnet: {
      provider: function() {
          const privateKey = 'YOUR_PRIVATE_KEY';
          const chainId = 'extdev-plasma-us1';
          const writeUrl = 'wss://extdev-basechain-us1.dappchains.com/websocket';
          const readUrl = 'wss://extdev-basechain-us1.dappchains.com/queryws';
          return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
      },
      network_id: '9545242630824'
    }
  },
  
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.13"
    }
  },
  db: {
    enabled: false
  }
};
