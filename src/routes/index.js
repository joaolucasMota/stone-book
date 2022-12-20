import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Dash from '../pages/Dash';
import Newpost from '../pages/Newpost';
import Private from './Private';

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/register' element= { <Register/> }/>
            <Route path='/dash' element= { <Private> <Dash/> </Private> } />
            <Route path='/newpost' element = { <Private> <Newpost/> </Private> }/>
        </Routes>
    )
}

export default RoutesApp;