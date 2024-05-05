const { ethers } = require("ethers");
const fs = require("fs");

// // Infura API key and Ethereum network
// const infuraApiKey = "YOUR_INFURA_API_KEY";
// const network = "ropsten"; // or "mainnet" for Ethereum mainnet


// ABI and contract address
const abi = JSON.parse(fs.readFileSync("artifacts/contracts/Token.sol/Token.json")).abi;
const contractAddress = "0x23d99e3711470a24fe6038755229f0ab766d518d6c87c9d191c501bb39ad756f";
const privateKey = "0x0dd9244fe0733d4e384c9f1e9b0187772ddc9de6d0ba6eb807d7d9767519af3b";

async function mintNFT() {
    // Initialize the Provider
const provider = new ethers.providers.JsonRpcProvider('https://saigon-testnet.roninchain.com/rpc');
    const wallet = new ethers.Wallet(privateKey, provider);

    const contract = new ethers.Contract(contractAddress, abi, wallet);

    try {
        const tx = await contract.mintNFT(wallet.address);
        await tx.wait();
        console.log("NFT minted successfully!");
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
}

mintNFT();


// const { ethers } = require('ethers');

// // Initialize the Provider
// const provider = new ethers.providers.JsonRpcProvider('https://saigon-testnet.roninchain.com/rpc');

// async function mint(toAddress) {
//   // Create a wallet from the private key
//   const wallet = new ethers.Wallet(privateKey, provider);

//   // Convert amount to Wei
//   const weiAmount = ethers.utils.parseEther(amount);

//   // Create a transaction object
//   const transaction = {
//     recipient: toAddress,
//   };

//   // Sign and send the transaction
//   const transactionResponse = await wallet.sendTransaction(transaction);
//   console.log(transactionResponse)

//   // Wait for the transaction to be confirmed
//   await transactionResponse.wait();

//   // Verify the balance after the transaction
//   const balance = await provider.getBalance(wallet.address);
//   console.log('Balance after sending RON:', ethers.utils.formatEther(balance), 'RON');
// }

// // Call the sendRON function with the necessary parameters
// const privateKey = "privatekey://0x0dd9244fe0733d4e384c9f1e9b0187772ddc9de6d0ba6eb807d7d9767519af3b";
// const toAddress = "0xafb70bdcfecfe4a2f4ab6112500db934fd74fdc7";
// const amount = '0.1'; // Amount of RON to send

// mint(toAddress);

// const API_URL = "https://api-gateway.skymavis.com/rpc/testnet?apikey=jd1a5aFm9ko5sOnWeIIO0LgeLG1rtOeR";
// const PUBLIC_KEY = "0xafb70bdcfecfe4a2f4ab6112500db934fd74fdc7";
// const PRIVATE_KEY = "privatekey://0x0dd9244fe0733d4e384c9f1e9b0187772ddc9de6d0ba6eb807d7d9767519af3b";

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(API_URL);

// const contract = require("contracts/Token.sol/Token.json");
// const contractAddress = "0xb86c551ba814749d025e571c6ed005b1d0622543fd26a4f803e45e17d0b2d777";
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

// async function mintNFT(tokenURI) {
//   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

// //the transaction
//   const tx = {
//     'from': PUBLIC_KEY,
//     'to': contractAddress,
//     'nonce': nonce,
//     'gas': 500000,
//     'data': nftContract.methods.mint(PUBLIC_KEY).encodeABI()
//   };
// }​

// const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
//   signPromise
//     .then((signedTx) => {
//       web3.eth.sendSignedTransaction(
//         signedTx.rawTransaction,
//         function (err, hash) {
//           if (!err) {
//             console.log(
//               "The hash of your transaction is: ",
//               hash,
//               "\nCheck Alchemy's Mempool to view the status of your transaction!"
//             )
//           } else {
//             console.log(
//               "Something went wrong when submitting your transaction:",
//               err
//             )
//           }
//         }
//       )
//     })
//     .catch((err) => {
//       console.log("Promise failed:", err)
//     })
