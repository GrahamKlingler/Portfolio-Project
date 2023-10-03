import { React, useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";

function Gallery(props) {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    } 

    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt="fullscreen"/>
            <CloseIcon onClick={() => setModel(false)}/>
        </div>
        <div className='gallery'>
            {props.images.map((img, index) => {
                return (
                    <div className='img' key={index} onClick={() => getImg(img)}>
                        <img key={index} src={img} loading="lazy" style={{width: "100%"}} alt={`${props.pathname}-${index}`}/>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Gallery;