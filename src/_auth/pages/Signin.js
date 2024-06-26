import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"

import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { ScaleLoader } from "react-spinners"

import '../css/signin.css'

import { auth } from "../../Firebase/firebse"
import { toast } from "react-toastify"

export const Signin = () => {

    const [loginCred, setLoginCred] = useState({
        email: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    //gathering information from the form
    function handleCange(e) {
        setLoginCred({ ...loginCred, [e.target.name]: e.target.value })
    }

    //signing in on click signin button
    async function handleSignin(e) {
        e.preventDefault();

        setIsLoading(true);

        await signInWithEmailAndPassword(auth, loginCred.email, loginCred.password)
            .then((userCredential) => {
                const user = userCredential.user
                setIsLoading(false)
                auth.onAuthStateChanged((user) => {
                    localStorage.setItem("currentUser", JSON.stringify(user))
                })
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            })
            .catch((error) => {
                console.log(error.message)
                const message = error.message.split("(")[1].split(")")[0].split("/")[1];
                toast.error(message)
                setIsLoading(false)
            })
    }

    return (
        <>
            <form onSubmit={handleSignin}>
                <div className="input-wrapper">
                    <div className="icon">
                        <FaUser size={"20px"} />
                    </div>
                    <input
                        type="email"
                        name="email"
                        onChange={handleCange}
                        value={loginCred.email}
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
                        value={loginCred.password}
                        placeholder="Password"
                    />
                </div>

                <span className="error-container">
                    {errorMessage}
                </span>

                <button type="submit">{isLoading ? <ScaleLoader height={16} color={"var(--bg-secondary)"} /> : null}Signin</button>
                {/* 
                <div className="link-to-signup">
                    <span>Don't have an account? </span>
                    <Link to={'/sign-up'}>Signup</Link>
                </div> */}
            </form>
        </>
    )
}