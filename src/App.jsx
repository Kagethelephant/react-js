import './App.scss';
import { About, Schedule, Home, Sandbox } from './pages';
import { Layout } from './Layout'
import { HashRouter as Router, Routes, Route } from 'react-router';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Schedule' element={<Schedule/>}/>
            <Route path='/Sandbox' element={<Sandbox/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
