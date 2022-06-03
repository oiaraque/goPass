const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
//----------------------------------------------------------------------------------

const userRoutes = require('./src/routes/users.routes')

//----------------------------------------------------------------------------------

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//----------------------------------------------------------------------------------

app.use(userRoutes);

app.use((err,req,res,next)=>{
	return res.json({
		message: "Error!!"
	})
})

//----------------------------------------------------------------------------------

app.listen(4000);
console.log('listening on port 4000'); 	