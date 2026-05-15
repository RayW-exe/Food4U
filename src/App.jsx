import { useState } from 'react'
import { Route,Routes,Link, useNavigate } from 'react-router'
import Shop from './Pages/Shop'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'



function App() {
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("")
    .then(response => response.json())
    .then((users) => {
      const findUser = users.find(
        (use) => use.username === userName && use.password === password
      );

      if(findUser){
        navigate("/Dashboard")
      } else {
        alert("Invalid Credentials!!!")
      }
    })
    .catch((error) => console.error("Login error:", error))
  };
  
  const handleRegister = () => {
    const newUser = {
      username:username,
      password:password
    };

    fetch("",{
      method:"POST",
      headers:{
        "Content-Type":"application.json",
      },
      body:JSON.stringify(newUser),
    })
    .then((response) => {
      if (response.ok){
        alert("Registration complete!")
        navigate("/")
      }
    })
    .catch((error) => console.error("Registration error!:", error))
  }

  return (
    <>
     <nav>
       <Link to="/">Login Page</Link>
       <Link to="/Register">Register Page</Link>
       <Link to="/Dashboard">DashBoard</Link>
       <Link to="/Shop">Recipes</Link>
     </nav>

     <Routes>
        <Route path="/" element={<Login userName={userName} setUsername={setUsername} password={password} setpassword={setPassword} onLogin={handleLogin}/>} />
        <Route path="/Register" element={<Register userName={userName} setUsername={setUsername} password={password} setpassword={setPassword} onRegister={handleRegister}/>}/>
        <Route path="/Shop" element={<Shop />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
     </Routes>
    </>
  )
}

export default App
