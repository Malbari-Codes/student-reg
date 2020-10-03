import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
    <tr>
        <td>{props.student.firstName}</td>
        <td>{props.student.lastName}</td>
        <td>{props.student.email}</td>
        <td>{props.student.contact}</td>
        <td>{props.student.address}</td>
        <td>{props.student.courseName}</td>
        <td>
        <Link to = {"/edit/" + props.student._id}>edit</Link> | <a href = "#" onClick = {() => {props.deleteStudent(props.student._id)}}>delete</a>
        </td>
    </tr>
)

export default class StudentList extends Component {

    constructor(props) {
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);
        this.state = {students: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3001/students/')
        .then(response => {
            this.setState({ students: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteStudent(id) {
        axios.delete('http://localhost:3001/students' + id)
        .then(res => console.log(res.data));

        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        })
    }

    studentList() {
        return this.state.students.map(currentstudent => {
            return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Registered Students</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Courses</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.studentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}