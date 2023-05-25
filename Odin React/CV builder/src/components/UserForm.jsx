import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails.jsx"
import EducationExp from "./EducationExp.jsx";
import PracticalExp from "./PracticalExp.jsx";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
class UserForm extends Component {
         
    state = this.props.universalState

    //Handle fields change
    handleChange = input => e => {

        this.setState((prevState) => ({
            ...prevState, [input]: e.target.value
        })
        )
        this.props.updateUniversalState(this.state);

    }
    updateState = (item, name) => {
        this.setState((prevState) => ({
            ...prevState, [name]: item
        }
        ))
        this.props.updateUniversalState(this.state);
    }
    render() {

        const { firstname, lastname, email, occupation, city} = this.state;
        const values = { firstname, lastname, email, occupation, city }

        return (
            <div>
                <Box sx={{ display: 'flex',  flexDirection: 'column', justifyContent:'space-between', width:"50vw"}}>
                <Box sx={{ display: 'flex',  flexDirection: 'column' }}>
                <Typography variant="h4">Personal Details</Typography>
                <FormUserDetails
                    handleChange={this.handleChange}
                    setUniversalState={this.updateState}
                    values={values}
                />
                </Box>
                <Box sx={{ display: 'flex',  flexDirection: 'column' }}>
                <Typography variant="h4">Educational Details</Typography>
                <EducationExp
                    setUniversalState={this.updateState}
                    values={values}
                />
                </Box>
                <Box sx={{ display: 'flex',  flexDirection: 'column' }}>
                <Typography variant="h4">Professional Experience</Typography>
                <PracticalExp
                    setUniversalState={this.updateState}
                    values={values}
                />
                </Box>
                </Box>
            </div>
        )


    }
}
export default UserForm