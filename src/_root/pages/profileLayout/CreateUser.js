import { Bounce, ToastContainer, toast } from "react-toastify";

import "./css/createUser.css";
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'

export const CreateUser = () => {

    const [emp, setEmp] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        maritalStatus: "Un Maried",
        email: "",
        phone: "",
        address: "",
        nationality: "",
        employeeNumber: "",
        joinDate: "",
        jobTitle: "",
        department: "",
        jobType: "",
        reportingManager: "",
        role: "user",
    })

    function handleInputChange(e) {
        setEmp({ ...emp, [e.target.name]: e.target.value })
    }

    function handleCreateUser(e) {
        e.preventDefault()
        console.log(emp);
        toast.success("submitted")
    }

    return (
        <div className="create-user-wrapper">
            <h3>Register a new employee</h3>

            <form onSubmit={handleCreateUser}>
                <div className="personal-details">
                    <h4>Personal Details</h4>
                    <div className="inputs">
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={emp.firstName}
                                id="firstName"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={emp.lastName}
                                id="lastName"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="dob">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={emp.dateOfBirth}
                                id="dateOfBirth"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="gender-box">
                            <h4>Gender</h4>
                            <div>
                                <div>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        id="male"
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        id="female"
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="marrital-box">
                            <h4>Marital Status</h4>
                            <div>
                                <div>
                                    <input
                                        type="radio"
                                        name="maritalStatus"
                                        value="married"
                                        id="married"
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="married">Married</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="marital-status"
                                        value="unmarried"
                                        id="unmarried"
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="unmarried">Un Married</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-details">
                    <h4>Contact Details</h4>
                    <div className="inputs">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your mail"
                                value={emp.email}
                                id="email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={emp.phone}
                                id="phone"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="address">
                            <label htmlFor="address">Address</label>
                            <textarea name="address" id="address" rows="4"></textarea>
                        </div>
                        <div className="nationality">
                            <label htmlFor="nationality">Nationality</label>
                            <input
                                type="text"
                                name="nationality"
                                placeholder="Enter your Nationality"
                                value={emp.nationality}
                                id="nationality"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="profesional-details">
                    <h4>Organization Details</h4>
                    <div className="inputs">
                        <div className="empnumber">
                            <label htmlFor="empnumber">Employee Number</label>
                            <input
                                type="text"
                                name="employeeNumber"
                                id="empnumber"
                                placeholder="Employee Number"
                                value={emp.employeeNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="jobtitle">
                            <label htmlFor="jobtitle">Title</label>
                            <input
                                type="text"
                                name="jobTitle"
                                id="jobtitle"
                                placeholder="e.g - frontend"
                                value={emp.jobTitle}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="joindate">
                            <label htmlFor="joindate">Join Date</label>
                            <input
                                type="date"
                                name="joinDate"
                                id="joindate"
                                value={emp.joinDate}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="department">
                            <label htmlFor="department">Department</label>
                            <select name="department" id="department" onChange={handleInputChange}>
                                <option value="development">Development</option>
                                <option value="testing">Testing</option>
                            </select>
                        </div>
                        <div className="jobtype">
                            <label htmlFor="jobtype">Type</label>
                            <select name="jobType" id="jobtype" onChange={handleInputChange}>
                                <option value="intern">Internship</option>
                                <option value="permanent">Permanent</option>
                            </select>
                        </div>
                        <div className="manager">
                            <label htmlFor="reportingmanager">Reporting Manager</label>
                            <input
                                type="text"
                                name="reportingManger"
                                id="reportingmanager"
                                placeholder="Enter Manager Name"
                                value={emp.reportingManager}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="role">
                            <label htmlFor="role">User Role</label>
                            <select name="role" id="role">
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}