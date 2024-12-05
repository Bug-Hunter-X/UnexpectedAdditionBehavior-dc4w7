# Unexpected Behavior in Addition Operation Due to Non-Numeric Inputs

This repository demonstrates a common JavaScript bug related to type checking before performing arithmetic operations. The `bug.js` file contains the buggy code, which fails to handle cases where the inputs are not numbers, leading to unexpected behavior or errors. The `bugSolution.js` file provides a corrected version that explicitly handles non-numeric inputs.

## Bug Description

The function `foo` adds two numbers. However, it doesn't check the type of the inputs before performing the addition. If the inputs are not numbers, the addition will result in `NaN` (Not a Number) or an error in strict mode.

## Solution

The solution involves adding type checking to ensure that the inputs are numbers before performing the addition.  If they are not numbers, the function returns an appropriate value (e.g., null or NaN) to signal the error.