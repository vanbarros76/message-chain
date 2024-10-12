import { ethers } from "ethers";

export interface Message {
  sender: string;
  content: string;
  
}

export interface MessageChainContract extends ethers.BaseContract {
  postMessage: (content: string) => Promise<ethers.ContractTransaction>;
  getMessages: () => Promise<Message[]>;
}