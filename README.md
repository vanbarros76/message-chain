# AI Chatbot

Um chatbot de mensagens para a plataforma MessageChain.

## Características

- Integração com a API https://cloud.reown.com
- Interface de usuário intuitiva em React
- Histórico de chat persistente
- Personalização de prompts

## Começando

Estas instruções fornecerão uma cópia do projeto em funcionamento na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (geralmente vem com Node.js)
- Uma chave de API

### Instalação

1. Clone o repositório
   ```
   git clone https://github.com/vanbarros76/message-chain.git
   ```
2. Navegue até o diretório do projeto
   ```
   cd message-chain
   ```
3. Instale as dependências
   ```
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API 
   ```
   API_KEY=sua_chave_api_aqui
   ```
5. Inicie o servidor de desenvolvimento
   ```
   npm start
   ```

## Uso

Após iniciar o servidor de desenvolvimento, abra seu navegador e acesse `http://localhost:3000`. Você verá a interface do chatbot. Digite suas mensagens na caixa de texto na parte inferior e pressione Enter ou clique no botão de envio para interagir com o chatbot.

## Estrutura do Projeto

- `src/`
  - `components/`: Contém os componentes React
  - `contexts/`: Contém os contextos React para gerenciamento de estado
  - `hooks/`: Contém hooks personalizados
  - `services/`: Contém serviços para interação com a API
  - `styles/`: Contém arquivos de estilo
  - `utils/`: Contém funções utilitárias

## Roadmap

- [x] Implementação básica do chatbot
- [x] Integração com a API da OpenAI
- [x] Interface de usuário em React
- [x] Histórico de chat persistente

## Contribuindo

Contribuições são bem-vindas! Por favor, leia o arquivo `CONTRIBUTING.md` para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo `LICENSE.md` para detalhes.

## Contato

Vanessa Barros - https://www.linkedin.com/in/vanessabarros-tech/ - vanessabarros.tech@gmail.com
Vinicius Barbieri - https://www.linkedin.com/in/vinibarbieri/ - vinicius190702@hotmail.com

Link do Projeto: https://github.com/vanbarros76/message-chain.git
