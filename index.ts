import { generateGradientColor } from "./color";

type RelaychainName =
  | "kusama"
  | "polkadot"
  | "rococo"
  | "paseo"
  | "westend"
  | "enjin"
  | "canary"
  | "";

export interface Chain {
  id: string;
  nativeTokenUniqueId: string;
  name: string;
  type: "relaychain" | "testnet" | "mainnet";
  nodeName: string; // fetch from /api/scan/metadata result.networkNode
  theme: {
    colors: string[];
    gradient: string[];
  };
  gtag: string;
  rpcNode: string;
  api: string;
  domain: string;
  subdomain: string[];
  social: {
    telegram?: string;
    twitter?: string;
    github?: string;
    website?: string;
    whitePaper?: string;
    price?: string;
  };
  donate: string;
  parachain?: {
    id: number;
    relaychain: RelaychainName;
  };
  // https://chainlist.org/
  metaMaskConfig?: {
    chainId: string;
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: string[];
    iconUrls?: string[];
    blockExplorerUrls?: string[];
  };
  modules?: {
    BOUNTY: boolean;
    CONTRACT: boolean;
    CONTRACT_SOURCIFY: boolean;
    ETH_ADDRESS: boolean;
    EVM: boolean;
    EVM_NETWORK: boolean;
    FELLOWSHIP: boolean;
    GRANDPA_VOTE: boolean;
    MULTISIG_TOOL: boolean;
    NOMINATION_POOL: boolean;
    NOMINATE_FEATURE: boolean;
    PARACHAIN: boolean;
    PARATHREAD: boolean;
    POLKASSEMBLY_LINK: boolean;
    PRICE: boolean;
    PRICE_CONVERT: boolean;
    PRICE_HISTORY: boolean;
    REFERENDA_V1: boolean;
    REFERENDA_V2: boolean;
    SYSTEM_ACCOUNT: boolean;
    UNIQUE: boolean;
    NFT: boolean;
    V2_REWARD: boolean;
    VESTING: boolean;
    STATE_TRACING: boolean;
    WASM_CONTRACT: boolean;
    WASM_CONTRACT_SOURCIFY: boolean;
    // has hide prefix before
    SS58: boolean;
    BOND_CHART: boolean;
    UNBOND_CHART: boolean;
    SUPPLY_CHART: boolean;
    TREASURY_CHART: boolean;
    VALIDATOR: boolean;
    FINALIZEDBLOCK: boolean;
    GOVERNANCE: boolean;
    GOVERNANCE_COUNCIL: boolean;
    GOVERNANCE_TECH: boolean;
    GOVERNANCE_TREASURY: boolean;
    GOVERNANCE_TIPS: boolean;
    GOVERNANCE_BOUNTY: boolean;
    COLLATOR: boolean;
  };
  disable: boolean;
}

export const DynamicChains: Chain[] = [
  {
    id: "darwinia-parachain",
    nativeTokenUniqueId: "RING",
    name: "Darwinia",
    nodeName: "darwinia2",
    type: "mainnet",
    theme: {
      colors: ["#ff0083", "#F499C0", "#d7d7d7"],
      gradient: generateGradientColor('#d7d7d7', '#ff0083', 6),
    },
    gtag: "G-MYEDJ9WZY6",
    rpcNode: "https://rpc.darwinia.network/",
    api: "https://darwinia.webapi.subscan.io",
    domain: "https://darwinia.subscan.io",
    subdomain: ["darwinia"],
    social: {
      telegram: "https://t.me/DarwiniaNetwork",
      twitter: "https://twitter.com/DarwiniaNetwork",
      github: "https://github.com/darwinia-network",
      price: "https://www.coingecko.com/en/coins/darwinia-network-native-token",
      website: "https://darwinia.network/",
      whitePaper: "",
    },
    parachain: {
      id: 2046,
      relaychain: "polkadot",
    },
    metaMaskConfig: {
      chainId: "0x2e",
      chainName: "Darwinia Network",
      nativeCurrency: {
        name: "RING",
        symbol: "RING",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.darwinia.network"],
      blockExplorerUrls: ["https://darwinia.subscan.io"],
    },
    donate: "0x9c0fEf6b48Cb0B16EDc72a61d9503A78782c19e2",
    modules: {
      BOUNTY: false,
      CONTRACT: true,
      CONTRACT_SOURCIFY: true,
      ETH_ADDRESS: true,
      EVM: true,
      EVM_NETWORK: true,
      FELLOWSHIP: false,
      GRANDPA_VOTE: true,
      MULTISIG_TOOL: false,
      NOMINATION_POOL: false,
      NOMINATE_FEATURE: false,
      PARACHAIN: false,
      PARATHREAD: true,
      POLKASSEMBLY_LINK: false,
      PRICE: true,
      PRICE_HISTORY: true,
      PRICE_CONVERT: true,
      REFERENDA_V1: true,
      REFERENDA_V2: true,
      SYSTEM_ACCOUNT: true,
      UNIQUE: false,
      NFT: false,
      V2_REWARD: false,
      VESTING: true,
      STATE_TRACING: false,
      WASM_CONTRACT: false,
      WASM_CONTRACT_SOURCIFY: false,
      // has hide prefix before
      SS58: false,
      TREASURY_CHART: true,
      UNBOND_CHART: true,
      BOND_CHART: true,
      SUPPLY_CHART: true,
      VALIDATOR: false,
      FINALIZEDBLOCK: true,
      GOVERNANCE: true,
      GOVERNANCE_COUNCIL: true,
      GOVERNANCE_TECH: true,
      GOVERNANCE_TREASURY: true,
      GOVERNANCE_TIPS: true,
      GOVERNANCE_BOUNTY: false,
      COLLATOR: false,
    },
    disable: false,
  },
];
