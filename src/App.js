import './App.css';
import { Link, Outlet } from "react-router-dom";
import Footer from './components/footer';
import GI from './components/GI';

const days = [];

for (let i = 0; i < 8; i++){
  days.push(`${'day'} ${i+1}`)
}

// console.log(days);

function App() {
  return (
    <div className="App">
      <div className='title-container'>
          <Link to="/" className='link title-deco'><h1>Virtual Partner Residency</h1></Link>
          <p>Accordionist Filip Eraković & composer Francisco Uberto.</p>
          <p>Granted by Goethe Institut</p>
        </div>
      <main>
        
        <header className="App-header">
         <nav>
          <ul>
            {/* {days.map((e, i) => (
              <Link to='/day'><li key={i} className="link">{e}</li></Link>
            ))} */}
            <Link to='/proyect' className='link'><li>the proyect</li></Link>
            <Link to='/dayI' className='link'><li>day I</li></Link>
            <Link to='/dayII' className='link'><li>day II</li></Link>
            <Link to='/dayIII' className='link'><li>day III</li></Link>
            <Link to='/dayIV' className='link'><li>day IV</li></Link>
            <Link to='/dayV' className='link'><li>day V</li></Link>
            <Link to='/dayVI' className='link'><li>day VI</li></Link>
            <Link to='/dayVII' className='link'><li>day VII</li></Link>
          </ul>
         </nav>
         <Footer/>
        </header>
        <Outlet />
      </main>
      <GI />
      
    </div>
    
  );
}

export default App;
