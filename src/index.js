import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home'
import Proyect from './components/Project'
import Day1 from './components/day1';
import Day2 from './components/day2';
import Day3 from './components/day3';
import Day4 from './components/day4';
import Day5 from './components/day5';
import Day7 from './components/day7';
import Day8 from './components/day8';


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dayI',
        element: <Day1 />
      },
      {
        path: '/dayII',
        element: <Day2 />
      },
      {
        path: '/dayIII',
        element: <Day3 />
      },
      {
        path: '/dayIV',
        element: <Day4 />
      },
      {
        path: '/dayV',
        element: <Day5 />
      },
      {
        path: '/dayVI',
        element: <Day7 />
      },
      {
        path: '/dayVII',
        element: <Day8 />
      },
      {
        path: '/proyect',
        element: <Proyect/>
      }
    ]

  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
