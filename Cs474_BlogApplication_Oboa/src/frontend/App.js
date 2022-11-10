import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Auth from "./components/Auth";
import NewsList from "./components/NewsList";

import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";

import { authActions } from "./store";


function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

    return <React.Fragment>
        <header>
            <Header/>
        </header>
        <main>
            <Routes>
            {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            //blog pages
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
              <Route path="/news" element={<NewsList />} />
            </>
          )}
            </Routes>
        </main>


    </React.Fragment>;
}

export default App;