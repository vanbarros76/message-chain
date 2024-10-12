import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import MessageChain from './artifacts/contracts/MessageChain.sol/MessageChain.json';

const contractAddress = "ENDEREÇO_DO_SEU_CONTRATO";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, MessageChain.abi, signer);
        setContract(contract);
        await loadMessages();
      }
    };
    init();
  }, []);

  const loadMessages = async () => {
    if (contract) {
      const messages = await contract.getMessages();
      setMessages(messages);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contract && newMessage) {
      try {
        const transaction = await contract.postMessage(newMessage);
        await transaction.wait();
        setNewMessage('');
        await loadMessages();
      } catch (error) {
        console.error("Error posting message:", error);
      }
    }
  };

  return (
    <div>
      <h1>MessageChain</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <button type="submit">Enviar</button>
      </form>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.content}</p>
            <small>De: {msg.sender}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;