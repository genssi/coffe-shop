import Header from "../header/header";
import About from "../aboutUs/about";
import MaskGroup from "../maskgroup/maskGroup";
import Footer from "../footer/footer";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <About/>
            <MaskGroup/>
            <Footer/>
        </div>
    )
}

export default App;