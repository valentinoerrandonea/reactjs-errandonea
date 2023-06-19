import NavBar from "./components/NavBar/Navbar"
import ItemPreview from "./components/ItemPreview/ItemPreview"
import { ShowProducts } from "./components/Products/ShowProducts"
import Footer from "./components/Footer/Footer"
function App() {


  return (
    <div>
     <NavBar></NavBar>
     <ItemPreview></ItemPreview>
     <ShowProducts></ShowProducts>
     <Footer></Footer>
    </div>
  )
}

export default App
