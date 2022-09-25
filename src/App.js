
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './comoponent/Home/Home';
import LogIn from './comoponent/LogIn/LogIn';
import RegistrationPage from './comoponent/RegistrationPage/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <>
        {/* <Navigation /> */}
        <Routes>
          {/* <Switch> */}
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/login'} component={LogIn} />
            <Route exact path={'/registration'} component={RegistrationPage} />
          {/* </Switch> */}
        </Routes>
        {/* <Footer /> */}
      </>
    </BrowserRouter>
  );
}

export default App;
