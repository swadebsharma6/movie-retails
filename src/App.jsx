import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";
import { MovieContext } from "./context/AuthContext";


const App = () => {
  return (
    <>
    <MovieContext.Provider value={{}}> 
    <section>
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
    
    </>
  );
};

export default App;