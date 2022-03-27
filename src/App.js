import './css/Navbar.css';
import './css/Contact.css';
import './css/Team.css';
import './css/Services.css';
import './css/Contact.css';
import './css/Footer.css';
import Team from './componets/Team';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import Services from './componets/Services';

function App() {
  return (
    <div>
        <Navbar/>
        
        <Services/>
        <Contact/>
        <Team/>
        <Footer/>
    </div>
  );
}

export default App;
