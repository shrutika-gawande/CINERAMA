import '../styles/navbar.css'

export default function Navbar() {
    return (
        <header>
            <a href="#" className="logo">CINE<span>RAMA</span></a>
            <nav>
                <a href="#">Discover</a>
                <a href="#">Top Rated</a>
                <a href="#">New Releases</a>
                <a href="#">Watchlist</a>
            </nav>
        </header>
    );
}