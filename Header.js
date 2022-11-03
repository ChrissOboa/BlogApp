import React, { useState } from "react";
import {AppBar, IconButton, Typography, Toolbar, Box, Button, Tabs, Tab} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar position= "sticky"> 
     
      <Toolbar>
        <Typography className={classes.font} variant="h4">HOOD Gossip</Typography>
        { isLoggedIn && (<Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
          <Tabs 
          textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
           
           <Tab className={classes.font} 
           LinkComponent={Link} to ="/blogs" label="Feeds"/>
           
           <Tab className={classes.font} 
           LinkComponent={Link} to ="/myBlogs" label="My Blog"/>
           
           <Tab className={classes.font} 
           LinkComponent={Link} to ="/blogs/add" label="Create Post"/>

          <Tab className={classes.font} 
           LinkComponent={Link} to ="/news" label="News"/>
          </Tabs>
          
        </Box> )}
        <Box display="flex" marginLeft='auto'>

        { !isLoggedIn && (<> 
        
          <IconButton LinkComponent={Link} to ="/auth" sx={{ marginLeft: "auto" }}> 
              <HomeIcon LinkComponent={Link} to ="/auth" 
              color="warning" />
            </IconButton>
        <Box className={classes.font} variant= 'contained' 
          sx= {{margin: 1, borderRadius: 10}} color="warning">
            Welcome Blazers!
          </Box>
         </>)}

          { isLoggedIn && (<Button onClick={() => dispatch(authActions.logout())}
          LinkComponent={Link} to="/auth"
          variant= 'contained' 
          sx= {{margin: 1, borderRadius: 10}} color="warning">
            Logout
          </Button>)}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;