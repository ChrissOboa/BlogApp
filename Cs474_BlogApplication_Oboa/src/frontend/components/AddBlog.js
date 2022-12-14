import React, { useState }  from "react";
import axios from "axios";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = {mb:1 ,mt:2 ,fontSize:"15px", fontWeight: "bold"};
const AddBlog = () => {

  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "", description: "", 
  });

  const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value, //to get input from the text field
      }));
  };
//call request from the database
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/api/blog/add", {
      title: inputs.title,
      description: inputs.description,
      user: localStorage.getItem("userId"),
  }).catch((err) => console.log(err));
  const data = await res.data;
  return data;
};
//handling the submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
    .then((data) => console.log(data))
    .then(() => navigate("/blogs"));

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
        border={3} 
        borderColor="orange" 
        borderRadius={10} 
        boxShadow="10px 10px 20px #ccc" 
        padding={3} 
        margin={"auto"} 
        marginTop={3} 
        display= "flex"
        flexDirection={"column"} 
        width= {"80%"} >

          <Typography 
          className={classes.font}
          fontWeight={"bold"}
          padding= {3}
          color= "grey"
          variant= "h3"
          textAlign={"center"}
          >Post Your Blog
          </Typography>

          <InputLabel className={classes.font} 
          sx={labelStyles} >Title</InputLabel>

          <TextField className={classes.font}
          name="title" 
          onChange={handleChange} value={inputs.title} 
          margin= "auto" variant="outlined"/>

          <InputLabel className={classes.font}
          sx={labelStyles}>Description</InputLabel>

          <TextField className={classes.font}
          name="description" 
          onChange={handleChange} value={inputs.description} 
          margin= "auto" variant="outlined"/>
          
          <Button 
          sx={{mt:2, borderRadius:4}}
          variant= "contained"
          color= "warning"
          type="submit"> Submit</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;