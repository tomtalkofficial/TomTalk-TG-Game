/** @format */

import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoadingScreen from "./utils/LoadingScreen.jsx";
import { Provider } from "react-redux";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { coreDao } from "viem/chains";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";
import { MicrophoneProvider } from "./contexts/MicrophoneContext.jsx";

// Define Core Testnet chain
const coreTestnet = {
  id: 1115, // Core Testnet chain ID
  name: "Core Blockchain Testnet",
  network: "testnet",
  nativeCurrency: {
    name: "Core",
    symbol: "tCORE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.test.btcs.network"],
    },
    public: {
      http: ["https://rpc.test.btcs.network"],
    },
  },
  blockExplorers: {
    default: { name: "CoreScan", url: "https://scan.test.btcs.network" },
  },
  testnet: true,
};

const chains = [coreDao, coreTestnet];
const projectId = "274e457109a402af68eedd237289c55f";
const queryClient = new QueryClient();

const metadata = {
  name: "Tom Talk",
  description: "First Talk to Earn Game on Core Blockchain!",
  url: "https://tomtalk.io/",
  icons: ["https://tomtalk.io/assets/images/talktom.png"],
};
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<LoadingScreen />}>
    <Provider store={store}>
      <MicrophoneProvider>
        <TonConnectUIProvider manifestUrl="https://game.tomtalk.io/tonconnect-manifest.json">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TonConnectUIProvider>
      </MicrophoneProvider>
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </Suspense>,
);
