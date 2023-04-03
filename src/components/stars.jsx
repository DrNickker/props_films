import React from "react"
import PropTypes from "react"
import Star from "./star"

export default function Stars({count}) {


    
    let bool = true
    if (!Number.isInteger (count) || count > 5 || count < 1) {
        bool = false
    }
    const arr = Array.from({ length: count }, (v, k) => k)
    return (
        bool && (
        <ul className='card-body-stars'>
            {arr.map((li, id) => <li key={id}>{<Star />}</li>)}
        </ul>)
    )
}

Stars.propTypes = {
    count: PropTypes.number,
};
