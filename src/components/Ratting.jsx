import star from '../assets/star.svg';

const Ratting = ({value}) => {
  const stars =  Array(value).fill(star)
    
    return (
        <>
         {
            stars.map((star, idx )=>(
                <img key={idx} src={star} width={20} height={20}alt="Star " />
            ))
         }   
        </>
    );
};

export default Ratting;