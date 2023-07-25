Put a fix version of solidity compiler once its tested and ready to be deployed

Don't use modifier to modify state (except specific needs)

Emit an event every time you change the state

storage / memory (temporary modifiable) / calldata (temporary readonly)
constant (defined compile time) / immutable (can be define till constructor())

custom error better than require ?
import same as copy pasting all the code in the file

enum.min enum.max

selfdestruct deprecated

Miners choose transactions, can add their block, choose the order
