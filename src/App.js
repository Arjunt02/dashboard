// import { Col, Row } from 'react-bootstrap';
import './App.css';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Card from './Components/Card';
import Bell from 'feather-icons-react/build/IconComponents/Bell';
import Plus from 'feather-icons-react/build/IconComponents/Plus';






function App() {
  return (

    <>

<Navbar />
      

      <div className='combined-container'>

      

        <Sidebar />
        <div className='card-section'>
          <Card />
        </div>

        <div className='rightside'>
          <div className='icon'><Bell/></div>
          <div className='icon'><Plus/></div>
        </div>


      </div>

      

    </>
  );
}

export default App;
