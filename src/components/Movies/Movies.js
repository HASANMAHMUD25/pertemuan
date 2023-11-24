import React from "react";
import Moviea from "../Movie/Movie"
import styled from "styled-components";

const Movies = (props) => {

    const { item,title } = props

    return(
       <MoviesStyle>
         <div className="container">
            <section className="movies">
                <h2 className="movies__title">{title}</h2>
                <div className="movie__container">
               {
                  item.map(function(data){
                     return (                    
                           <Moviea key={data.id} title={data.title} date={data.date}  image={data.poster_path} link={data.link} genre={data.genre} id={data.id} item={data}/>
                       
                     )
                  })
               }
               </div>
           </section>
         </div>
       </MoviesStyle>
    );
}

const MoviesStyle = styled.div`
 .container {
     margin: 1rem;
 }

 .movies {
     margin: 5rem 0;
     text-align: center;
 }

 .movies__title {
     margin-bottom: 1rem;
     font-size: 2.44rem;
     color: #000000;
 }

 .movie__container {
     display: flex;
     flex-direction: column;
 }

 .movie {
     margin-bottom: 1rem;
 }

 .movie__image {
     border-radius: 25px;
     max-width: 100%;
 }

 .movie__title {
     color: #4361ee;
     font-size: 1.95rem;
     margin-bottom: 0.5rem;
 }

 .movie__date {
     color: #64748b;
    }

 @media (min-width: 768px) {
      .movie__container {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
         align-items: flex-start;
        }

      .movie {
          flex-basis: 50%;
        }
    }

 @media (min-width: 992px) {
    .container {
        max-width: 1200px;
        margin: 3rem auto;
    }

    .movie {
        flex-basis: 25%;
        padding: 1rem;
    }
`
export default Movies;