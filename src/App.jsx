import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SignUpPage } from "./pages/SignUpPage"
import { SupporterDashboard } from "./pages/SupporterDashboard"
import { EventPage } from "./pages/EventPage"
import { ArtistPage } from "./pages/ArtistPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/entrar" element={<SignUpPage />} />
      <Route path="/apoiador-dashboard" element={<SupporterDashboard />} />
      <Route path="/evento/:id" element={<EventPage />} />
      <Route path="/artista-dashboard" element={<ArtistPage />} />
    </Routes>
  )
}

export default App