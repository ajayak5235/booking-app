const User = require('../Models/User');

exports.getAddProduct = (req, res, next) => {
	User.findAll()
		.then(UserDetails => {
			// console.log(UserDetails);
			res.json(UserDetails);
		}).catch(err => console.log(err, 'SOME ERROR OCCURED DURING GETTING THE PRODUCTS FROM DB'));
}

exports.postAddProduct = (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;

	return User.create({
		Name: name,
		Mail: email
	}).then((data) => {
		return res.json(data);
		// console.log('USER SUCCESSFULLY ADDED');
	}).catch(err => console.log(err));
}

exports.delete = (req, res, next) => {
	const id = req.body.id;
	User.findByPk(id)
		.then(data => {
			return data.destroy();
		})
		.then(() => {
			console.log('successfully deleted');
			res.redirect('/add-user');
		})
		.catch(err => console.log(err));
}

exports.postEditedUser = (req, res, next) => {
	const id = req.params.id;
	const name = req.body.name;
	const email = req.body.email;
	User.findByPk(id)
		.then(userData => {
			userData.Name = name;
			userData.Mail = email;
			return userData.save();
		})
		.then(data => {
			return res.json(data);
		}).then(()=>{
			res.redirect('/add-user');
		})
		.catch(err => console.log(err));
}