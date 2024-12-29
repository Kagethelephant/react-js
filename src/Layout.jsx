import { Navbar } from "./components/navbar"
import { Outlet } from "react-router"

export function Layout() {
  return (
    <>
      <Navbar/>
      <main>
        {/* this represents all of the child routes */}
        <Outlet/>
      </main>
    </>
  )
}
