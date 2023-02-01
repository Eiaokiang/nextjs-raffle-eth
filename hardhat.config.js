require("@nomicfoundation/hardhat-toolbox");
// require('hardhat-deploy');
require ( "hardhat-gas-reporter" ) ;
// require ('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
// require("@nomiclabs/hardhat-solhint");

const { ETHERSCAN_API_KEY,ACCOUNT_PRIVATE_KEY,COINMARKETCAP_API_KEY,GAS_TOKEN,GAS_COST_ENABLE,GAS_TO_CURRENCY,GAS_PRICE_API} = process.env

module.exports = {
  solidity: "0.8.17",

  defaultNetwork: "hardhat",
  networks:{
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/oVJAWnPCFLAKiaehweDoVG9XLlWG3fhJ`,
      chainId: 137,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/ek4ccqho9i9imcz8PqA5Iabh3iN5yZLz`,
      chainId: 80001,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    addr1: {
      default: 1
    },
    addr2: {
      default: 2
    },
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY,
  },  
  gasReporter:{
    // enabled: GAS_COST_ENABLE,
    // outputFile: "gas-report.txt",
    // noColors: true,
    // currency: GAS_TO_CURRENCY,
    // coinmarketcap: COINMARKETCAP_API_KEY,
    // token: GAS_TOKEN,
    // gasPriceAPI: GAS_PRICE_API
    
    enabled: false,
    // outputFile: "gas-report.txt",
    noColors: true,
    currency: "CNY",
    coinmarketcap: "4fbc599d-5675-4e94-831b-0b3e79e806a7",
    token: "ETH",
  },
};
