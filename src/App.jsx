import Home from "./pages/home"
import Select from './pages/Select'
import Random from './pages/Random'
import Header from "./components/header"
import NotFound from './pages/NotFound'
import { listUpdater } from "./reducer/listUpdater"
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./context/userContext"
import { useReducer } from "react"

const App = () => {
  const [list, dispatch] = useReducer(listUpdater, [])
  return (
    <div className="text-[#111827] pb-[20px] ml-auto mr-auto bg-gray-200 rounded-[20px] w-[600px]">
      <UserContext.Provider value = {{list, dispatch}}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/select' element={<Select />} />
          <Route path='/random' element={<Random />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
