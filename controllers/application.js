function nan(result, res) {
        if (isNaN(result))
          res.json('NaN...');
        else {
          res.json(result);
	  console.log("Result="+result);
	}
}
function add(req, res) {
	op1 = parseInt(req.params.oper1);
        op2 = parseInt(req.params.oper2);
	if (isNaN(op1) || isNaN(op2))
	 res.json('Operand not a number');
        else {
	 result = parseInt(op1)+parseInt(op2);
         nan(result, res);
	}
}
function multiply(req, res) {
	op1 = req.params.oper1;
        op2 = req.params.oper2;
	if (isNaN(op1) || isNaN(op2))
	 res.json('Operand not a number');
        else {
	 result = op1 * op2;
         nan(result, res);
	}
}

function subtract(req, res) {
	op1 = req.params.oper1;
        op2 = req.params.oper2;
	if (isNaN(op1) || isNaN(op2))
	 res.json('Operand not a number');
        else {
	 result = op1 - op2;
         nan(result, res);
	}
}

function divide(req, res) {
	op1 = req.params.oper1;
        op2 = req.params.oper2;
	if (isNaN(op1) || isNaN(op2))
	 res.json('Operand not a number');
        else {
	 result = op1 / op2;
         nan(result, res);
	}
}
