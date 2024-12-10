
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Home'
import Test from './Test'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/test/" Component={Test} />
        </Routes>
      </Router>
    </>
  )
}

export default App
