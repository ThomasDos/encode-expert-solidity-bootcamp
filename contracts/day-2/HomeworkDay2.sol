// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract HomeworkDay2 {
    event ArrayModified(uint[]);
    uint[] public myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    function removeFromIndex(uint indexToRemove) public {
        require(
            indexToRemove <= myArray.length,
            "Number is out of array's range"
        );

        for (uint i = indexToRemove; i < myArray.length; i++) {
            if (i < myArray.length - 1) {
                myArray[i] = myArray[i + 1];
            } else {
                myArray.pop();
            }
        }
        emit ArrayModified(myArray);
    }
}
