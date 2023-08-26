import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from './context/ThemeContext.jsx'
import { Text } from './context/TextContext.jsx'
import { ViewportProvider } from "./context/ViewportContext";



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ViewportProvider>
    <Text>
      <Theme>
            <App />
      </Theme>
</Text>
</ViewportProvider>
  </React.StrictMode>,

)
