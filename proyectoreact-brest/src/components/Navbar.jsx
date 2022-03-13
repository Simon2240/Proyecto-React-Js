import logo from '../logo.svg'
const Navbar = () =>{
    return(
        <nav className="navbar">
            <img src={logo} alt='logo' className='logo'/>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;