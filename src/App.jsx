import { useState, useEffect } from 'react'
import { Route,Routes,Link, useNavigate, useLocation } from 'react-router'
import Recipes from './Pages/Recipes'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import FastFoods from './Pages/FastFoods'
import Drinks from './Pages/Drinks'
import BakedProducts from './Pages/BakedProducts'
import Contactus from './Pages/ContactUs'
import ProtectedRoutes from './Components/ProtectedRoutes'



function App() {
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")

  const [fastFoodItems, setFastFoodItems] = useState("")
  const [drinksItems, setDrinKsItems] = useState("")
  const [bakedItems, setBakedItems] = useState("")
  const [search, setSearch] = useState("")

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    fetch("https://food4u-api-u42t.onrender.com/users")
    .then(response => response.json())
    .then((users) => {
      const findUser = users.find(
        (userr) => userr.username === userName && userr.password === password
      );

      if(findUser){
        setUsername(findUser.username);
        setEmail(findUser.email);
        setDateOfBirth(findUser.dateOfBirth);
        navigate("/Dashboard")
      } else {
        alert("Invalid Credentials!!!")
      }
    })
    .catch((error) => console.error("Login error:", error))
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setDateOfBirth("");
    navigate("/")
  }
  
  const handleRegister = () => {
    const newUser = {
      username:userName,
      password:password,
      email:email,
      dateOfBirth:dateOfBirth
    };

    fetch("https://food4u-api-u42t.onrender.com/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
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
    fetch("https://food4u-api-u42t.onrender.com/fastfoods")
    .then(response => response.json())
    .then(data => setFastFoodItems(data))
  }, []);

  useEffect(() => {
    fetch("https://food4u-api-u42t.onrender.com/drinks")
    .then(response => response.json())
    .then(data => setDrinKsItems(data))
  }, []);

  useEffect(() => {
    fetch("https://food4u-api-u42t.onrender.com/bakedfoods")
    .then(response => response.json())
    .then(data => setBakedItems(data))
  }, []);
  
  return (
    <>
    {location.pathname !== '/' && location.pathname !== '/Register' && (
      <nav className='bg-linear-to-r from-orange-500 via-yellow-300 to-orange-500 backdrop-blur-md shadow-lg px-4 py-4 flex flex-wrap justify-center gap-4 sticky top-0 z-50 border-b border-red-500'>
        <Link to="/Dashboard" className="bg-white/30 px-4 py-3 rounded-2xl hover:bg-white/40 font-food text-base sm:text-lg">DashBoard</Link>
        <Link to="/Recipes" className="bg-white/30 px-4 py-3 rounded-2xl hover:bg-white/40 font-food text-base sm:text-lg">Recipes</Link>
        <Link to="/ContactUs" className="bg-white/30 px-4 py-3 rounded-2xl hover:bg-white/40 font-food text-base sm:text-lg">Contact Us</Link>
      </nav>
    )}

     <Routes>
        <Route path="/" element={<Login userName={userName} setUsername={setUsername} password={password} setPassword={setPassword} onLogin={handleLogin}/>} />
        <Route path="/Register" element={<Register userName={userName} setUsername={setUsername} password={password} setPassword={setPassword} onRegister={handleRegister} email={email} setEmail={setEmail} dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth}/>}/>
        <Route path="/Recipes" element={<ProtectedRoutes userName={userName}>  
          <Recipes />
        </ProtectedRoutes>}/>
        <Route path="/Dashboard" element={<ProtectedRoutes userName={userName}>
          <Dashboard userName={userName} email={email} dateOfBirth={dateOfBirth} onLogout={handleLogout} />
        </ProtectedRoutes>}/>
        <Route path="/FastFoods" element={<FastFoods fastFoodItems={fastFoodItems} search={search} setSearch={setSearch}/>}/>
        <Route path="/Drinks" element={<Drinks drinksItems={drinksItems} search={search} setSearch={setSearch}/>}/>
        <Route path="/BakedProducts" element={<BakedProducts bakedItems={bakedItems} search={search} setSearch={setSearch}/>}/>
        <Route path="/Contactus" element={<ProtectedRoutes userName={userName}>
          <Contactus />
          </ProtectedRoutes>} />
     </Routes>
    </>
  )
}

export default App
