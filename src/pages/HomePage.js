import Home from "../components/Home"
import Housing from "../components/Housing"
import Navbar from "../components/Navbar"
import Nfts from "../components/Nfts"
import Footer from "../components/Footer"

const HomePage = ({setModal}) => {
  return (
    <div>
        <Navbar setModal={setModal} />
        <Home />
        <Housing />
        <Nfts />
        <Footer />
    </div>
  )
}

export default HomePage