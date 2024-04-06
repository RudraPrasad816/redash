import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";

import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoMdMail } from "react-icons/io"
import { ScaleLoader } from "react-spinners"

import { auth, database } from "../../Firebase/firebse"
import { ref, set } from "firebase/database";

export const Signup = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState("")
    const [isProcessing, setIsProcessing] = useState(false);
    const [sucess, setSucess] = useState("");

    const navigate = useNavigate();

    function handleCange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    async function handleSignup(e) {
        e.preventDefault();
        setIsProcessing(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password,
                userData.firstName,
                userData.lastName,
            );
            const user = userCredential.user;
            if (user) {
                updateProfile(user, { displayName: userData.firstName+" "+userData.lastName })
                storeUser(user);
                auth.signOut();
                setIsProcessing(false);
                setSucess("Account created Sucessfully");
            }
        } catch (error) {
            setIsProcessing(false)
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
        }
        if(sucess !== ""){
            setTimeout(() => {
                navigate('/'); // This should be navigate, not Navigate
            }, 2000)
        }
    }

    async function storeUser(user){
        try{
            set(ref(database, 'users/' + user.uid), {
                firstName : userData.firstName,
                lastName : userData.lastName,
                email : userData.email,
                role : "admin"
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSignup}>
                <div className="name-fields-group">
                    <div className="input-wrapper">
                        <div className="icon">
                            <FaUser size={"20px"} />
                        </div>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleCange}
                            value={userData.firstName}
                            placeholder="First name"
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="icon">
                            <FaUser size={"20px"} />
                        </div>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleCange}
                            value={userData.lastName}
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="icon">
                        <IoMdMail size={"20px"} />
                    </div>
                    <input
                        type="email"
                        name="email"
                        onChange={handleCange}
                        value={userData.email}
                        placeholder="Email"
                    />
                </div>
                <div className="input-wrapper">
                    <div className="icon">
                        <RiLockPasswordFill size={"20px"} />
                    </div>
                    <input
                        type="password"
                        name="password"
                        onChange={handleCange}
                        value={userData.password}
                        placeholder="Password"
                    />
                </div>

                <span className="error-container">
                    {errorMessage}
                </span>
                <span className="success-container">{sucess}</span>

                <button type="submit">{isProcessing ? <ScaleLoader height={16} color={"var(--bg-secondary)"} /> : null} Create Account</button>

                <div className="link-to-signup">
                    <span>Already have an account? </span>
                    <Link to={'/'}>Signin</Link>
                </div>
            </form>
        </>
    )
}