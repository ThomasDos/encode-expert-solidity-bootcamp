To save gas:

think about which functiosn your users will use the most
don't overcomplicate things or make it too generics if its not needed
Break the loop asap
when you use conditions, always the cheapest conditions first

storage is a huge topic, can i avoid to store data on the contract ? I'm gonna use or write it on the future?
Events are always cheaper that storage

Dont store all variables state, or modified state if you dont need after a complexe calcul

Avoid repetitive checks, make sure of the logic of the code (don't put onlyOnwner everywhere if its an internal function)

Refunds, try to zeroing asap variable you don't need, it will refund 15000 gas, some opcode can trigger gas refund

Data type :

bytes32 whenever possible, most optimized storage type
better bytes over byte[]
use the lowest amount possible from bytes1 to bytes32

Using bytes32 instead of string

better to use mapping than array

Array can be correct choice when useing small data types

After deployment, during runtime, the size of the contract is not gonna change the fees, the complexity of the logic yes

Packing variables

Pack several blocks into one struc instead of make several variables if they are inferior of bytes32

variables :

use events over storing data
Avoid public variables (will create a getter function)
use memory array / fixed array if the length is known
simple optimisation is naming the return value

call data is cheaper than memory

if view function is used in another function it will cost gas

modifier takes a lot of gas be careful to use it

don't use storage variable in the loop

Custom errors are cheaper that using require

use the optimiser:

remove dead code

Solidity version, latest version is better

reduce error message as short as you can
keccak256 is cheaper

to visualize storage :
sol2UML visualisation Tool
