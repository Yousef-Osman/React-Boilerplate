import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid col-md-10 col-sm-11">
        <Outlet />
      </div>
    </>
  );
};

export default App;
