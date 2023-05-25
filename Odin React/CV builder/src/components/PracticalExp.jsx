import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'

class PracticalExp extends Component {
   
   
    state = {
        internal: [{
            companyname: "",
            title: "",
            tasks: "",
            from:"",
            to:""
        }]
    }
    add = () => {
        let uniState = this.props.universalState
        this.setState((prevState) => ({
            internal: [...prevState.internal,
            {
                companyname: "",
                title: "",
                tasks: "",
                from:"",
                to:""
            }]
        }))
        console.log(uniState)
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

     this.props.setUniversalState(this.state, "profession")
       // console.log(this.props.setUniversalState.profession)
       
    }
    
    render() {
        return (
            this.state.internal.map((workInfo, index) => {
                return (
                    <div className="profession" key={index}>
                       
                            <React.Fragment>
                                
                                <br />
                                <TextField
                                 sx={{width:"500px"}}
                                    id="filled-basic" label="Company Name" variant="filled"
                                    onChange={(e) => this.handleChange(e, "companyname", index)}
                                    defaultValue={workInfo.companyname}
                                   
                                />
                                <br />
                                <TextField
                                 sx={{width:"500px"}}
                                  id="filled-basic" label="Position / Title" variant="filled" 
                                    onChange={(e) => this.handleChange(e, "title", index)}
                                    defaultValue={workInfo.title}
                                />
                                <br />
                                <TextField
                                 sx={{width:"500px"}}
                                    id="filled-basic" label="Tasks" variant="filled"
                                    onChange={(e) => this.handleChange(e, "tasks", index)}
                                    defaultValue={workInfo.tasks}
                                    multiline
                                />
                                
                                <br />
                                <TextField
                                  sx={{width:"500px"}}
                                 
                                   id="filled-basic" label="Start Date" variant="filled"
                                    onChange={(e) => this.handleChange(e, "from", index)}
                                    defaultValue={workInfo.from}
                                />
                                <br />
                                <TextField
                                 sx={{width:"500px"}}
                                   id="filled-basic" label="End Date" variant="filled"
                                    onChange={(e) => this.handleChange(e, "to", index)}
                                    defaultValue={workInfo.to}
                                />
                                <br></br>

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
export default PracticalExp;