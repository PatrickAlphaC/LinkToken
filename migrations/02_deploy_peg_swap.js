const version = process.env.VERSION || 'v0.6'

const { PegSwap } = require(`../build/truffle/${version}/PegSwap`)
PegSwap.setProvider(web3.currentProvider)

module.exports = function (deployer, _, accounts) {
  deployer.deploy(PegSwap, { from: accounts[0] })
}
