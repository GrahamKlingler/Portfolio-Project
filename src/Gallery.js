import React from 'react';

function Gallery(props) {
    return(
        <div className='gallery'>
            {props.images.map((img, index) => {
                return (
                    <div className='pics' key={index}>
                        <img key={index} src={img} loading="lazy" style={{width: "100%"}} alt={`${props.pathname}-${index}`}/>
                    </div>
                )
            })}
        </div>
    );
}

export default Gallery;