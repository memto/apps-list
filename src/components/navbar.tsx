import Link from "next/link";

const NavBar = () => {
    return (
        // <div>
        //     <ul>
        //         <li>
        //             <Link href="/">
        //                 <a>Home</a>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link href="/about">
        //                 <a>About</a>
        //             </Link>
        //         </li>
        //     </ul>
        // </div>  
        
        <>        
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <Link href="/">
                <a class="navbar-item" href="https://bulma.io">Github Repos 📦</a>
            </Link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <Link href="/">
                <a class="navbar-item"> Home </a>
            </Link>

            <Link href="/about">
                <a class="navbar-item"> About </a>
            </Link>
            </div>

            <div class="navbar-end">
            </div>
        </div>
        </nav>   
        </>     
    )
}

export default NavBar;