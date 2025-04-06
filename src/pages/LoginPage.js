import React, {useContext, useState} from 'react';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {NavLink, useNavigate} from "react-router-dom";

function LoginPage(props) {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [errorMsg, setErrorMsg] = useState('');
        const {login} = useContext(AuthContext) // function login venant du contexte
        const navigate = useNavigate()

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (email === '' || password === '') {
                setErrorMsg('Email and password is required');
                return;
            }
            try {
                const response = await axios.post('https://api-cafthe.leo.robert.dev-campus.fr/api/login/', {email, password})
                console.log(response.data);
                const { token, client } = response.data

                //     on met a jour le contexte d'authendification
                login(token, client)
                console.log(token)
                localStorage.setItem("tokeng", 'he')

            } catch (error) {
                console.error('Erreur lors de la connexion : ', error);
                if (error.response.data.message){
                    setErrorMsg(error.response.data.message)
                } else {
                    setErrorMsg('Erreur')
                }
            }
        }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'email'}>Email</label>
                <input id='email' name={'email'} onChange={(e) => {setEmail(e.target.value)}} />
                <label htmlFor={'password'}>Password</label>
                <input id='password' name={'password'} onChange={(e) => {setPassword(e.target.value)}} />

                <button type='submit'>Login</button>
            </form>
            {errorMsg && (
                <p>{errorMsg}</p>
            )}
        </section>
    );
}

export default LoginPage;