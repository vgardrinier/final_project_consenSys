var EnergyTrading = artifacts.require("./energyTrading.sol");

module.exports = function(deployer) {
  deployer.deploy(EnergyTrading);
};
