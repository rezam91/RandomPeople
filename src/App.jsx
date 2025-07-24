import Home from "./pages/home"
import Select from './pages/Select'
import Random from './pages/Random'
import Header from "./components/header"
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select' element={<Select />} />
        <Route path='/random' element={<Random />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
