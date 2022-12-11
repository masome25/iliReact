import React from "react";


export default function Attachment(){
    const array = [
        {
            src : './src/assets/images/دوره-تربیت-حرفه-ای-مدرس-TTC (1).jpg'
        },
        {
            src : './src/assets/images/دوره-مکالمه-ویژه.jpg'
        },
        {
            src : './src/assets/images/آموزش-زبان-با-اهداف-ویژه.jpg'
        }
    ]
    return (
        <>
            {
                array.map((item)=>{
                    return(
                        <img src={item.src} />
                    )
                  
       
                })
            }
        </>
    )
}