# Not Equal Validator
This module is small but easy to use. The purpose of this module is to check if a target value is not equals a source value, it can optionally also do none case sensitive comparing.
## Validation processes
The code contains two methods to check if two string are equal.
### Compare method 1
This method is case sensitive so both source value and target value must be the same case.
### Compare method 2
This method is not case sensitive so both source value and target value can be any case.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import { valueIsEqual } from '@teamcoder/notequalvalidator';

console.log( "Testing Condition  1 Passed = " + !valueIsNotEqual( "Hallo world" , "Hallo world"         ) );
console.log( "Testing Condition  2 Passed = " + valueIsNotEqual(  "Hallo world" , "Hallo World"         ) );
console.log( "Testing Condition  3 Passed = " + !valueIsNotEqual( "Hallo world" , "Hallo world" , true  ) );
console.log( "Testing Condition  4 Passed = " + valueIsNotEqual(  "Hallo world" , "Hallo World" , true  ) );
console.log( "Testing Condition  5 Passed = " + !valueIsNotEqual( "Hallo world" , "Hallo world" , false ) );
console.log( "Testing Condition  6 Passed = " + !valueIsNotEqual( "Hallo world" , "Hallo World" , false ) );
console.log( "Testing Condition  7 Passed = " + !valueIsNotEqual(  14            , 14                   ) );
console.log( "Testing Condition  8 Passed = " + valueIsNotEqual(   1             , 14                   ) );
console.log( "Testing Condition  9 Passed = " + !valueIsNotEqual(  true          , true                 ) );
console.log( "Testing Condition 10 Passed = " + valueIsNotEqual(   true          , false                ) );
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
Testing Condition  3 Passed = true
Testing Condition  4 Passed = true
Testing Condition  5 Passed = true
Testing Condition  6 Passed = true
Testing Condition  7 Passed = true
Testing Condition  8 Passed = true
Testing Condition  9 Passed = true
Testing Condition 10 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { Any     } source        The source value to be checked
@param  { Any     } target        The target value to be checked
@param  { Boolean } caseSensitive If the check must be case sensitive ( optional , default = true )
```
### Parameters Returned
```
@return { Boolean }               Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \notequalvalidator\notequalvalidator.js:1
import { valueIsNotEqual } from '@teamcoder/notequalvalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 07 September 2022      | Official first release                                                                                |
| 1.0.1    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.2    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.3    | 11 September 2022      | Removed Default from export function in notequalvalidator.js file                                     |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/notequalvalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
NotContainValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)