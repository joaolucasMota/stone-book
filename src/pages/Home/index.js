import { useState } from "react";
import Logocortado from './images/logo-cortado.jpg';
import './home.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import {toast} from 'react-toastify'


export default function Home(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();


    async function handleLogin(e){
        e.preventDefault();

        if(email !== '' && senha !== ''){

            await signInWithEmailAndPassword( auth, email, senha)
            .then(()=>{
                navigate('/dash', {replace: true})
            })
            .catch(()=>{
                toast.warn('Erro ao efetuar login')
            })
        }else{
            toast.warn('Algum campo esta em branco!')
        }
    }

    return(
        <div className="home-container">
            <img className="img" src={Logocortado} alt="stone book home"/>

    
            <form onSubmit={handleLogin}>
                <input
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <input
                type="password"
                placeholder="*******"
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}
                />

                <button type="submit">Entrar</button>

                <Link className="cadastro" to='/register'>Clique aqui para cadastar-se</Link>
            </form>
        </div>
    )
}
