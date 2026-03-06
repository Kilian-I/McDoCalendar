
import './App.css'
import { Route, Routes } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from './pages/Home.page'
import ErrorPage from './pages/Error.page'
import DashboardPage from './pages/Dashboard.page'
import { Landing } from './pages/Landing.page'
import { PrivateLayout } from './layout/private.layout'



function App() {

  return (
    <>

      <Routes>
        {/* public path */}

          <Route path="/" element={<Landing />} />

        {/* protected path */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
        {/* error path */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
