import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    velasTestnet: {
      url: "RPC_URL_HERE",
      chainId: 111,
      accounts: [
        `PRIVATE_KEY_HERE`,
      ],
    },
  },
};

export default config;
