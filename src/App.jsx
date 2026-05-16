import { useState, useEffect } from 'react'
import { Route,Routes,Link, useNavigate } from 'react-router'
import Recipes from './Pages/Recipes'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import FastFoods from './Pages/FastFoods'
import Drinks from './Pages/Drinks'
import BakedProducts from './Pages/BakedProducts'
import Contactus from './Pages/ContactUs'




function App() {
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [fastFoodItems, setFastFoodItems] = useState("")
  const [drinksItems, setDrinKsItems] = useState("")
  const [bakedItems, setBakedItems] = useState("")
  const [search, setSearch] = useState("")

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

  useEffect(() => {
    fetch("http://localhost:3000/fastfoods")
    .then(response => response.json())
    .then(data => setFastFoodItems(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
    .then(response => response.json())
    .then(data => setDrinKsItems(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/bakedfoods")
    .then(response => response.json())
    .then(data => setBakedItems(data))
  }, []);
  

  return (
    <>
     <nav className='bg-linear-to-r from-orange-500 via-yellow-300 to-orange-500 backdrop-blur-md shadow-lg px-8 py-5 flex justify-center gap-8 sticky top-0 z-50 border-b border-red-500'>
       <Link to="/Dashboard" className="bg-white/30 p-3 rounded-2xl hover:bg-white/40">DashBoard</Link>
       <Link to="/Recipes" className="bg-white/30 p-3 rounded-2xl hover:bg-white/40">Recipes</Link>
       <Link to="/ContactUs" className="bg-white/30 p-3 rounded-2xl hover:bg-white/40">Contact Us</Link>
     </nav>

     <Routes>
        <Route path="/" element={<Login userName={userName} setUsername={setUsername} password={password} setPassword={setPassword} onLogin={handleLogin}/>} />
        <Route path="/Register" element={<Register userName={userName} setUsername={setUsername} password={password} setPassword={setPassword} onRegister={handleRegister}/>}/>
        <Route path="/Recipes" element={<Recipes />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/FastFoods" element={<FastFoods fastFoodItems={fastFoodItems} search={search} setSearch={setSearch}/>}/>
        <Route path="/Drinks" element={<Drinks drinksItems={drinksItems} search={search} setSearch={setSearch}/>}/>
        <Route path="/BakedProducts" element={<BakedProducts bakedItems={bakedItems} search={search} setSearch={setSearch}/>}/>
        <Route path="/Contactus" element={<Contactus />} />
     </Routes>
    </>
  )
}

export default App
