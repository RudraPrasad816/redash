import "./css/createUser.css";

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
        address: { street: "", city: "", state: "", pin: '' },
        Nationality: "",
        employeeNumber: "",
        joinDate: "",
        jobTitle: "",
        department: "",
        jobType: "",
        reportingManager: "",
        role: "user",
    })

    function handleInputChange(e){
        setEmp({...emp , [e.target.name]: e.target.value})
    }

    return (
        <div className="create-user-wrapper">
            <h3>Register a new employee</h3>

            <form>
                <div className="personal-details">
                    <h4>Personal Details</h4>
                    <div className="inputs">
                        <div>
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
                        <div>
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
                    </div>  
                </div>
                <div className="professional-details">

                </div>
            </form>
        </div>
    )
}