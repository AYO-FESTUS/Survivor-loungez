// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Mentorship from "./pages/Mentorship";
// import Donation from "./pages/Donation";
// // import NotFound from "./pages/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/blog",
//     element: <Blog />,
//   },
//   {
//     path: "/mentorship",
//     element: <Mentorship />,
//   },
//   {
//     path: "/donation",
//     element: <Donation />,
//   },
//   // {
//   //   path: "*",
//   //   element: <NotFound />,
//   // },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;

// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";


import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Donation from "./pages/Donation";
import Mentorship from "./pages/Mentorship";
import BlogPost from "./pages/BlogPost";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "donation", element: <Donation /> },
       { path: "blog/:slug", element: <BlogPost /> },
      { path: "mentorship", element: <Mentorship  /> },

      { path: "*", element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
