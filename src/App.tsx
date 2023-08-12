import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signupform from './Components/Signup/Signupform'


function App() {
  return (
    <div style={{ backgroundColor: "#f9f2ea",overflow:"hidden"}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signupform' element={<Signupform/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


// import Key from './Components/Key/Key'

// function App () {
//   return (
//     <div>
//       <Key/>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react';
// import ComponentA from '../src/Components/Context/ComponentA';
// import ComponentB from '../src/Components/Context/ComponentB';
// import './App.css';

// function App() {
//   const [value, setValue] = useState<string>('Hello');

//   const handleValueChange = (newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//     <div className="App">
//       <ComponentA value={value} onChange={handleValueChange} />
//       <ComponentB onClick={() => handleValueChange('world')} />
//     </div>
//   );
// }

// export default App;

