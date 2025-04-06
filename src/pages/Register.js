import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";


function Register(props) {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const  [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adress, setadress] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        if (name === '' || phone === '' || email === '' || password === '' || adress === '') {
            setErrorMsg('Tous les champs obligatoires ne sont pas remplis ! ');
            return;
        }
        try {
            const response = await axios.post('https://api-cafthe.leo.robert.dev-campus.fr/api/register/', {
                name, birthday, phone, email, password, adress
            })
            const {token, client} = response.data;
            login(token, client);

            navigate('/login');
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
        // name, birthday, phone, email, password, adress
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Se creer un compte</h1>
                <div className={'form--container'}>
                    <label htmlFor={'client_firstName'}>Votre nom et prenom</label>
                    <input
                        type={'text'}
                        id={'client_firstName'}
                        required
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}/>


                    <label htmlFor={'email'}>Votre email</label>
                    <input
                        type={'email'}
                        id={'email'}
                        value={email}
                        required
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    <label htmlFor={'phone'}>Votre num</label>
                    <input
                        type={'tel'}
                        id={'phone'}
                        value={phone}
                        required
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}/>

                    <label htmlFor={'born_date'}>Votre date de naissance</label>
                    <input
                        type={'date'}
                        id={'born_date'}
                        value={birthday}
                        onChange={(e) => {
                            setBirthday(e.target.value)
                        }}/>
                    <label htmlFor={'adress'}>Votre adresse</label>
                    <input
                        type={'text'}
                        id={'adress'}
                        value={adress}
                        onChange={(e) => {
                            setadress(e.target.value)
                        }}/>

                    <label htmlFor={'password'}>Mot de passe</label>

                    <input type={'password'} id={'password'} value={password}
                           required
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}
                    />

                    {errorMsg && (
                        <p>{errorMsg}</p>
                    )}

                    <button type={'submit'} className={'link--primary log--btn'}>
                        Inscription
                    </button>
                </div>


            </form>

        </section>
    );
}

export default Register;