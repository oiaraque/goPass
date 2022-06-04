import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

const TaskForm = () => {
  	const [user, setUser] = useState({
		name:'',
    documento:'',
		email:'',
		password:''
	});
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  	useEffect(() => {
    if (params.id) {
      cargarUser(params.id);
    }
  }, [params.id]);

	const cargarUser = async (id) => {
    const res = await fetch("http://localhost:4000/users/" + id);
    const data = await res.json();
    setUser({ name: data.name, documento: data.documento, email: data.email, password: data.password });
    setEditing(true);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        const response = await fetch(
          "http://localhost:4000/users/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        await response.json();
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            {editing ? "Update User" : "Create User"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Name"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="name"
                onChange={handleChange}
                value={user.name}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Document"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="documento"
                onChange={handleChange}
                value={user.documento}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField 
        				variant='filled'
        				label='Email'
        				sx={{
        					display:'block',
        					margin:'.5rem 0'
        				}}
        				name='email'
        				value={user.email}
        				onChange={handleChange}
        				inputProps={{style:{color:'white'}}}
        				InputLabelProps={{style:{color:'white'}}}
        				/>
        			  <TextField 
        				variant='filled'
        				label='Password'
        				sx={{
        					display:'block',
        					margin:'.5rem 0'
        				}} 
        			    name='password'
        				value={user.password}
        				onChange={handleChange}
        				inputProps={{style:{color:'white'}}}
        				InputLabelProps={{style:{color:'white'}}} 	
        				/>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!user.name || !user.documento || !user.email || !user.password}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;