import './App.css';
import { useState } from 'react';
import Mainbox from './components/Mainbox/Mainbox';
import Seeall from './components/SEE ALL/Seeall';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  const [showp, setShowp] = useState();
  function tosidebar(show){
       setShowp(show);
  }
  return (
    <div>
    <div className="App">
    <div className='Sidebar'></div>
   <Sidebar tosidebar={tosidebar}/>
   {showp?<Mainbox/>:<Seeall/>}
   

    </div>
    </div>
  );
}

export default App;
