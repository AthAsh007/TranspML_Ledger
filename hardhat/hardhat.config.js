require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };
const SEPOLIA_PRIVATE_KEY = "8c64c04b09b2c815ffa585902b30f63d9f57fda2d8a14b3ffa2c35199fc494cf"

module.exports = {
  solidity: "0.8.9",
  networks: {
      sepolia: {
        url: `https://eth-sepolia.g.alchemy.com/v2/DRBbqZa6zmOj4r42fXmeRj7whHmmK3nq`,
        accounts: [SEPOLIA_PRIVATE_KEY]
      }
  }
};