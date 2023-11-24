import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GetDetailMovie from '../../Utils/networks/GetDetailMovie';
import Button from '../../components/ui/Button';

const Detail = () => {
    const { id } = useParams()
    const [movie, setMovie]  = useState({})
    const [ genre, setGenres] = useState([])

    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

    const getDetail = async(id) => {
        const data = await GetDetailMovie(id)
        await setMovie(data)
        await setGenres(data.genres)
    }

    useEffect(() => {
        getDetail(id)
    },[id]) 


    console.log(movie);


    return (
        <DetailStyle>
        <div className="container">
        <section className="detail">
            <div className="detail__left">
                <h2 className="detail__title">{movie.title}
                </h2>
                <h3 className="detail__titlev2">{movie.original_title}
                </h3>
                {
                    genre.map(
                        function(item){
                            return(
                                <p className="detail__genre">{item.name}</p>
                            )
                        }
                    )
                }
                <p className="detail__desc">Synopsys: {movie.overview}</p>
                <a className="detail__descv2" target='blank' href={movie.homepage}>Kunjungi Situs</a><br />

                <Button variant="primary" style={{ marginRight: '8px' }}>watch</Button>
                    <Button variant="secondary">Trailer</Button>
                    
            </div>
            <div className="detail__right">
                <img
                className="detail__image"
                src={url_image}
                alt="placeholder"
                />
            </div>
        </section>
    </div>
    </DetailStyle>
    );
}


const DetailStyle = styled.div`
        .container {
            margin: 1rem;
        }
        .detail {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .detail__left {
            margin-bottom: 1rem;
        }
        .detail__title {
            color: #473144;
            margin-bottom: 1rem;
            font-size: 2.44rem;
        }
        .detail__titlev2 {
            color: #251f1f;
            margin-bottom: 1rem;
            font-size: 2.10rem;
        }
        .detail__genre {
            color: #191923;
            margin-bottom: 0;
            font-size: 1.59rem;
        }
        .detail__desc {
            color: #0a0a0a;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        .detail__descv2 {
            color: #64748b;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        .detail__button {
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 10px;
            background-color: rgb(16, 70, 133);
            color: white;
        }
        .detail__image {
            max-width: 250%;
            height: auto;
            margin-top: 1rem;
            border-radius: 25px;
        }
        @media (min-width: 768px) {
        
        }
        @media (min-width: 992px) {
            .container {
                max-width: 1000px;
                margin: 0 auto;
            }
            .detail {
                margin: 0 1rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                text-align: left;
            }
            .detail__right {
                margin-left: 1rem;
                flex-basis: 60%;
            }
        }
`
export default Detail;