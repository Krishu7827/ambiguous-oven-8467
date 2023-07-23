import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import SignInn from './Components/SignInn';
import Signup from './Components/Signup';
import Verification from './Components/Verification';



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/SignIn' element={<SignInn/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/verification' element={<Verification/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
