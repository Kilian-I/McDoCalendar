
import './App.css'
import { Route, Routes } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from './pages/Home.page'
import ErrorPage from './pages/Error.page'

function App() {

  return (
    <>

      <Routes>
        {/* public path */}
        <Route path="/" element={<h1>Page de Connexion</h1>} />
        {/* protected path */}
        <Route path="/home" element={<HomePage />} />
        {/* error path */}
      <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
