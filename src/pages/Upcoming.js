import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';
import GetDataUpcoming from '../Utils/networks/GetDataUpcoming';


const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1);

    const getData = async (number) => {
        const data = await GetDataUpcoming(number);
        await setMovies(data.results);
    };

    const handleNext = () => {
        const data = pages;
        setPages(data + 1);
    };

    const handleBefore = () => {
        if (pages > 1) {
            const data = pages;
            setPages(data - 1);
        } else {
            setPages(1);
        }
    };

    useEffect(() => {
        getData(pages);
    }, [pages]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
            <Hero />
            <Movies item={movies} title="Upcoming Movies" />
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', position: 'fixed', bottom: '0', width: '100%', backgroundColor: '#fff', padding: '20px' }}>
                <button
                    onClick={handleBefore}
                    style={{
                        backgroundColor: '#F44336',
                        color: 'white',
                        borderRadius: '10%',
                        padding: '10px 20px',
                        cursor: 'pointer',
                    }}
                >
                    Kembali
                </button>
                <button
                    onClick={handleNext}
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        borderRadius: '10%',
                        padding: '10px 20px',
                        cursor: 'pointer',
                    }}
                >
                    Pindah
                </button>
            </div>
        </div>
    );
};

export default Upcoming;
