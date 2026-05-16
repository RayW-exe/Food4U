import { useState } from 'react'
import { Route,Routes,Link, useNavigate } from 'react-router'
import Recipes from './Pages/Recipes'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import FastFoods from './Pages/FastFoods'
import Drinks from './Pages/Drinks'
import BakedProducts from './Pages/BakedProducts'
import Recipes from './Pages/Recipes'



function App() {
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const[currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then((users) => {
      const findUser = users.find(
        (userr) => userr.username === userName && userr.password === password
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
      username:userName,
      password:password
    };

    fetch("http://localhost:3000/users",{
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
       <Link to="/Recipes">Recipes</Link>
     </nav>

     <Routes>
        <Route path="/" element={<Login userName={userName} setUsername={setUsername} password={password} setPassword={setPassword} onLogin={handleLogin}/>} />
        <Route path="/Register" element={<Register userName={userName} setUsername={setUsername} password={password} setPassword={setPassword} onRegister={handleRegister}/>}/>
        <Route path="/Recipes" element={<Recipes />}/>
        <Route path="/Dashboard" element={<Dashboard currentUser={currentUser}/>}/>
        <Route path="/FastFoods" element={<FastFoods />}/>
        <Route path="/Drinks" element={<Drinks />}/>
        <Route path="/BakedProducts" element={<BakedProducts />}/>

     </Routes>
    </>
  )
}

export default App
