import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../Pages/Home';
import NotfoundPage from '../Pages/PageNotFound';




const Auth = () => {
  return (
    <div>


      <BrowserRouter>

        <Routes>

          <Route index element={<Home />}></Route>
          <Route path="/RosaGutierrezAsoc/" element={<Home />}></Route>
          <Route path="*" element={<NotfoundPage />}></Route>


        </Routes>




      </BrowserRouter>



    </div>


  )
}

export default Auth