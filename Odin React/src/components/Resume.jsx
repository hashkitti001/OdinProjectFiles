import React, { Component } from "react";
import Avatar from "@mui/material/Avatar"
import {Paper} from '@mui/material';
class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <Paper elevation={16} sx={{margin:"20px", width:"50%"}}>
              <div className="container">
                
            <h1 className="text-3xl text-center font-bold"> Your CV</h1>
              <div className="container flex flex-row">
                    <Avatar className="m-3" sx={{width:"150px", height:"150px", fontWeight:"bold", textAlign:"center"}} src={this.props.universalState.files}  alt="Profile picture" />
                   <div className="container flex flex-col m-5">
                    <h3 className="text-2xl">{this.props.universalState.firstname} {this.props.universalState.lastname}</h3>
                   <h3 className="text-2xl">{this.props.universalState.email}</h3>
                   <h3 className="text-2xl">{this.props.universalState.Occupation}</h3>
                   <h3 className="text-2xl">{this.props.universalState.city}</h3>
                   </div>
            </div>
                   <div className="container flex flex-row space-x-12 mx-5 my-6">
                    <div className="edinfo flex flex-col">
                        <h1 className="text-xl">Educational Background</h1>
                       <h3 className="text-2md">{this.props.universalState.length}</h3>
                        <h3 className="text-2md">{this.props.universalState.education}</h3>
                        <h3 className="text-2md">{this.props.universalState.education}</h3>
                       
                        
                    </div>
                    <div className="profinfo flex flex-col mx-5">
                    <h1 className="text-xl">Professional Experience</h1>
                    </div>
                   </div>
                  
                </div>
               
               
               
                </Paper>
            </React.Fragment>
        )
    }
}
export default Resume;