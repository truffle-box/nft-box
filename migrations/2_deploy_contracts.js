var NFTCollection = artifacts.require("./NFTCollection.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTCollection,"ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/","hello","moto");
};
