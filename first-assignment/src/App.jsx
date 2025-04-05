import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home';
import Createaccount from './Components/Createaccount';
import Signup from './Components/Signup';
import Storage from './Components/Storage';
import Login from './Components/Login';

const App = () => {
  const router = createBrowserRouter([
    {
      path :'/',
      element :(<div>
  <Home/>
      </div>)
      
    },
    {
      path :'/createaccount',
      element :(<div>
<Createaccount/>
      </div>)
    },
    {
      path :'/storage',
      element :(<div>
<Storage/>
      </div>)
    },
    {
      path :'/signup',
      element :(<div>
<Signup/>
      </div>)
    },
    {
      path:'/login',
      element:(<div>
        <Login/>
      </div>)
    }
  ]);

 
  return (
    <div>
    
        <RouterProvider router={router}>

        </RouterProvider>
     
      
    </div>
  )
}

export default App
