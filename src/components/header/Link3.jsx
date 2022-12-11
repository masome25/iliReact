import React from "react";

export default function Link3(){
    const array = [
        {
            src : './src/assets/images/سامانه-جامع.png',
            text : <p>سامانه جامع</p>
        },
        {
            src : './src/assets/images/ثبت-نام-br-کلاس-های-زبان.png',
            text : <p>ثبت نام<br/> کلاس های زبان</p>
        },
        {
            src : './src/assets/images/آزمون-ها-و-گواهینامه-ها.png',
            text : <p>آزمون ها و گواهینامه ها</p>
        }
    ]
    return (
        <ul className="links_list">
           {
            array.map((item)=>{
                return(
                    <li className="links_ul_3">
                    <a className="links_3" >
                   <img src={item.src}/>
                    {item.text}
                   </a>
                   </li> 
                )
            })
           }
 
        </ul>
) 
 }




