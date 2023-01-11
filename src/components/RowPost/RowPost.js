import axios from '../../axios'
import YouTube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import {imageUrl, API_KEY } from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  
  const [urlId,setUrlId] = useState('')
  
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      if (response.data.results.backdrop_path!=='') {
        setMovies(response.data.results)
        }else{
          console.log('Arry empty');
        }
      
    }).catch((error)=>{
      // alert('Network Error') 
    })
  
  }, [])




  console.log(movies);
  

  const opts = { 
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  <div className='back'>
      
    <button>Back</button>
    </div>

  

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results.length!==0) {
        setUrlId(response.data.results[0])
        }else{
          console.log('Arry empty');
        }

        
      
    })


  } 


 
  
  return (
    
    <div className='row'>
        <h2>
            {props.title}
        </h2>
        <div className='posters'>
          
          {movies.map((obj)=>
          

            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={ `${imageUrl+obj.backdrop_path}` } alt='poster' /> 
             
          )}
            
            

        </div>

        

      {urlId && 

      <div>
        <button onClick={()=>setUrlId("")}>Back</button>
      <YouTube opts={opts} videoId={urlId.key} />  
      </div>  
      }

 
    </div>
  )

          
}

export default RowPost