import React from "react";

export default function IconPack(props){
    return (
      <>
           {
            props.array.map((item)=>{
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
 
        </>
) 
 }




