import { expect } from "chai";
import hre from "hardhat";

describe("DioToken", function () {
    async function deployDioTokenFixture() {
        const connection = await hre.network.connect();
        const ethers = connection.ethers;

        const [owner, addr1, addr2] = await ethers.getSigners();
        const dioToken = await ethers.deployContract("DioToken");
        await dioToken.waitForDeployment();

        return { dioToken, ethers, owner, addr1, addr2 };
    }

    describe("Informações do Token", function () {
        it("Deve retornar o nome correto", async function () {
            const { dioToken } = await deployDioTokenFixture();
            expect(await dioToken.name()).to.equal("Dio Token");
        });

        it("Deve retornar o símbolo correto", async function () {
            const { dioToken } = await deployDioTokenFixture();
            expect(await dioToken.symbol()).to.equal("DTK");
        });

        it("Deve retornar 18 decimais", async function () {
            const { dioToken } = await deployDioTokenFixture();
            expect(await dioToken.decimals()).to.equal(18);
        });
    });

    describe("totalSupply", function () {
        it("Deve retornar o supply total de 10 DTK", async function () {
            const { dioToken, ethers } = await deployDioTokenFixture();
            const totalSupply = await dioToken.totalSupply();
            expect(totalSupply).to.equal(ethers.parseEther("10"));
        });
    });

    describe("balanceOf", function () {
        it("Deve atribuir o supply total ao deployer", async function () {
            const { dioToken, ethers, owner } = await deployDioTokenFixture();
            const ownerBalance = await dioToken.balanceOf(owner.address);
            expect(ownerBalance).to.equal(ethers.parseEther("10"));
        });

        it("Deve retornar saldo zero para endereço sem tokens", async function () {
            const { dioToken, addr1 } = await deployDioTokenFixture();
            const balance = await dioToken.balanceOf(addr1.address);
            expect(balance).to.equal(0n);
        });
    });
});