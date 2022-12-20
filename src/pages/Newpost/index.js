import './newpost.css'
import { db } from '../../firebaseConnection'
import { useState } from 'react'
import{ collection, addDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Newpost(){

    const [msg, setMsg] = useState();


    async function handleAdd(){
        await addDoc(collection(db,"posts"), {
            mensagem: msg,
        })
        .then(()=>{
            toast.success('Mensagem postada')
        })
        .catch(()=>{
            console.log('erro no envio')
        })
    }   


    return(
        <div className='newpost-container'>
            <label>Digite sua mensagem</label>

            <textarea 
                type="text"
                value={msg} 
                onChange={(e)=> setMsg(e.target.value)}
            />

            <Link to='/dash'><button onClick={handleAdd}>Enviar</button></Link>
        </div>
    )
}