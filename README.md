# DioToken (DTK)

Token ERC-20 implementado em Solidity 0.8.28 usando Hardhat 3.

## 📝 Sobre

**DioToken** é uma implementação do padrão ERC-20 com supply fixo de 10 DTK. Projeto desenvolvido com Hardhat 3 e TypeScript.

**Token Info:**

- Nome: Dio Token
- Símbolo: DTK
- Decimais: 18
- Supply: 10 DTK

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Compilar contratos
npx hardhat compile

# Executar testes
npx hardhat test

# Deploy local
npx hardhat run scripts/deploy.ts
```

## 🧪 Testes

```bash
# Todos os testes
npx hardhat test

# Apenas testes TypeScript
npx hardhat test mocha
```

## 📦 Deploy

### Rede Local

```bash
# Terminal 1
npx hardhat node

# Terminal 2
npx hardhat run scripts/deploy.ts --network localhost
```

## 🛠️ Stack

- **Solidity** 0.8.28
- **Hardhat** 3.1.10
- **TypeScript** 5.8
- **Ethers.js** 6.16.0
- **Mocha + Chai** para testes

## 📂 Estrutura

```
├── contracts/
│   └── DioToken.sol       # Contrato ERC-20
├── test/
│   └── DioToken.test.ts   # Testes
├── scripts/
│   └── deploy.ts          # Script de deploy
└── hardhat.config.ts      # Configuração
```

## 📖 Contrato

Implementação completa do ERC-20:

```solidity
// Funções principais
function transfer(address recipient, uint256 amount) external returns (bool)
function approve(address spender, uint256 amount) external returns (bool)
function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)

// Consultas
function balanceOf(address account) external view returns (uint256)
function totalSupply() external view returns (uint256)
function allowance(address owner, address spender) external view returns (uint256)
```

## 🔧 Comandos Úteis

```bash
npx hardhat compile           # Compilar
npx hardhat test              # Testar
npx hardhat node              # Node local
npx hardhat console           # Console interativo
npx hardhat clean             # Limpar cache
```
