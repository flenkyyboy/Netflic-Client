import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../constants/constants'
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function Bannner() {
    const [state, setState] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
            setState(res.data.results[getRndInteger(0,res.data.results.length)])
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${state ? imgUrl + state.backdrop_path : ''})` }} className="banner">
            <div className="content">
                <h1 className="title">{state ? state.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>

                </div>
                <h1 className="description">{state ? state.overview : ""}</h1>
            </div>
            <div className="fade_buttom">

            </div>
        </div>
    )
}

export default Bannner
