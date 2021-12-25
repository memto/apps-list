import Link from "next/link";
import { RiAppsLine } from "react-icons/ri";

const NavBar = () => {
    return (      
        <>        
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link href="/">
                <a className="navbar-item">
                    <span className="icon-text">
                        <span>AppsList</span>
                        <span className="icon">
                            <RiAppsLine />
                        </span>                        
                    </span>
                </a>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <Link href="/walletsapp/user-search">
                <a className="navbar-item"> Wallets app </a>
            </Link>

            <Link href="/reposapp">
                <a className="navbar-item"> Repos app </a>
            </Link>

            <Link href="/about">
                <a className="navbar-item"> About </a>
            </Link>
            </div>

            <div className="navbar-end">
            </div>
        </div>
        </nav>   
        </>     
    )
}

export default NavBar;