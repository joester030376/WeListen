import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import New from './pages/new/New';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import List from './pages/list/List';
import {userInputs, productInputs} from '../src/formSource';
import {DarkModeContext} from './context/darkModeContext';
import "./style/darkmode.scss";
import { useContext } from 'react';

function App() {

 const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route index element={ <Home />} />
        <Route path="/" element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="users">
            <Route index element={ <List /> } />
            <Route path=":userId" element={<Single /> } />
            <Route path="new" element={ <New inputs={userInputs} title="Add New User" /> } />
        </Route>
        <Route path="products">
            <Route index element={ <List /> } />
            <Route path=":productId" element={<Single /> } />
            <Route path="new" element={ <New inputs={productInputs}  title="Add New Product" /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
