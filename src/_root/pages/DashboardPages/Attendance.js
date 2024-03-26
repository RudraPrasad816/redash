import { useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../Firebase/firebse";
import { PageLoader } from "../PageLoader";
import { ThemeContext } from "../../../context/ThemeContext";
import { getDocs, collection } from "firebase/firestore";



export const Attendance = () => {

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [attendanceData, setAttendanceData] = useState([]);

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    useEffect(() => {
        if (user) {
            getAttendance();
        }
    }, [user])

    useEffect(() => {
        setIsLoading(false)
    }, [attendanceData])

    async function getAttendance() {
        const querySnapshot = await getDocs(collection(db, "attendance"));
        let att = [];
        querySnapshot.forEach((doc) => {
            if (user.uid === doc.data().uid) {
                let docid = doc.id
                let newAttendanceData = {
                    ...doc.data(),
                    docid,
                }
                att.push(newAttendanceData);
            }
        });
        setAttendanceData(att)
    }

    return (
        <>
            {
                isLoading ?
                    <PageLoader theme={theme} />
                    :
                    <div className="attendance-container">
                        <div className="attendance-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Clockin Time
                                        </th>
                                        <th>
                                            Clockout Time
                                        </th>
                                        <th>
                                            Working Hour
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        attendanceData.map((attendancePerDay) => {
                                            return (
                                                <tr key={attendancePerDay.docid}>
                                                    <td>
                                                        {attendancePerDay.date}
                                                    </td>
                                                    <td>
                                                        {new Date(attendancePerDay.clockinTime).toLocaleTimeString()}
                                                    </td>
                                                    <td>
                                                        {new Date(attendancePerDay.clockoutTime).toLocaleTimeString()}
                                                    </td>
                                                    <td>
                                                        {attendancePerDay.workingHour}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </>
    )
}