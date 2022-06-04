import { AppBar, Box, Container, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
	
	const navigate = useNavigate();
	return (
		<Box sx={{flexGrow: 1}} >
			<AppBar position="static" color="transparent">
				<Container>
					<Toolbar>
						<Typography variant='h6' sx={{flexGrow: 1}}>
							<Link to='/' 
							 style={{textDecoration: "none", color: 'white'}}>
							 GoPass
							 </Link>
						</Typography>
						<Button 
							variant='contained' 
							color='primary' 
							onClick={()=> navigate("/user/new") 
							}>
							New User
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	)
}

