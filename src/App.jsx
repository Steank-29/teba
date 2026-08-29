import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import './index.css'
import Signin from './components/Signin'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          {/* Add more routes here as you build them */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App