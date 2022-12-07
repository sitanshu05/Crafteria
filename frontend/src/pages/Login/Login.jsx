import React, { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import TextField1 from '../../components/TextField1/TextField1'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const styles = {
    container: "bg-bg_home h-[100vh] flex flex-col items-center justify-center bg-no-repeat bg-cover",
    logo: "w-[15rem]",
    forms: "bg-bg_dark flex w-[30%] flex-col items-center justify-center rounded-[30px] h-[75%] pt-[2rem]",
    login: "flex flex-col h-full items-center justify-start gap-10 mt-[3rem]",
    loginButton: "bg-bg_medium p-[1rem] px-[1.5rem] rounded-[5px] text-xl text-white font-header_font italic",
    signUp: "text-white font-header_font ",
    signUpButton: "bg-bg_medium p-[1rem] px-[1.5rem] rounded-[5px]",
    input: "h-[2rem]"

}
function Login() {

    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (event) => {

        const { name, value } = event.target

        setLoginDetails(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    const checkCredentials = async (event) => {
        event.preventDefault()

        await axios.post("http://localhost:4000/api/v1/login", {
            email: loginDetails.email,
            password: loginDetails.password
        }).then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        }).catch(err => {
            alert(err);
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.forms}>
                <Logo classes={styles.logo} />
                <form action="" className={styles.login} onSubmit={checkCredentials}>
                    <TextField1
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginDetails.email}
                        classes={styles.input}
                        changeHandler={changeHandler}
                    />
                    <TextField1
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginDetails.password}
                        classes={styles.input}
                        changeHandler={changeHandler}
                    />
                    <button className={styles.loginButton}>Login</button>
                    <a href="/signup" className={styles.signUp}>Need an Account?</a>
                </form>
            </div>

        </div>
    )
}

export default Login