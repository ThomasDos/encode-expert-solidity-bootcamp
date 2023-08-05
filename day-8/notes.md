# Gas Optimization Tips

- **Think about which functions your users will use the most**
- **Don't overcomplicate things or make them too generic if not needed**
- **Break the loop as soon as possible**
- **When using conditions, prioritize the cheapest conditions first**

# Storage Considerations

- **Avoid storing unnecessary data on the contract; consider using or writing it in the future**
- **Events are always cheaper than storage**
- **Don't store all variable states or modified states if not needed after complex calculations**
- **Avoid repetitive checks and ensure the logic of the code is optimized**

# Gas Refunds and Data Types

- **Refund gas by zeroing variables you don't need; some opcodes trigger gas refund**
- **Use bytes32 whenever possible, it is the most optimized storage type**
- **Prefer bytes over byte[] and use the lowest amount possible from bytes1 to bytes32**
- **Use bytes32 instead of string**
- **Use mapping over array whenever possible; arrays can be a correct choice for small data types**

# Contract Size and Packing Variables

- **After deployment, the contract's size won't change the fees, but the complexity of the logic will**
- **Pack several blocks into one struct instead of creating multiple variables if they are smaller than bytes32**

# Variable Usage

- **Prefer events over storing data**
- **Avoid public variables as they create getter functions**
- **Use memory arrays or fixed arrays if the length is known**
- **Optimize by naming the return value**
- **Call data is cheaper than memory**

# Function Usage and Modifiers

- **View functions used in another function will cost gas**
- **Modifiers consume a lot of gas; use them carefully**
- **Avoid using storage variables in loops**

# Error Handling

- **Custom errors are cheaper than using require**

# Compiler Optimization and Version

- **Use the optimizer to remove dead code**
- **Use the latest Solidity version for better results**
- **Reduce error messages to be as short as possible**
- **Use keccak256, as it is cheaper**

# Visualization

- **For storage visualization, use sol2UML visualization Tool**
