const hre = require("hardhat")

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter")
  const greeter = await Greeter.deploy("Initial greeting")
  await greeter.deployed()

  console.log(`Contract is deployed to ${greeter.address} `)
}

main().catch((error) => {
  console.log(error)
  process.exitCode = 1
})