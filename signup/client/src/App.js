import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import all component
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import Password from "./components/Password"
import PageNotFound from "./components/PageNotFound"
const router = createBrowserRouter([
  {
      path : '/',
      element : <Login></Login>
  },
  {
      path : '/register',
      element : <Register></Register>
  },
  {
    path : '/login',
    element :<Login></Login>
},
{
  path : '/profile',
  element : <Profile></Profile>
},
{
  path : '/password',
  element : <Password></Password>
},
{
  path : '*',
  element : <PageNotFound></PageNotFound>
},
])
const App = () => {
  return (
    <main>
    <RouterProvider router={router}></RouterProvider>
</main>
  )
}

export default App
