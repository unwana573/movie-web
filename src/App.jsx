import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieNavigation from "./components/MovieNavigation";

function App() {
  return (
    <main className="pb-14 lg:pb-0">
        <Header />
        <div className="pt-16">
            <Outlet />
        </div>
        <Footer />
        <MovieNavigation />
    </main>
  )
}

export default App;