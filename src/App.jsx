import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SignUpPage } from "./pages/SignUpPage"
import { SupporterDashboard } from "./pages/SupporterDashboard"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/entrar" element={<SignUpPage />} />
      <Route path="/apoiador-dashboard" element={<SupporterDashboard />} />
    </Routes>
  )
}

export default App