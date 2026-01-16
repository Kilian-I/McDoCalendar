
import './App.css'
import { Route, Routes } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from './pages/Home.page'

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<h1>Welcome to Vite + React!</h1>} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
