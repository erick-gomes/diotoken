import hre from "hardhat";

async function main(): Promise<void> {
    console.log("Iniciando deploy do DioToken...\n");

    // Hardhat 3: conexão de rede via network.connect()
    const connection = await hre.network.connect();
    const ethers = connection.ethers;

    // Pega a conta que vai fazer o deploy (primeira conta da rede Hardhat)
    const [deployer] = await ethers.getSigners();
    console.log("Deployer:", deployer.address);

    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Saldo do deployer:", ethers.formatEther(balance), "ETH\n");

    // Faz o deploy usando deployContract (forma simplificada do Hardhat 3)
    console.log("Fazendo deploy...");
    const dioToken = await ethers.deployContract("DioToken");

    // Aguarda confirmação
    await dioToken.waitForDeployment();

    const contractAddress = await dioToken.getAddress();
    console.log("DioToken deployado com sucesso!");
    console.log("Endereço do contrato:", contractAddress);

    // Informações do token
    console.log("\nInformações do Token:");
    console.log("   Nome:     ", await dioToken.name());
    console.log("   Símbolo:  ", await dioToken.symbol());
    console.log("   Decimais: ", await dioToken.decimals());

    const totalSupply = await dioToken.totalSupply();
    console.log("   Supply:   ", ethers.formatEther(totalSupply), "DTK");

    // Saldo do deployer após o deploy
    const deployerBalance = await dioToken.balanceOf(deployer.address);
    console.log("\nSaldo do deployer:", ethers.formatEther(deployerBalance), "DTK");
}

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error("Erro no deploy:", error);
        process.exit(1);
    });