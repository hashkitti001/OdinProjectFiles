import React, { Component } from "react";
import MUIThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'

class EducationExp extends Component {
    state = {
        internal: [{
            schoolname: "",
            course: "",
            dateofstudy: "",
        }]
    }
    add = () => {
        this.setState((prevState) => ({
            internal: [...prevState.internal,
            {
                schoolname: "",
                course: "",
                dateofstudy: "",
            }]
        }))
    }
   remove = (id) => {
    if(!this.state.internal.length <= 1){
        let skeleton = [...this.state.internal]
        skeleton.splice(id, 1);
       this.setState({internal:skeleton})
    } 
   }
    handleChange = (e, name, id) => {
        const change = this.state.internal.map((item, index) => {
            if (id === index) {
                return { ...item, [name]: e.target.value }
            }
            return item;
        });

        this.setState({ internal: change })

        this.props.setUniversalState(this.state, "education")
       
    }
    
    render() {
        const {education} = this.state 
        return (
            this.state.internal.map((edInfo, index) => {
                return (
                    <div className="education" key={index}>
                        <MUIThemeProvider>
                            <React.Fragment>
                                <br />
                                <TextField
                                 sx={{width:"300px" }}
                                id="filled-basic" label="School Name" variant="filled" 
                                    onChange={(e) => this.handleChange(e, "schoolname", index)}
                                    defaultValue={edInfo.schoolname}
                                    color="secondary"
                                />
                                <br />
                                <TextField
                                 sx={{ width:"300px"}}
                                id="filled-basic" label="Course" variant="filled" 
                                    onChange={(e) => this.handleChange(e, "course", index)}
                                    defaultValue={edInfo.course}
                                />
                                <br />
                                <TextField
                                 sx={{width:"300px" }}
                                   id="filled-basic" label="Date of Study" variant="filled" 
                                    onChange={(e) => this.handleChange(e, "dateofstudy", index)}
                                    defaultValue={edInfo.dateofstudy}
                                />
                                <br />

                                <br />
                                {/* //All functions with parameters must be callback functions */}
                                <Button
                                    
                                    style={styles.button}
                                    onClick={() => this.remove(index)}
                                    variant="contained"
                                    color="error"
                                >
                                    Remove
                                </Button>
                                <Button
                                    style={styles.button}
                                    onClick={this.add}
                                    variant="contained"
                                    color="success"
                                >
                                    Add
                                    </Button>
                            </React.Fragment>
                        </MUIThemeProvider>
                    </div>
                )
            })
        )
    }
}
const styles = {
    button: {
        margin: 20
    }
}
export default EducationExp;