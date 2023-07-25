import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers'
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('HomeworkDay2', function () {
  async function deployContract() {
    // const [owner, otherAccount] = await ethers.getSigners()

    const Contract = await ethers.getContractFactory('HomeworkDay2')
    const contract = await Contract.deploy()

    return { contract }
  }

  describe('Deployment', function () {
    it('Should deploy the contract and check length of the array', async function () {
      const { contract } = await loadFixture(deployContract)

      expect(await contract.myArray(12)).to.equal(12)

      const tx = await contract.removeFromIndex(5)
      const rc = await tx.wait()

      const logs = rc?.logs.filter((x) => {
        //@ts-ignore
        return x.fragment.name === 'ArrayModified'
      })

      //@ts-ignore
      expect(logs[0].args[0].length).to.equal(12)
    })
  })
})
