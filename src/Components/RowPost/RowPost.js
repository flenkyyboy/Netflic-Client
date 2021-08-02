import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import { API_KEY, imgUrl } from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
    const [post, setPost] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.urls).then((res) => {
            setPost(res.data.results)
        })
    }, [props.urls])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {

            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if(response.data.results.length===0){
                alert('No videos')
            }else{
                setUrlId(response.data.results[0].id)
                console.log(response.data.results[0].id);
            }
        }).catch((error)=>{
            alert('No videos')
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    post.map((movie) => {
                        return (
                            movie.backdrop_path ? <img key={movie.id} onClick={(() => handleMovie(movie.id))} className={`${props.isSmall ? 'smallPoster' : 'poster'}`} src={`${imgUrl + movie.backdrop_path}`} alt="posters" /> : null
                        )
                    })
                }


            </div>
            {
                urlId?<Youtube opts={opts} videoId={urlId}></Youtube>:null
            }
        </div>
    )
}

export default RowPost
