var NFTCollectible = artifacts.require("./NFTCollectible.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTCollection,"ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/");
};
