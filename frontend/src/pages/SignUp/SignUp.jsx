import React, { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import TextField1 from '../../components/TextField1/TextField1'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const styles = {
    container: "bg-bg_home h-[100vh] flex flex-col items-center justify-center bg-no-repeat bg-cover",
    logo: "w-[15rem]",
    forms: "bg-bg_dark flex w-[30%] flex-col items-center justify-center rounded-[30px] h-[75%] py-[2rem]",
    signUp: "flex flex-col h-full items-center justify-start gap-8",
    signUpButton: "bg-bg_medium p-[1rem] px-[1.5rem] rounded-[5px] text-xl text-white font-header_font italic",
    checkbox__label: "text-xl text-white font-header_font italic",
    input: "h-[2rem]"

}
function SignUp() {

    const navigate = useNavigate()
    const [signUpDetails, setSignUpDetails] = useState({
        password: "",
        name: "",
        email: "",
        artist: false
    })

    const changeHandler = (event) => {

        const { name, value, type, checked } = event.target

        setSignUpDetails(prevState => {
            return {
                ...prevState,
                [name]: type ==="checkbox" ? checked : value
            }
        })
    }

    const createAccount = async (event) => {
        event.preventDefault()

        await axios.post("http://localhost:4000/api/v1/register", {
            name : signUpDetails.name,
            email: signUpDetails.email,
            password: signUpDetails.password
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
                <form action="" className={styles.signUp} onSubmit={createAccount}>
                <TextField1
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={signUpDetails.email}
                        classes={styles.input}
                        changeHandler={changeHandler}
                    />
                    <TextField1
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={signUpDetails.password}
                        classes={styles.input}
                        changeHandler={changeHandler}
                    />
                    <TextField1
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={signUpDetails.name}
                        classes={styles.input}
                        changeHandler={changeHandler}
                    />
                    <div className={styles.checkbox__container}>
                        <input type="checkbox"
                            id='isArtist' className={styles.isArtist}
                            name="artist"
                            checked={signUpDetails.artist}
                            onChange = {changeHandler}
                        />
                        <label htmlFor="isArtist" className={styles.checkbox__label}>Are you an Artist?</label>
                    </div>
                    <button className={styles.signUpButton}>SignUp</button>
                </form>
            </div>

        </div>
    )
}

export default SignUp