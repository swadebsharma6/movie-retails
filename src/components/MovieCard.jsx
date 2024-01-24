import { useState } from 'react';
import tag from '../assets/tag.svg';
import { getImageUrl } from "../utilites/getImageUrl";
import MovieDetails from './MovieDetails';
import Ratting from "./Ratting";


const MovieCard = ({movie}) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleModalClose =()=>{
        setSelectedMovie(null);
        showModal(false);
    }

    const handleMovieSelection =(movie)=>{
        setSelectedMovie(movie);
        setShowModal(true);
    }

    return (
     <section>
    {
         showModal &&
          <MovieDetails
          movie={selectedMovie}
          onClose ={()=> handleModalClose(!showModal)}
          ></MovieDetails>
        
    }
     <div onClick={()=> handleMovieSelection(movie)}>
     <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
     <img className="w-full h-[300px] object-cover" src={getImageUrl(movie.cover)} alt={movie.title} />
     <figcaption className="pt-4">
         <h3 className="text-xl mb-1">{movie.title}</h3>
         <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
         <div className="flex items-center space-x-1 mb-5">
         <Ratting value={movie.rating}></Ratting>
                 </div>
         <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
             href="#">
             <img src={tag} alt="" />
             <span>$ {movie.price} | Add to Cart</span>
         </a>
     </figcaption>
    </figure>
     </div>
     </section>
    );
};

export default MovieCard;