/*
  You can use this script to quickly manually mintNFTs. To do so:
  1. Run `tsc` to compile typescript into js
  2. Build and deploy the NFTCollection smart contract
  3. Run `truffle exec ./ts-out/scripts/mint.ts`
 */
var NFTCollection = artifacts.require("./NFTCollection.sol");

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

const main = async (cb: () => void) => {
  try {
    const args = process.argv.slice(4);
    const numNfts = args.length != 0 ? parseInt(args[0]) : 1;
    const nftCollection = await NFTCollection.deployed();
    const PRICE = await nftCollection.PRICE();
    const txn = await nftCollection.mintNFTs(numNfts, {value: numNfts * parseInt(PRICE.toString())});
    console.log(txn);
  } catch(err) {
    console.log('Doh! ', getErrorMessage(err));
  }
  cb();
}

module.exports = main;