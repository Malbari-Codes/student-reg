import React, { Component } from 'react';
import axios from 'axios';

export default class CreateStudent extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            address: '',
            courses: []
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCourseName(e) {
        this.setState({
            courseName: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contact: this.state.contact,
            address: this.state.address,
            courseName: this.state.courseName
        }

        axios.post('http://localhost:3001/students/add', student)
        .then(res => console.log(res.data));

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Register New Student</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: 
                            <span className="required">*</span>
                        </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: 
                            <span className="required">*</span>
                        </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.lastName}
                        onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: 
                            <span className="required">*</span>
                        </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact: </label>
                        <input type="text" 
                        pattern="[0-9]*"
                        className="form-control"
                        value={this.state.contact}
                        onChange={this.onChangeContact}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.adress}
                        onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>Courses: </label>
                        <select ref="userInput"
                        className="form-control"
                        value={this.state.courseName}
                        onChange={this.onChangeCourseName}>
                            {
                                this.state.courses.map(function(course){
                                    return <option
                                    key={course}
                                value={course}>{course}
                                </option>
                                })
                            }
                        </select>
                    </div>
                    <div className = "form-group">
                      <input type = "submit" value = "Create Exercise Log" className = "btn btn-primary" />
                    </div>
                    <p aria-hidden="true" id="required-description">
                        <span class="required">[*]</span>Required field
                    </p>
                </form>
            </div>
        )
    }
}