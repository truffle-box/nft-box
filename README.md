# Truffle NFT Box
This box is still a working in progress but for now can be used to mint create an NFT collection and mint and NFT.

## Installation

First ensure you are in a new and empty directory.

1. Run the `unbox` command via `npx` and skip to step 3. This will install all necessary dependencies. A Create-React-App is generated in the `client` directory.
   ```js
   npx truffle unbox nft-box
   ```

2. Alternatively, you can install Truffle globally and run the `unbox` command.
    ```javascript
    npm install -g truffle
    truffle unbox nft-box
    ```
    
3. Add the contructor arguments to `deployer` function in `2_deploy_contracts.js`. The URI for your NFT images must be passed as the first argument. The `name` and `symbol` of the token will be passed as the second and third respectively.
    ```javascript
    module.exports = function(deployer) {
    deployer.deploy(NFTCollection,"YOUR URI","TOKEN NAME","TOKEN SYMBOL");
   };
    ``````
    
4. Run the development console.
    ```javascript
    truffle develop
    ```

5. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate

6. In the `client` directory, we run the React app. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd client
    npm install
    npm run start
    ```
7. After migrating your contracts head to the `client` directory and run `npm run start` to view the application in your `http://localhost:3000/`. Connect your wallet      and mint your first NFT!

8. You can check the developer console to see the transaction has and if you deploy to `rinkeby` you will be able to see the NFT on their test-net site [here](https://testnets.opensea.io/).

9. To build the application for production, use the build script. A production build will be in the `client/build` folder.
    ```javascript
    // ensure you are inside the client directory when running this
    npm run build
    ```
