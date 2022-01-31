import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function AsyncImage({ src, alt, style, width, height }) {
    const [img, setImg] = useState();

    const fetchImage = async() => {
        const res = await fetch(src);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    let imageStyle = {}
    let imageAlt = (alt ? alt : 'Image')
    if (style) {
        imageStyle = style;
    }
    if (width) {
        imageStyle.width = width;
        if (height) {
            imageStyle.height = height;
        }
    } else if (height) {
        imageStyle.height = height;
    }

    useEffect(() => {
        fetchImage();
    }, []);
    if (img) {
        return ( <img src = { img }
            style = { imageStyle }
            alt = { imageAlt }/>
        )
    }
    return ( <
        Spinner / >
    )
}

export default AsyncImage;