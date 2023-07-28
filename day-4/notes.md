**Proxy Contract**

- Proxy contracts are relatively more expensive. Take caution while using them.
- Be careful with the implementation contract address to avoid any issues.
- Avoid overriding storage values unintentionally.
- Respect the order of value declarations in your contract.
- Always add new storage items to the end of the variables to prevent compatibility issues.

**Diamond Pattern**

- The diamond pattern becomes useful when you approach the maximum size per contract.
- Consider using the diamond pattern to manage complexity and size limitations in your contracts.

**Using a Fork with Hardhat**

- You can use a fork with `npx hardhat node --fork <key>` command.
- This command allows you to take a real snapshot of the blockchain state and contracts.
- Useful for simulating communication with other contracts.
- By specifying the block number to start on, you can access specific states (e.g., state of the Uniswap contract).

**Foundry**

- Foundry offers fuzz testing capabilities and is very fast.
- It supports more advanced tests compared to other tools.
- You can write your tests in Solidity directly, which is beneficial for maintaining the same syntax and type consistency throughout your codebase.
