var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * from users', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});
// Add a new user  
router.post('/', function (req, res) {
	let id = req.body.id;
	let name = req.body.name;
	let phone_number = req.body.phone_number;
	let email_id = req.body.email_id;
	let password = req.body.password;
	console.log(req.body)
	console.log(id);
	console.log(name);
	console.log(phone_number);
	console.log(email_id);
	console.log(password);
	if (!id) {
	  return res.status(400).send({ error:true, message: 'Please provide user' });
	}
	connection.query("INSERT INTO users SET ? ", { id: id, name: name, phone_number: phone_number, email_id: email_id, password: password }, function (error, results, fields) {
  if (error) throw error;
	return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
	});
});

module.exports = router;
