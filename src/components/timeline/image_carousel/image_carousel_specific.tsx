import React, { useEffect, useState } from 'react';
import "./image_carousel.sass";
import axios from 'axios';
import {ImageCarouselSpecificProps} from "../../../declarations";

function ImageCarouselSpecific(props: ImageCarouselSpecificProps): JSX.Element {

    async function getThumbnail(eachIndex: number): Promise<any> {
        await axios({
            method: 'GET', 
            url: props.backendURL + "image?img=" + props.images[eachIndex] + "&uuid=" + props.getCookie("uuid"),
            responseType: 'blob'
        })
        .then((res) => {
            console.log(res, res.data, res.status)
            if (res.data !== 404 && res.data !== 403 && res.status === 200) {
                const imageBlob = new File([res.data], ""); 
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setThisThumbnail((prevThumbnail: any): any => {
                    prevThumbnail[eachIndex] = imageObjectURL;
                    return prevThumbnail;
                });
                updateImageContent();
            } else {
                setThisThumbnail((prevThumbnail: any): any => {
                    prevThumbnail[eachIndex] = PlaceholderImage;
                    return prevThumbnail;
                });
                updateImageContent();
            };
        })
        .catch((error) => {
            setThisThumbnail((prevThumbnail: any): any => {
                prevThumbnail[eachIndex] = PlaceholderImage;
                return prevThumbnail;
            });
        });
    };

    return(
        <div className="carouselImagesDirectWrapper flex-row flex-jc-center">
            <img src={props.thisImage} alt="carousel content" className="carouselImages"></img>
        </div>
    )
}

export default ImageCarouselSpecific;