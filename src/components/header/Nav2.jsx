import React from "react";

export default function Nav2(){
    const array=[
        {
            icon : 'fa-solid fa-house-chimney'
        },
        {
            icon : 'fa-solid fa-caret-down',
            text : 'خدمات آموزشی'
        },
        {
            text :  'محصولات'
        },
        {
            icon : 'fa-solid fa-caret-down',
            text : 'همکاری با ما'
        },
        {
            icon : 'fa-solid fa-caret-down',
            text : 'راهنما'
        },
        {
            icon : 'fa-solid fa-caret-down',
            text : 'تماس با ما '
        },
        {
            text :  'درباره ما '
        },
        {
            icon : 'fa-solid fa-caret-down',
            text : 'دانلود  '
        },  
        {
            icon : 'fa-solid fa-caret-down',
            text : ' کارمندان و مدرسان   '
        }
    ]
    return (
        <ul className="nav2_Links">
        {
            array.map((item)=>{
                return(
                    <li>
                    <a href="" className="Links"> {item.text}<i className={item.icon}></i>
                    </a></li>
                    )   
            })
        }   
    </ul>
    )
}