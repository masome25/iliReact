import React from "react";

export default function BgGreen(){
    const array = [
        {
            src : './src/assets/images/3320_orig.png',
            text :  '۱،۲۰۰،۰۰۰ هزار زبان آموز'
        },
        {
            src : './src/assets/images/3321_orig.png',
            text :  ' آموزش ۹ زبان زنده دنیا'
           
        },
        {
            src : './src/assets/images/3322_orig.png',
            text : 'حضور در ۳۱ استان',
        }
    ]
    return (
        <ul className="section_bgGreen_ul">
        {
            array.map((item)=>{
                return (
                    <li className="section_bgGreen_li">
                <img src={item.src} />
                <div className="section_bgGreen_text">
                     <span>{item.text}</span><br/>
                     <span>مفتخر به بیان آن هستیم</span>
                </div>
            </li>
                )
              
            })
           
        }
        </ul> 
    )
}

