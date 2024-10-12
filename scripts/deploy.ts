import { ethers } from "hardhat";

async function main() {
  const MessageChain = await ethers.getContractFactory("MessageChain");
  const messageChain = await MessageChain.deploy();

  await messageChain.waitForDeployment();

  console.log("MessageChain deployed to:", await messageChain.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});