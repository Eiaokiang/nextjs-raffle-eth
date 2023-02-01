const { network } = require("hardhat");

const BASE_FEE = "250000000000000000"; // 0.25 is this the premium in LINK?
const GAS_PRICE_LINK = 1e9; // link per gas, is this the gas lane? // 0.000000001 LINK per gas

module.exports = async ({ getNamedAccounts, demployment }) => {
  const { deploy, log } = demployment;
  const { deployer } = await getNamedAccounts();

  const chainId = network.config.chainId

  if(chainId == 31337){
    log("Local network detected! Deploying mocks...")
    const mock = await deploy("VRFCoordinatorV2Mock", {
        from: deploy,
        log: true,
        args: [BASE_FEE, GAS_PRICE_LINK],
      });  
  }
  
};
