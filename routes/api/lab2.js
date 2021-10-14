const { response } = require('express');
const express = require('express');
const router = express.Router();

// GET handler
// /api/lab2
router.get('/', function (req, res, next) {

    var method = req.query.method;
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var result;
    var error = false;

    if (method == 'add')
    {
        result = x + y;
    }
    else if (method == 'subtract')
    {
        result = x - y;
    }
    else if (method == 'multiply')
    {
        result = x * y;
    }
    else if (method == 'divide')
    {
        result = x / y;
    }
    else
    {
        error = true;
    }

    if (!error)
    {
        res.json(
            {
                "x": x.toString(),
                "y": y.toString(),
                "operation": method,
                "result": result,
            }
        );
    }
    else
    {
        res.json('ERR: Parameter \'method\' contains invalid value');
    }

});

module.exports = router;