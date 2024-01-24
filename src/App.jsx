import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";
import { MovieContext, ThemeContext } from "./context/AuthContext";


const App = () => {

  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);


  return (
    <>
  <ThemeContext.Provider value={{darkMode, setDarkMode}}>
  <MovieContext.Provider value={{cartData, setCartData}}> 
  <section className={`${darkMode ? 'dark' : ''} h-full w-full`} >
  <Header></Header>
  <main>
  <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] ">
  <SideBar></SideBar>
  <MovieList></MovieList>
  </div>
  </main>
  <Footer></Footer>
</section>
  </MovieContext.Provider>
  </ThemeContext.Provider>
    
    </>
  );
};

export default App;