Implemented math webservice in node.js to perform addition, subtraction, division and multiplication on integer operands which is deployed on node.ACS; wrote API unit tests in mocha.

Note: This API could be extended to accept real numbers.

Steps to run:
1. unzip mathproj.tar.gz 
2. cd to mathproj
3. run the command: acs run
4. to manually test the API, point the browser to the URLS:
 http://localhost:8080/add/4/5 
 http://localhost:8080/multiply/4/5 
 http://localhost:8080/subtract/14/5 
 http://localhost:8080/divide/50/5 

5. to run the mocha test, cd into test folder and run the command: mocha mathtest.js

REST API can found in controllers/application.js
Mocha test scripts can be found in test/mathtest.js where the following testcases are implemented:
1. for addition:
 1.1 add positive numbers 
 1.2 add positive and negative numbers
 1.3 operand is not a number
 1.4 not found request (error code 404)
 1.5 bad request (error code 400)
2. for division:
 2.1 divide positive numbers
 2.2 divide positive and negative numbers
 2.3 operand is not a number
 2.4 not found request (error code 404)
 2.5 bad request (error code 400)
3. for subtraction:
 3.1 subtract positive numbers
 3.2 subtract negative numbers
 3.3 subtract positive and negative numbers
 3.4 operand is not a number
 3.5 not found request (error code 404)
 3.6 bad request (error code 400)
4. for multiplication:
 4.1 multiply positive numbers
 4.2 multiply negative numbers
 4.3 multiply positive and negative numbers
 4.4 operand is not a number
 4.5 not found request (error code 404)
 4.6 bad request (error code 400)

Additional testcases that could be implemented are:
1. testing boundary conditions of first operand
2. testing boundary conditions of second operand

