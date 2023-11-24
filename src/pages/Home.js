import { useEffect, useState } from "react";
import GetDataTrending from "../Utils/networks/GetDataTrending";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";



const Home = () => {
   
    const [movies, setMovies] = useState([])

    const getData = async() => {
        const data = await GetDataTrending(1)
        await setMovies(data.results)
    }

    useEffect(
        function(){
            getData()
        }, []
    )
    return (
        <div>
             <Hero />
            <Movies item={movies} title={"Trending Muvies"}/>
        </div>
    );
}

export default Home;
