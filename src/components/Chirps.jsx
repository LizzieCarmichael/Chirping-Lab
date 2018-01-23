import React from 'react';

const Chirps = (props) => {
    let listChirps = props.chirps.map((chirps) => {
        return (
            <div>
                <span>
                <div className="border border-success text-success w-75 mx-auto p-3 text-left mt-2">{chirps.text}</div>
                </span>
            </div>
        )
    })
    return (<div>{listChirps}</div>)

};

export default Chirps;




