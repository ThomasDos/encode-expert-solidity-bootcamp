Sure! Here's the content in Markdown format with the necessary fixes:

### Ethereum Virtual Machine (EVM) and Gas

- Stack items have a size of 256 bits; in fact, the EVM is a 256-bit word machine. This facilitates Keccak256 hash scheme and elliptic-curve computations.

- The gas counter gets reduced with every transaction. If it reaches 0 during execution, an "out of gas" error occurs.

- It is cheaper to store data in an event within a smart contract compared to using storage variables. This makes events more cost-effective for certain applications.

### Contract Interaction

- To call a function in another contract, Ethereum provides two methods: `call` or `delegatecall`. The `call` method provides a new execution context, whereas `delegatecall` allows the called contract to retain the context of the previous contract.
