# Thomas's Meeting Notes

## Summary

1. Add opcode for the program. (Timestamp: 0:00)

   Addresses the opcode that will use the items on the stack to produce a result.

2. Push one of two puts the two items from the top of the stack and then replaces them with the result obtained from the add opcode.

3. The second line is to push to store in location four zero. The opcode for that is the offset and the value.

## An example of how to add items to the stack. (Timestamp: 5:09)

4. Adding two items to the top two items in the stack to store the value at location eight zero, and then storing the results back in the same location in memory of backing eight zero.

5. Adding an item to the stack, adding it to 32 bytes.

## Looking at the stack at different points. (Timestamp: 8:37)

6. The third item on the stack is the function selector, where the function selector is stored, and the call data is also stored.

7. A simple example of what bytecode looks like and how it uses the stack to see what is happening in memory.

## What’s happening when we use the contract? (Timestamp: 11:52)

8. When using the contract, the bytecode is the runtime bytecode that the EVM (Ethereum Virtual Machine) will execute when calling a function in the contract.

9. The first three instructions are there to set up the free memory pointer, including setting up the first area of memory.

## Where to find the value. (Timestamp: 15:11)

10. The first thing it does is call value, which is not dependent on any operands. It returns the amount of e-mail sent along with the transaction.

Dupe one.

## Code copy into memory. (Timestamp: 17:44)

11. If it's not zero, then it's the error part. If any way has been sent, then if it's zero, jump out away from this thing.

12. The next part is to run the constructor, where the constructor will write 17 into the storage slot called value one.

## The second item on the stack. (Timestamp: 21:10)

13. The second item in the stack is the offset in code that is going to be read from.

14. The third item is the length that is being copied from the beginning of the runtime bytecode to the end of the initialization code.

## How does the compiler know the length of code to copy? (Timestamp: 24:37)

15. Ether scan pushes the destination in the bytecode that is going to jump to now, in this case, the value is only one byte, because they are jumping to a small area of bytecode.

16. When verifying a contract, ether scan doesn't need the runtime bytecode, only the bytecode.

## Knowing the size of the bytecode. (Timestamp: 27:43)

17. The unit code is always the first part of the bytecode, and you can work it out to make it smaller.

18. The final part is a code copy.
