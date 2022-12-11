import React from "react";

export default function NewsContent(){
    const array = [
        {
            src : './src/assets/images/سخنرانی-مدیرعامل-کانون-پرورش-فکری-کودکان-و-نوجوانان.jpeg',
            text : 'سخنرانی مدیرعامل کانون پرورش فکری کودکان و نوجوانان'
        },
        {
            src : './src/assets/images/نماینده-رییس-کانون-زبان-ایران-در-دانشگاه-بیرجند-و-انجمن-تلسی-ایران-منصوب-شد.jpeg',
            text : 'نماینده رییس کانون زبان ایران در دانشگاه بیرجند و انجمن تلسی ایران منصوب شد'
        },
        {
            src : './src/assets/images/گزارش-تصویری-نشست-فصلی-مدیران-کانون-زبان-ایران-۲.jpg',
            text : ' گزارش تصویری نشست فصلی مدیران کانون زبان ایران (۲)'
        }
    ]
    return (
        <div className="news_content_column2">
        {
            array.map((item)=>{
                return (
                    <div className="news_column2">
                    <img src={item.src}/><a href="" className="news_column2_text">{item.text}</a>
                </div>
                )
               
            })
           
        }
        </div>
    )
}

  