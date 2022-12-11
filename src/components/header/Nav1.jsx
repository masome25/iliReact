
import React from "react";


export default function Nav1(){
    const array =[
        {
         classIcon : 'fa-solid fa-lock-open',
         text : ' ورود همکاران|',
         inputTag : '',
         plussIcon : ''
        },
        {
         classIcon : 'fa-sharp fa-solid fa-phone',
         text : '',
         inputTag :  <input type="search" placeholder="جستجو..." />,
         plussIcon : ''
        },
        {
         classIcon : 'fa-solid fa-magnifying-glass',
         text : '021-91070008 ',
         inputTag : '',
         plussIcon : ''
        },
        {
         classIcon : 'fa-solid fa-earth-americas',
         text : 'انتخاب زبان',
         inputTag : '',
         plussIcon : <i className="fa-solid fa-caret-down"></i>
        }
 ]
    return (
        
        <ul className="nav1_Links">
       {
        array.map((item)=>{
            return(
                <li><a href="" className="Links_4 input"> {item.inputTag}
             <i className={item.classIcon}></i> {item.text}{item.plussIcon}
             </a></li>
            )   
        })
       } 
    </ul>
    )
}