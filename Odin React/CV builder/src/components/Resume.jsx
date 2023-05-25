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
                        
                        {this.props.universalState.education.internal.map((item, id) => (
                            <React.Fragment key={id}>
                           <h3 className="text-2md">{item.schoolname}</h3>
                           <h3 className="text-2md">{item.course}</h3>
                           <h3 className="text-2md">{item.dateofstudy}</h3>
                          </React.Fragment>
                           
                        ))}
                
                    </div>
                    <div className="profinfo flex flex-col mx-5">
                    <h1 className="text-xl">Professional Experience</h1>
                  {this.props.universalState.profession.internal.map((item, id) => (
                            <React.Fragment>
                           <h3 className="text-2md">{item.companyname}</h3>
                           <h3 className="text-2md">{item.title}</h3>
                           <h3 className="text-2md">{item.tasks}</h3>
                           <h3 className="text-2md">{item.from}</h3>
                           <h3 className="text-2md">{item.to}</h3>
                          </React.Fragment>
                           
                        ))}
                        
                    </div>
                   </div>
                  
                </div>
               
               
               
                </Paper>
            </React.Fragment>
        )
    }
}
export default Resume;