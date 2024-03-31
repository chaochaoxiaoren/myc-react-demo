import React, { useState } from 'react';
import Web3 from 'web3';

const BlockChain = () => {

  // console.log('Web3.utils', Web3.utils);
  // console.log('Web3.version', Web3.version);
  // console.log('Web3.givenProvider', Web3.givenProvider);
  // console.log('Web3.providers', Web3.providers);
  // console.log('Web3.modules', Web3.modules);
  // let web3 = new Web3('https://eth.llamarpc.com');

  // console.log('currentProvider', web3.currentProvider);
  // console.log(web3);

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
  };

  const onLogin = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      // await provider.request({
      //   method: "eth_requestAccounts",
      // });

      const web3 = new Web3(provider);
      console.log('givenProvider:', web3.givenProvider);
      console.log('currentProvider:', web3.currentProvider);
      const accounts = await web3.eth.getAccounts();
      console.log({accounts});
      
      console.log('defaultAccount:', web3.eth.defaultAccount);
      console.log('defaultBlock:', web3.eth.defaultBlock);
      console.log('defaultHardfork', web3.eth.defaultHardfork);
      console.log('defaultChain', web3.eth.defaultChain);
      console.log('defaultCommon', web3.eth.defaultCommon);
      console.log('transactionBlockTimeout', web3.eth.transactionBlockTimeout);
      console.log('transactionBlockTimeout', web3.eth.transactionConfirmationBlocks);
      console.log('protolVer', await web3.eth.getProtocolVersion())
      console.log('isSyncing', await web3.eth.isSyncing())
      console.log('getCoinbase', await web3.eth.getCoinbase())
      console.log('isMining', await web3.eth.isMining())
      console.log('getHashrate', await web3.eth.getHashrate())
      console.log('getGasPrice', await web3.eth.getGasPrice())
      console.log('getBlockNumber', await web3.eth.getBlockNumber())
      console.log('getBalance', await web3.eth.getBalance(accounts[0]))
      console.log('getStorageAt', await web3.eth.getStorageAt("0x407d73d8a49eeb85d32cf465507dd71d507100c1", 0))
      console.log('getCode', await web3.eth.getCode("0xd5677cf67b5aa051bb40496e68ad359eb97cfbf8"))
      const block = await web3.eth.getBlock("latest", true)
      console.log('getBlock', block)

      console.log('getBlockTransactionCount', await web3.eth.getBlockTransactionCount("latest"))
      console.log('getBlockUncleCount', await web3.eth.getBlockUncleCount("latest"))
      console.log('getUncle', await web3.eth.getUncle("latest", 1))

      const first = block.transactions[0].hash;
      console.log('getTransaction', await web3.eth.getTransaction(first))

      console.log('getPendingTransactions', await web3.eth.getPendingTransactions())

      console.log('getTransactionFromBlock', await web3.eth.getTransactionFromBlock(block.hash, 0))

      // console.log('getCode:', web3.eth.getCode);
      // console.log('getTransactionCount:', web3.eth.getTransactionCount());
      // console.log('getStorageAt:', web3.eth.getStorageAt());


      if (accounts.length === 0) {
        console.log("Please connect to MetaMask!");
      } else if (accounts[0] !== currentAccount) {
        setCurrentAccount(accounts[0]);
        const accBalanceEth = web3.utils.fromWei(
          await web3.eth.getBalance(accounts[0]),
          "ether"
        );

        setBalance(Number(accBalanceEth).toFixed(6));
        setIsConnected(true);
      }
    }
  };

  return (
    <>
      {!isConnected && <button onClick={onLogin}>连接web3钱包</button>}
      <div>资产：{balance}</div>
    </>
  );
};

export default BlockChain;
