import React from "react";

export default function NewsNav(){
    const array = [
        {
            text : 'اخبار مراکز آموزشی'
        },
        {
            text : 'اخبار آزمون ها'
        },
        {
            text : 'اخبار داخلی'
        },
        {
            text : 'سایر اخبار '
        }
    ]
    return (
        <ul className="news_ul">
        {
            array.map((item)=>{
                return (
                    <li><a href="" className="news_a">{item.text}</a></li>
                )
           
           })
        }   
        </ul>
    )  
}


              