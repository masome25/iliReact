import React from "react";


const array = [
    {
        text : ': طراح سایت'
    },
    {
        text : ' رادکام'
    },
    {
        text : 'radcam'
        
    },
    {
        text : ''
    }
]
export default function End(){
    return (
        <div className="footerBottom_links">
        {
            array.map((item)=>{
                return (
                    <a href=""> {item.text}</a>
                )
              
            })
        }
        </div>
    )
}
