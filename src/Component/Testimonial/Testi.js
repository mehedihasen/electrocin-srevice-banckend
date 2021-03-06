import React, { useEffect, useState } from 'react';
import "./Testi.css"

const Testi = () => {
    const [Usercommint, setUsercommint] = useState([])
    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setUsercommint(data))
    }, [])
    return (
        <div className ="continer row">
            <h1 style={{textAlign : "center"}}>Testimonial</h1>
            {
                Usercommint.map(com => 
               
                    <div className="card col-md-3 sty">
                        <img src={com.photo} alt=""/>
                        <h4>{com.comment}</h4>
                        <h2>{com.name}</h2>
                    </div>

               )
            }
        </div>
    );
};

export default Testi;