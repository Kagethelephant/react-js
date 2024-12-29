import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// This is where the html points to, but it seems like all this does is start the main
// app "App.tsx" not really sure why this is yet
createRoot(document.getElementById('root')).render(<App/>)
