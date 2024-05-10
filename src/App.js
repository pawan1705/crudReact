import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Nav from './component/Nav/Nav';
import First from './component/A/A';
import Second from './component/Second/Second';
import Create from './component/Create/Create';
import Read from './component/Read/Read';
import Update from './component/Update/Update';
const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/first' element={<First/>}/>
      <Route path='/second' element={<Second/>}></Route>
      <Route path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>} / >
        <Route path='/update' element={<Update/>} />
    </Routes>
    </>
  )
}

export default App;