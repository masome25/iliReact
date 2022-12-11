import React from "react";

export default function Persenal(){
    const array = [
        {
            class : 'fa-solid fa-angle-left',
            text : ' سامانه متمرکز '
        },
        {
            class : 'fa-solid fa-angle-left',
            text : ' سامانه مدیران استان '
        },
        {
            class : 'fa-solid fa-angle-left',
            text : 'فیش حقوقی کارکنان '
        },
        {
            class : 'fa-solid fa-angle-left',
            text : 'سامانه کارشناسان و مدرسان '
        }
    ]
    return (
        <ul>
            {
                array.map((item)=>{
                    return(
                        <li><a href="">
                    <i className={item.class}></i><span>{item.text}</span>
                    </a></li>
                    )
                   
                })
            }
        </ul>
    )
}

