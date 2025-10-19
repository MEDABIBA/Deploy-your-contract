import hre from "hardhat";

async function main() {
  const Factory = await hre.ethers.getContractFactory("ContractName");
  const factory = await Factory.deploy(3);
  await factory.waitForDeployment();
  const balance = await hre.ethers.provider.getBalance(
    "0x1cA1b817070719dc302Da852196B5AEADFcA1606"
  );
  console.log("Balance:", balance.toString());
  console.log("Factory deployed at address:", factory.target); 
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

async function getAbi() {
  const artifact = await hre.artifacts.readArtifact("ContractName");
  console.log("Contract ABI:", JSON.stringify(artifact.abi, null, 2));
}
// getAbi();
