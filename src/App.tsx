import { useState } from "react";
import { Main } from "./components/Main";
import {Project} from './pages/Project'

import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
 

  return (
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={  <Main/> }/>
          <Route path="projeto" element={ <Project/> } />
        </Routes>
      </BrowserRouter>
  )
}


