import React from 'react';
import './App.css'

import{createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes} from "react-router-dom"
import Main_layouts from './Layouts/Main_layouts'
const HomePage = React.lazy(() => import('./Pages/HomePage'));
const DestinationPage = React.lazy(() => import('./Pages/DestinationPage'));
const CrewPage = React.lazy(() => import('./Pages/CrewPage'));
const TechnologyPage = React.lazy(() => import('./Pages/TechnologyPage'));
function App() {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main_layouts/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/destination/:planet' element={<DestinationPage/>}/>
    <Route path='/Crew' element={<CrewPage/>}/>
    <Route path="/Technology" element={<TechnologyPage/>}/>
    </Route>
  )
)
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
