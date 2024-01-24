import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shopping from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context/AuthContext";
import CartDetails from "./CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCart && (
        <CartDetails onClose={() => setShowCart(false)}></CartDetails>
      )}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
			onClick={()=>setDarkMode(darkMode => !darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              {darkMode ? (
                <img src={sun} width="24" height="24" alt="Sun" />
              ) : (
                <img src={moon} width="24" height="24" alt="Sun" />
              )}
            </a>
          </li>
          <li>
            <a
              onClick={handleShowCart}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shopping} width="24" height="24" alt="" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] text-center text-xl text-orange-700 font-bold">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
