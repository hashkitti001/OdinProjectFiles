import React,  { Component} from "react";
class MyComponent extends Component {
    constructor(props){
        super(props);
    }
    
    list = ["Jelly", "Fish", "Choclolate"]
    render() {
        return (
            <div> 
            <h1>{this.props.title}</h1>
          
              <ul><li>{this.list.map(elem => elem + "\n")}</li></ul>
          
          </div>

        );
        }
}
class ButtonDemo extends Component {
    constructor(props) {
      super(props);
    
     
    }

    render() {
      return (
        <div>
          <button onClick={this.props.onButtonClicked}>Click Me!</button>
        </div>
      );
    }
  }

  export {ButtonDemo};
export default MyComponent;

