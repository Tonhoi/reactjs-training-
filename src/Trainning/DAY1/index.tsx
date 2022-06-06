import React,{ Component } from "react"

class Log extends Component {
    state = {
      name: "Hội",
      age: 20
    }
    handleChangeName = (e:any) => {
      this.setState({
        name: e.target.value
      })
    }
    render() {
      return (
        <div>
          <input type="text" value={this.state.name} onChange={(e) => this.handleChangeName(e)} />
  
          My name is {this.state.name}
        </div>
      );
    }
} 

export default Log;