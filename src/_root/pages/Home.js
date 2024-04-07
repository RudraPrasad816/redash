import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { addDoc, collection } from 'firebase/firestore'

import './css/home.css'

import task from '../../assets/images/task.png'
import { db } from '../../Firebase/firebse'
import { Organization } from '../components'
import { toast } from 'react-toastify'

export const Home = () => {

    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [isClockin, setIsClockin] = useState(false);
    const [clockinTime, setClockInTime] = useState("");
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const uid = user ? user.uid : "";
    let date = new Date();

    useEffect(() => {
        //check if user has already clocked in or not
        if (JSON.parse(localStorage.getItem('clockinDateTime'))) {
            setClockInTime(new Date(JSON.parse(localStorage.getItem("clockinDateTime"))).toLocaleTimeString())
            setIsClockin(true);
        }

        setCurrentDate(date.toDateString());
        setCurrentTime(date.toLocaleTimeString());
        setInterval(() => {
            let date = new Date()
            setCurrentTime(date.toLocaleTimeString())
        }, 1000)
    }, [])

    function handleClockInOut() {
        if (!isClockin) {
            let dateTime = new Date();
            setClockInTime(dateTime.toLocaleTimeString());
            localStorage.setItem("clockinDateTime", JSON.stringify(dateTime))
            if(!isClockin){
                toast.success("clock in successfully")
            }
            setIsClockin(!isClockin)
        }
        else {
            let dateTime = new Date();
            let clockinDateTime = new Date(JSON.parse(localStorage.getItem("clockinDateTime")))
            let workingHour = (((dateTime.getTime() - clockinDateTime.getTime()) / 1000) / 3600).toFixed(2);
            toast.success(`clock out at ${dateTime.toLocaleTimeString()}`)
            setIsClockin(false);
            localStorage.setItem("clockinDateTime", null)
            storeAttendance(uid, currentDate, clockinDateTime, dateTime, workingHour);
        }
    }

    async function storeAttendance(uid, date, clockinTime, clockoutTime, workingHour) {
        //storing the clockin clockout time with date and working hour
        try {
            const docRef = await addDoc(collection(db, 'attendance'), {
                "uid": uid,
                "date": date,
                "clockinTime": clockinTime.toString(),
                "clockoutTime": clockoutTime.toString(),
                "workingHour": workingHour,
            })
            console.log("Document written with Id: ", docRef.id);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="home">
            <h3>Quick Access</h3>
            <div className="quick-access">
                <div className="card">
                    <div className="card-header">
                        <h3>Time Today - {currentDate}</h3>
                        <span className='viewall-link'><Link to={`/${uid}/dashboard/attendance`}>view all</Link></span>
                    </div>
                    <div className="card-body">
                        <div className="time-section">
                            <p>currentTime</p>
                            <p className='current-time'>{currentTime}</p>
                        </div>
                        <div className='card-body-right'>
                            <button style={{
                                backgroundColor: isClockin ? "var(--danger)" : "",
                                color: isClockin ? "#fff" : ""
                            }}
                                onClick={handleClockInOut} >
                                {
                                    isClockin ?
                                        "web Clock-Out"
                                        :
                                        "Web Clock-In"
                                }
                            </button>
                            <p>
                                {
                                    isClockin ?
                                        `Clock in at - ${clockinTime}` :
                                        null
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3>Tasks</h3>
                    </div>
                    <div className="card-body">
                        <div className="image">
                            <img src={task} alt="tasks" />
                        </div>
                        <div className="task-container">
                            <h3>Good Job!</h3>
                            <p>You Have No Pending Actions</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3>Holidays</h3>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <h2>Holi</h2>
                            <p>25 march 2024</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        On Leave Today
                    </div>
                    <div className="card-body">
                        <div className="container">
                            {
                                // onLeave ?
                                // <div className="avatar-group">
                                //     <p>names</p>
                                // </div>:
                                <>
                                    <h4>Everyone is working today</h4>
                                    <p>No one is on leave</p>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3>Leave Balance</h3>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                        </div>
                        <div className="links">
                        </div>
                    </div>
                </div>
            </div>

            <div className="post-section">
                <h3>Organization</h3>

                <section className="panel">
                    <Organization />
                </section>

                <section className="notification-panel">
                    {/* <OrganizationNotification /> */}
                </section>
            </div>
        </div>
    )
}