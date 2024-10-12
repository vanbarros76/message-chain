import { ethers } from "hardhat";
import { MessageChainContract } from "./types";

async function main() {
  const [signer] = await ethers.getSigners();

  const contractAddress = "ENDEREÇO_DO_SEU_CONTRATO"; // Substitua pelo endereço real após a implantação
  const MessageChain = await ethers.getContractFactory("MessageChain");
  const messageChain = MessageChain.attach(contractAddress).connect(signer) as MessageChainContract;

  // Postar uma nova mensagem
  const tx = await messageChain.postMessage("Olá, Blockchain!");
  console.log("Mensagem postada com sucesso!");

  // Obter todas as mensagens
  const messages = await messageChain.getMessages();
  console.log("Mensagens:", messages);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});