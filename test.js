import valueIsNotEqual from './notequalvalidator.js';

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

