import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import SignInn from './Components/SignInn';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/SignIn' element={<SignInn/>}/>
  <Route path='/Signup' element={<Signup/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
