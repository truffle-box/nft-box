import React, { Component } from "react";
import Web3 from 'web3';
import "./App.css";
import { useEffect, useState } from 'react';
import './App.css';
import contract from './contracts/NFTCollectible.json';
//import Card from 'react-bootstrap/Card'
//import 'bootstrap/dist/css/bootstrap.min.css';



const contractAddress = "0x04b1600408594E5D8E6dD31c8D68205482A3eB97";
const abi = contract.abi;
console.log(abi)

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {

        // Get network provider and web3 instance.
        const web3 = await new Web3(Web3.givenProvider || 'http://localhost:7545');

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        ///create a contrat instance
        //replace ethers withe web3 js contract instnae
        //const provider = new ethers.providers.Web3Provider(ethereum);
        const account = web3.eth.accounts.create();
        const nftContract = new web3.eth.Contract(abi, contractAddress);
        console.log(nftContract);
        console.log("Initialize payment");
        let nftTxn = await nftContract.methods.mintNFTs(1).send({ from: accounts[0], value: web3.utils.toWei("0.0001", "ether") }).on('receipt', function () {
          console.log('receipt')
        });
        console.log(nftTxn.transactionHash)

        console.log("Mining... please wait");
        //await nftTxn.wait();

        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.transactionHash}`);

      } else {
        console.log("Ethereum object does not exist");
      }

    } catch (err) {
      console.log(err);
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='App'>
      <div className='main-app'>
          {currentAccount ? mintNftButton() : connectWalletButton()}
        </div>
      </div>
  )
}

export default App;