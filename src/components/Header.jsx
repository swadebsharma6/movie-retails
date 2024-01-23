import sun from '../assets/icons/sun.svg';
import logo from '../assets/logo.svg';
import ring from '../assets/ring.svg';
import shopping from '../assets/shopping-cart.svg';

const Header = () => {
    return (
        <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={logo} width="139" height="26" alt="" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={ring} width="24" height="24" alt="Ring" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={sun} width="24" height="24" alt="Sun" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={shopping} width="24" height="24" alt="" />
					</a>
				</li>
			</ul>
		</nav>
	</header>
    );
};

export default Header;