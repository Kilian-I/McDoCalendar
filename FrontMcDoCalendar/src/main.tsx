import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 , // 1 hour
      refetchOnWindowFocus: false, 
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>  
      </QueryClientProvider>
  </StrictMode>,
)
