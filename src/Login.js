import React, {useState} from 'react'
import './Login.css'

export default function Login() {

    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const usernameInput = (e) => {
        setUsername(e.target.value);
    }

    const checkUsernameValid = () => {
        // if the 'username' is valid set isUsernameValid to true
        // if the 'username' is not valid set isUsernameValid to false
        if(username.length > 6) {
            setIsUsernameValid(true)
        }
        else {
            setIsUsernameValid(false)
        }
    }

    const checkPasswordValid = () => {
        // if the 'username' is valid set isUsernameValid to true
        // if the 'username' is not valid set isUsernameValid to false
        if(password.length > 6) {
            setIsPasswordValid(true)
        }
        else {
            setIsPasswordValid(false)
        }
    }

    const passwordInput = (e) => {
        setPassword(e.target.value);
    }

    const checkFormValid = () => {
        (isUsernameValid && isPasswordValid ? setIsFormValid(true) : setIsFormValid(false))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        checkFormValid()

        //if the two valid states are not true display error message
        

        console.log(isFormValid);

    }

    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <h3>Login below</h3>
            <label>Username</label>
            <input style={isUsernameValid === false ? {border: "1px solid red"} : {border: "1px solid grey"}} onChange={usernameInput} onBlur={checkUsernameValid} value={username}></input>
            <label>Password</label>
            <input style={isPasswordValid === false ? {border: "1px solid red"} : {border: "1px solid grey"}} type="password" onChange={passwordInput} onBlur={checkPasswordValid} value={password}></input>
            <button>Login</button>
        </form>
    )
}
