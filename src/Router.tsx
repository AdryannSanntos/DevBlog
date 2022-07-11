import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<Home />} />
      <Route path="/author/:author" element={<Home />} />
    </Routes>
  )
}
