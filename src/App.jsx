import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieNavigation from "./components/MovieNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData,setImageURL } from "./app/movieoSlice";

function App() {
  const dispatch = useDispatch();

  const fetchTrendData = async () => {
    try {
      const response = await axios.get('/trending/all/week');

      dispatch(setBannerData(response.data.results));

    } catch (error) {
      console.error('Error fetching trending data:', error);
    }
  } 

  const fetchconfiguration = async () => {
    try {
      const response = await axios.get('/configuration');

      dispatch(setImageURL(response.data.images.secure_base_url+"original"));

    }catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTrendData()
    fetchconfiguration()
  }, []);

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