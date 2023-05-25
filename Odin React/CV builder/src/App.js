import './App.css';
import UserForm from './components/UserForm';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import React, { Component } from "react";
import Resume from "./components/Resume"
class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    city: "",
    education:{
      internal: [{
        schoolname: "",
        course: "",
        dateofstudy: "",
    }]}, 
    profession: {
      internal: [{
        companyname: "",
        title: "",
        tasks: "",
        from:"",
        to:""
    }]}
  
  }
  updateState = (item) => {
    this.setState(item)
    console.log(item)
  }
  render() {
    return (
      <div className="App">
       
        <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            CV Builder
          </Typography>
      
        </Toolbar>
      </AppBar>
      <Box sx={{display:"flex", flexDirection:"row"}}>
          <UserForm
            updateUniversalState={this.updateState}
            universalState={this.state}
          />
          <Resume universalState={this.state} />
        </Box>
      </div>
    )
  }
}
export default App;