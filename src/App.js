import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Layout from "./layouts/Layouts";
import { useState } from "react";
import Add from "../src/pages/Add"
import GlobalStyle from "./components/Global/GlobalStyle";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Detail from "./pages/movie/Dtail";
import DataMovie from "./Utils/constans/DataMovie";



function App() {

  const [ data, setData ] = useState(DataMovie)
  return (
    <>
    <GlobalStyle />
    <Layout>
        <Routes>
          <Route path='/' element={<Home item={data} setItem={setData}/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/Add' element={<Add item={data} setItem={setData} />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<Detail />} />
          
        </Routes>
    </Layout>
    </>
  );
}

export default App;
