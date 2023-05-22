import React, {Component} from "react";
import MUIThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "@mui/material/TextField";


class FormUserDetails extends Component{ 
   handleImage = (e) => {
    this.props.setUniversalState(URL.createObjectURL(e.target.files[0]), "files")
   }
render(){
    const {values, handleChange} = this.props;
    return(
        <MUIThemeProvider>
            <React.Fragment>
            <label htmlFor="Photo">Picture</label>
            <br/>
            <input type="file" name="" id="" onChange={this.handleImage} />
            <br/>
                <TextField 
                 sx={{ input: {opacity:"70%"} , color:"white", width:"500px"}}
                id="filled-basic" label="First Name" variant="filled"
                onChange={handleChange("firstname")}
                defaultValue={values.firstName}
                />
                <br/>
                <TextField
                 sx={{width:"500px"}}
               id="filled-basic" label="Last Name" variant="filled"
                onChange={handleChange("lastname")}
                defaultValue={values.lastName}
                />
                <br/>
                 <TextField 
                  sx={{width:"500px"}}
               id="filled-basic" label="Email" variant="filled"
                onChange={handleChange("email")}
                defaultValue={values.email}
                />
                <br/>
                <TextField 
                 sx={{width:"500px"}}
              id="filled-basic" label="Occupation" variant="filled"
                onChange={handleChange("Occupation")}
                defaultValue={values.occupation}
                />
                <br/>
                <TextField 
                 sx={{width:"500px"}}
                id="filled-basic" label="City" variant="filled"
                onChange={handleChange("city")}
                defaultValue={values.city}
                />
                <br/>
             
                </React.Fragment>
        </MUIThemeProvider>
    )
}
}

export default FormUserDetails