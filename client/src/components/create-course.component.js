import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCourse extends Component {

    constructor(props) {
        super(props);

        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            courseName: '',
            description: ''
        }
    }

    onChangeCourseName(e) {
        this.setState({
            courseName: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const course = {
            courseName: this.state.courseName,
            description: this.state.description
        }

        console.log(course);

        axios.post('http://localhost:3001/courses/add', course)
        .then(res => console.log(res.data));

        window.location = '/courses';
    }

    render() {
        return (
            <div>
                <h3>Register New Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course Name: 
                            <span className="required">*</span>
                        </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.courseName}
                        onChange={this.onChangeCourseName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:  </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className = "form-group">
                      <input type = "submit" value = "Create Course Log" className = "btn btn-primary" />
                    </div>
                    <p aria-hidden="true" id="required-description">
                        <span className="required">[*]</span>Required field
                    </p>
                </form>
            </div>
        )
    }
}