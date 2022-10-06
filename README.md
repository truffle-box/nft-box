# Truffle NFT Box

- [Truffle NFT Box](#truffle-nft-box)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Installation](#installation)
  - [Support](#support)

## Requirements

The NFT Box has the following requirements:

- [Node.js](https://nodejs.org/) 10.x or later
- [NPM](https://docs.npmjs.com/cli/) version 5.2 or later
- Windows, Linux or MacOS

Helpful, but optional:
- An [Infura](https://infura.io/) account and Project ID
- A [MetaMask](https://metamask.io/) account

## Setup

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
    
3. In the root directory install the required dependices. This will install a few things along with [Open Zeppelin Contracts](https://docs.openzeppelin.com/contracts/4.x/erc721) check them out [here](https://docs.openzeppelin.com/contracts/4.x/erc721) for more info.
   ```javascript
      npm install @openzeppelin/contracts
      ```
      
4. Add the contructor arguments to `deployer` function in `2_deploy_contracts.js`. The URI for your NFT images must be passed as the first argument. The `name` and `symbol` of the token will be passed as the second and third respectively.
    ```javascript
    module.exports = function(deployer) {
    deployer.deploy(NFTCollection,"YOUR URI","TOKEN NAME","TOKEN SYMBOL");
   };
    ``````
4. In the root directory install the required dependices. This will install a few things along with [Open Zeppelin Contracts](https://docs.openzeppelin.com/contracts/4.x/erc721) check them out [here](https://docs.openzeppelin.com/contracts/4.x/erc721) for more info.
   ```javascript
      npm install
      ```

5. Run the development console.
    ```javascript
    truffle develop
    ```

6. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate

7. In the `client` directory, we run the React app. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd client
    npm install
    npm run start
    ```
8. After migrating your contracts head to the `client` directory and run `npm run start` to view the application in your `http://localhost:3000/`. Connect your wallet      and mint your first NFT!

9. You can check the developer console to see the transaction has and if you deploy to `rinkeby` you will be able to see the NFT on their test-net site [here](https://testnets.opensea.io/).

10. To build the application for production, use the build script. A production build will be in the `client/build` folder.
    ```javascript
    // ensure you are inside the client directory when running this
    npm run build
    ```

## Deployment

To deploy your contracts to a public network (such as a testnet or mainnet) there are two approaches. The first uses [Truffle Dashboard](https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard.html) which provides "an easy way to use your existing MetaMask wallet for your deployments". The second, requires copying your private key or mnemonic into your project so the deployment transactions can be signed prior to submission to the network.

### Using Truffle Dashboard (recommended)

Truffle Dashboard ships with Truffle and can be started with `truffle dashboard`. This in turn loads the dashboard at http://localhost:24012 and beyond that you'll just need to run your migration (`truffle migrate`). A more detailed guide to using Truffle Dashboard is available [here](https://trufflesuite.com/blog/introducing-truffle-dashboard/).

### Using the env File

You will need at least one mnemonic to use with the network. The `.dotenv` npm package has been installed for you, and you will need to create a `.env` file for storing your mnemonic and any other needed private information.

The `.env` file is ignored by git in this project, to help protect your private data. In general, it is good security practice to avoid committing information about your private keys to github. The `truffle-config.js` file expects a `MNEMONIC` value to exist in `.env` for running commands on each of these networks, as well as a default `MNEMONIC` for the Arbitrum network we will run locally.

If you are unfamiliar with using `.env` for managing your mnemonics and other keys, the basic steps for doing so are below:

1) Use `touch .env` in the command line to create a `.env` file at the root of your project.
2) Open the `.env` file in your preferred IDE
3) Add the following, filling in your own Infura project key and mnemonics:

```
MNEMONIC="<YOUR MNEMONIC HERE>"
INFURA_KEY="<Your Infura Project ID>"
RINKEBY_MNEMONIC="<Your Rinkeby Mnemonic>"
MAINNET_MNEMONIC="<Your Mainnet Mnemonic>"
```

4) As you develop your project, you can put any other sensitive information in this file. You can access it from other files with `require('dotenv').config()` and refer to the variable you need with `process.env['<YOUR_VARIABLE>']`.

## Support

Support for this box is available via the Truffle community available [here](https://www.trufflesuite.com/community).
