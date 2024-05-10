import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Nav from './component/Nav/Nav';
import First from './component/A/A';
const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/first' element={<First/>}/>
    </Routes>
    </>
  )
}

export default App;