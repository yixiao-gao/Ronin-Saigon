require('hardhat-deploy')
module.exports = {
    solidity: "0.8.24",
    namedAccounts: {
        deployer: 'privatekey://0x0dd9244fe0733d4e384c9f1e9b0187772ddc9de6d0ba6eb807d7d9767519af3b',
      },
    networks: {
      ronin: {
        chainId: 2020,
        url: 'https://api.roninchain.com/rpc',
      },
      saigon: {
        chainId: 2021,
        url: 'https://saigon-testnet.roninchain.com/rpc',
      },
    }
  };