import React from 'react';


class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    }

    handleChange = (e) =>{
        let name = e.target.name; 
        let value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
        alert("all the fields are mandatory!");
        return ;
        }
        this.props.addContactHandler(this.state);
        //console.log(this.state);
        this.setState({ name:"" , email:""});
        this.props.history.push("/");
    }
    render() {
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" onChange ={this.handleChange} ></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Name" onChange = {this.handleChange}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;