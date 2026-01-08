
import About from "../pages/About";
import Career from "../pages/Carrer";
import Contact from "../pages/Contact"
import Gallery from "../pages/Gallery";
import Mous from "../pages/Mous";
import Pipeline from "../pages/Pipeline.Jsx";
import Home from "../pages/Home";
import Services from "../pages/Services";
import { Route,Routes } from "react-router-dom";
import LinkedInRedirect from "../pages/LinkedInRedirect";
import TwitterRedirect from "../pages/TwitterRedirect";
import FacebookRedirect from "../pages/FacebookRedirect";


function Approutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/mous" element={<Mous />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/linkedin" element={<LinkedInRedirect />} />
            <Route path="/twitter" element={<TwitterRedirect />} />
            <Route path="/facebook" element={<FacebookRedirect />} />

            




        </Routes>
    );

}
export default Approutes;