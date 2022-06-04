const db = require('../db')

//----------------------------------------------------------------------------------

const getAllUsers = async (req,res,next)=>{
	try {
		const results = await db.query('SELECT * FROM users')
		res.json(results.rows) 
	} catch (error) {
		next(error);
	}
}

const getUser = async(req,res,next)=>{
	try{
		const {id} = req.params
		const result = await db.query('SELECT * FROM users WHERE id = $1', [id])
		if(result.rows.length === 0)
		return res.status(404).json({
			message: "User not found"
		});
	res.json(result.rows[0]);
	} catch (error){
		next(error);
	}
}

const createUser = async(req,res,next)=>{
	const { name, documento, email, password } = req.body
	try {
		const result = await db.query(
		'INSERT INTO users (name, documento, email, password) VALUES ($1, $2, $3 ,$4) RETURNING *',[
		name,
		documento,
		email,
		password
	]);
	console.log(result)
	res.json(result.rows[0])
	} catch (error){
		next(error);	
	}
}

const deleteUser = async(req,res,next)=>{
	try {
		const {id} = req.params
		const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
		if(result.rowCount === 0)
		return res.status(404).json({
			message: "User not found"
		}); 
	return res.status(200);
	} catch (error){
		next(error);
	}
}

const updateUser = async(req,res,next)=>{
	try{
		const {id} = req.params
		const {name, documento, email, password} = req.body
		const result = await db.query('UPDATE users SET name = $1, documento = $2, email = $3, password = $4 WHERE id = $5', 
		[name, documento, email, password, id]
	);
	 	if(result.rowCount === 0)
		return res.status(404).json({
			message: "User not found"
		}); 
	return res.json(result.rows[0]);
	} catch(error){
		next(error);
	}
}

//--------------------------------------------------------------------------------------------

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
}