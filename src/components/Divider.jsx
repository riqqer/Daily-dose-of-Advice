
import React, { useEffect, useState } from "react";
import desktopSize from "./../assets/pattern-divider-desktop.svg";
import mobileSize from "./../assets/pattern-divider-mobile.svg";



function Divider(){
    const [imageLink, setImageLink] = useState('');

    useEffect(() =>{
        getDivider()
    },[])

    window.onresize = function(event) {
        getDivider()
    };

    const getDivider = () => {
        if(window.innerWidth < 600){
            setImageLink(mobileSize);
        }else{
            setImageLink(desktopSize);
        }
    }


    return (
        <>
            <img src={imageLink} alt="" className="divider" />
        </>
    )
}


export default Divider;