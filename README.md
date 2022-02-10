# Truffle NFT Box
This box is still a working in progress but for now can be used to mint create an NFT collection and mint and NFT.

To use the box follow the instructions below.
- Add the contructor arguements to `deployer` function in `2_deploy_contracts.js`. 
  The URI for your NFT images must be passed as the first argument. 
  The `name` and `symbol` of the toke will be passed a the second and third respectively.

- After migrating your contracts head to the `client` directory and run `npm run start` to view the application in your `http://localhost:3000/`. 
- Connect your wallet and mint your first NFT!
  You can check the developer console to see the transaction has and if you deploy to `rinkeby` you will be able to see the NFT on their test-net site.
