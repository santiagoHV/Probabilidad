import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import NavbarComponent from './Components/Navbar/NavbarComponent';
import HomeComponent from './Components/Home/HomeComponent';
import Probabilidad_binomial from './Components/Probabilidad/Probabilidad_binomial';
import DiscretasComponent from './Components/Probabilidad/DiscretasComponent';

function App() {
  
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="container container-basic">
        <Switch>
          <Route path="/home" component={() => <HomeComponent/>} />
          <Route path="/Distribucion binomial" component={() => <Probabilidad_binomial/>} />
          <Route path="/Distribucion discreta" component={() => <DiscretasComponent/>} />
          <Redirect to="/home" />
        </Switch>
      </div>  
    </BrowserRouter>
  );
}

export default App;
