import { Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/userlist" element={<UserList/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
