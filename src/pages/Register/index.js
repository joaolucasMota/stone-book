import { useState } from "react";
import './register.css';
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export default function Register(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    const navigate = useNavigate();


    async function handleRegister(e){
        e.preventDefault();

        if(email !== '' && senha !== '' && nome !== ''){
            await createUserWithEmailAndPassword( auth, email, senha)
            .then(()=>{
                navigate('/dash', {replace:true})
                toast.success('Conta criada com sucesso')
            })
            .catch((erro)=>{
                if(erro.code === 'auth/weak-password'){
                    toast.warn('Senha muito fraca.')
                }else if(erro.code ==='auth/email-already-in-use'){
                    toast.warn('Email já cadastrado')
                }
            })
        }else{
            toast.warn('Algum campo esta em branco!')
        }
    }

    return(
        <div className="container-register">
            <h1>Cadastre-se</h1>

    
            <form onSubmit={handleRegister}>

                <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                />

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

                <button type="submit">Cadastrar</button>

                <Link className="cadastro" to='/'>Já possui cadastro? clique aqui</Link>
            </form>
        </div>
    )
}
