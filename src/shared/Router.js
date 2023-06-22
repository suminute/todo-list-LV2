import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "../pages/Detail";
import Main from "../pages/Main";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='detail' element={<Detail />} />
          <Route path='detail/:id' element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
