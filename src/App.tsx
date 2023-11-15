import "./App.css";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { walletConnectProvider } from "@web3modal/wagmi";

import { WagmiConfig, configureChains, createConfig, useAccount } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygon } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";
import ConnectButton from "./components/ConnectButton";
import Portfolio from "./components/PortFolio";

// 1. Get PROJECT_ID
const projectId = import.meta.env.VITE_PROJECT_ID;
export const apikey = import.meta.env.VITE_ALCHEMY_KEY;
// 2. Create wagmiConfig
const { chains, publicClient } = configureChains(
  [polygon],
  [
    walletConnectProvider({ projectId }),
    publicProvider(),
    alchemyProvider(apikey),
  ]
);

const metadata = {
  name: "Tina's Regsitry",
  description: "Tina's Dex",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata }, //// showQrModal: true하면 Wallet Connect버튼을 눌렀을 때, Wallet Connect 자체 QR 모달도 함께 나옴.(계속 나온다;;)
    }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
  ],
  publicClient,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      {/* //1.ConnectButton */}
      <ConnectButton />
      {/* //2.Portfolio (token amount > 0.000001) */}
      <Portfolio />
    </WagmiConfig>
  );
}

export default App;
