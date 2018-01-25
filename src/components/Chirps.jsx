import React from 'react';

const Chirps = (props) => {
    let listChirps = props.chirps.map((chirps) => {
        return (
            <div>
                <div className="border border-success text-success w-75 mx-auto p-3 text-left mt-2 m-2">{chirps.text}</div>
            </div>
        )
    })
    return (
        <div>
            {listChirps}
        </div>
        )

};

export default Chirps;
