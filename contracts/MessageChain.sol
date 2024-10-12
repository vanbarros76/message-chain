// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MessageChain {
    struct Message {
        string content; // conteúdo da mensagem
        address sender; // endereço do remetente
    }

    Message[] public messages; // array de mensagens  

    function createMessage(string memory _content) public {
        messages.push(Message({content: _content, sender: msg.sender}));
    }

    // função para retornar todas as mensagens
    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }

}


