import React from "react";

export default function Contact(){
    const array = [
     {
        className : 'fa-solid fa-location-dot',
        text : ' نشانی: تهران- خیابان استاد مطهری - خیابان فجر - شماره ۳۳'
     },
     {
        className : 'fa-solid fa-phone',
        text : 'تلفن : ۴-۸۸۳۰۸۰۳۲-۰۲۱'
     },
     {
        className : 'fa-solid fa-fax',
        text : ' فکس :۸۸۳۲۲۰۳۴-۰۲۱'
     },
     {
        className : 'fa-solid fa-signs-post',
        text : ' صندوق پستی: 6368-14155'
     },
     {
        className : 'fa-solid fa-keyboard',
        text : 'کد پستی: 1589793413'
     }
    ]
    return(
        <ul>
            {
                array.map((item)=>{
                    return (
                        <li><i className={item.className}></i>{item.text}</li>
                    )
                  
                })
            }
        </ul>
    )
}

