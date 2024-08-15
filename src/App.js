import React, { useState } from 'react'
import NavBar from './Component/NavBar'
import News from './Component/News'
import Aboutus from './Component/AboutUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import './App.css'

function App() {

  

    const [progress, setProgress] = useState(0);
    const apiKey = process.env.REACT_APP_API_KEY

   

  return (
    <>

      {/* <ReactHook1/> */}

      <Router>
        <div >

          <NavBar  />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country={"in"} category={"general"} />} />
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country={"in"} category={"entertainment"} />} />
            <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={"in"} category={"business"} />} />
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country={"in"} category={"health"} />} />
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country={"in"} category={"science"} />} />
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country={"in"} category={"sports"} />} />
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country={"in"} category={"technology"} />} />
            <Route path='/Aboutus' element={<Aboutus key="Aboutus" pageSize={6} country={"in"} category={"Aboutus"} />} />

          </Routes>
        </div>



      </Router>

      {/* <News setProgress = {setProgress}Item/> */}
      {/* <Lodar /> */}


    </>
  );
}

export default App;
