import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import PostsYear from "./components/postsYear";
import PostsMonth from "./components/postsMonth";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import {Route, Routes, Outlet} from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          
          <Routes>
            <Route path="/products" element={<Products />}>
              <Route path=":id" element={<ProductDetails />}></Route>   
            </Route>
            <Route path="/posts" element={<Posts />}>
              <Route path=":year" element={<PostsYear />}>
                <Route path=":month" element={<PostsMonth />}></Route>
              </Route>
            </Route>   
            <Route path="/admin" element={<Dashboard />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
