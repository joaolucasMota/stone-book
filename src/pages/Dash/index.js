import './dash.css'
import LogoDash from './images/logo-dash.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db , auth} from '../../firebaseConnection'
import { onSnapshot, collection} from 'firebase/firestore'
import { signOut } from 'firebase/auth'

export default function Dash(){

    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        async function loadPosts(){
            const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
                let listaPost = [];

                snapshot.forEach((doc)=>{
                    listaPost.push({
                        id: doc.id,
                        mensagem: doc.data().mensagem,
                    })
                })

                setPosts(listaPost);
            })
        }

        loadPosts();
    },[])


    async function sairConta(){
        await signOut(auth)
    }



    return(
        <div>
            <header>
                <img src={LogoDash} />
                <Link to='/newpost'><button type="button" > Nova mensagem</button></Link>
            </header>
            <br/><br/>

            <main>
            <div>
                    <Link to='/'><button type='button' onClick={sairConta}>Sair</button></Link>
            </div>
                {posts.map((post)=>{
                    return(
                        <div className='div-dash' key={post.id}>
                            <p className='p-dash' >{post.mensagem} </p>
                            <br/><br/>
                        </div>
                        
                    )

                })}


            </main>
        </div>
    )
}