import React from "react";
import {Avatar, Box, Card, CardContent, CardHeader, Typography, IconButton,} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";

const Blog = ({title, description, userName, isUser, id, date}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };

  //const formatDate = date.getFullYear();
  //console.log(formatDate);
 

  return (
    <div> {""}
        <Card sx={{ width: "60%", margin: "auto", mt:2, padding: 4, 
        boxShadow: "5px 5px 10px #ccc", 
        ":hover":{ 
            boxShadow: "10px 10px 20px #ccc", 
        },
        }}>

    {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}> 
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        ) }
    <CardHeader
      avatar={
        <Avatar className={classes.font}
        sx={{ bgcolor: "red"}} aria-label="recipe">
          
         {userName ? userName.charAt(0) : ""} 
        
        </Avatar>
      }
      
      title={title}
      subheader= {date}
    />
    
    <CardContent>
    <hr />
    <br />
      <Typography className={classes.font}
      variant="body2" color="warning" >
        <b> {userName}</b> {":"} 
      </Typography>

      <Typography className={classes.font}
      variant="body2" color="text.secondary">
        {description}
      </Typography>

    </CardContent> 
   </Card>
  </div>
  );
};

export default Blog;