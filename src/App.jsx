import React from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Signup from "./screens/Signup";
import Posts from "./screens/Posts";


 
const App = () => {
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route path = '/' element = { <Signup/> } />
          <Route path = '/posts' element = { <Posts/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
