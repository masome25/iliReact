import React from "react";

export default function IconPack(props){
    
const array = [
    {
        src : './src/assets/images/کلاس-آفلاین.png',
        text :  <p>کلاس آفلاین</p>
    },
    {
        src : './src/assets/images/کلاس-آنلاین-بزرگسال-و-غیرانگلیسی.png',
        text :   <p>کلاس آنلاین بزرگسال و غیر انگلیسی</p>
    },
    {
        src : './src/assets/images/کلاس-آنلاین-کودکان-و-نوجوانان.png',
        text :  <p>کلاس آنلاین کودکان و نوجوانان</p>
    },
    {
        src : './src/assets/images/اطلاعات-مراکز-br-آموزش-زبان.png',
        text :  <p>اطلاعات مرکز <br/>آموزش زبان</p>
    },
    {
        src : './src/assets/images/استان-ها.png',
        text :   <p> استان ها</p>
    },
    {
        src : './src/assets/images/آزمون-های-آنلاین.png',
        text :   <p>آزمون ها ی آنلاین </p>
    },
    {
        src : './src/assets/images/تقویم-ترمی.png',
        text :    <p>تقویم ترمی</p>
    },
    {
        src : './src/assets/images/اخبار.png',
        text :   <p>اخبار</p>
    },
    {
        src : './src/assets/images/شبکه-های-اجتماعی.png',
        text :  <p>شبکه های اجتماعی</p>
    }
   
  ]
    return (
      <ul className="links_list-9">
           {
            array.map((item)=>{
                return(
                    <li>
                    <a className="links_9" >
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




