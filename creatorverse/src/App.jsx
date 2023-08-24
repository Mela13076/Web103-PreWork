import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/ShowCreators';
import Create from './pages/AddCreator'
import Edit from './pages/EditCreator'
import Info from './pages/ViewCreator'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
