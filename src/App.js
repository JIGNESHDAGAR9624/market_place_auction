
import './App.css';
import { Home } from './components/Home';
import {Mint} from './components/Mint'
import { ConnectMetamask } from './components/ConnectMetamask';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';

import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Marketplase } from './components/Marketplase';
import { Auction } from './components/Auction';
import { Purchasednft } from './components/Purchasednft';
import { Fetchnft } from './components/Fetchnft';
import { Claimnft } from './components/Claimnft';
import { Bidder } from './components/Bidder';



function App() {

  const projectId = '2eb6af511cba48476c9e3b22ae61d75e';

  const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
  };

  const sepolia = {
    chainId: 11155111,
    name: 'Sepoliatestnetwork',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/fQbtYiCiMDHm03mgiBMwcLon3k2-m_Yd'
  }

  const bscTestnet = {
  chainId: 97,
  name: 'BSC TestNet',
  currency: 'TBNB',
  explorerUrl: 'https://testnet.bscscan.com/',
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
}



  const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/'],
  };

  const ethersConfig = defaultConfig({
    metadata,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: '...',
    defaultChainId: 1,
  });

  createWeb3Modal({
    ethersConfig,
    chains: [mainnet,sepolia,bscTestnet],
    projectId,
    enableAnalytics: true,
  });

  return (
    <div className="App">
    <Navbar />
    <ConnectMetamask />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="/marketplase" element={<Marketplase />} />
      <Route path="/purcahsednft" element={<Purchasednft />} />
      <Route path="/fetchnft" element={<Fetchnft />} />
      <Route path="/auction" element={<Auction />} />
      <Route path="/bidder" element={<Bidder />} />
      <Route path="/claimnft" element={<Claimnft />} />
    </Routes>
  </div>
  );
}

export default App;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmZTc0N2FhMC0yMmIzLTQ0NTEtYjQ5Ny0zM2IwNDA5MDNiZGQiLCJlbWFpbCI6ImRldmVsb3Blci5hYmhpc2hla2JlZEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMzgzMDdhOTdjYTY5MDQ0YWJmMjgiLCJzY29wZWRLZXlTZWNyZXQiOiJhMTU4M2Y2OTdiZDllMDM4YmMyNThjYzhhMWI3OTk2NmUwMjFkZGE4ZDhiM2IyNWM3YTNhMzQ4YmI4OTczNzQ0IiwiaWF0IjoxNzE3NTgzMjAzfQ.rux7oLNZJ6wOpDOBKRnr6mgTjvzm7jl9Ddqj8liaQDc