import MovieDetails from './pages/MovieDetails'
import Home from './pages/Home'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <Home />
      <Search />
      <MovieDetails />
      <Footer/>
    </>
  )
}

export default App
