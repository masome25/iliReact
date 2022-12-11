import React from "react";


export default function Links(){
const array = [
    {
        src : './src/assets/images/ارسال-مشکلات.png',
        text1 : 'ارسال مشکلات',
        text2 : 'مشکلات خود را با پر کردن فرم مربوطه برای ما ارسال کنید'
    },
    {
        src : './src/assets/images/وبلاگ-ها.png',
        text1 : 'گالری',
        text2 : 'گالری تصاویر، ویدیو و فایل های صوتی نشریات کمک آموزشی'
    },
    {
        src : './src/assets/images/گالری.png',
        text1 : 'وبلاگ ها',
        text2 : 'وبلاگ های تمام مراکز آموزشی در استان های کشور را مشاهده کنید'
    },
    {
        src : './src/assets/images/اطلاعات-مراکز.png',
        text1 : 'اطلاعات مرکز',
        text2 : 'نمایش اطلاعات مرکز آموزشی مورد نظر شما'
    },
    {
        src : './src/assets/images/پیوندها.png',
        text1 : 'پیوندها',
        text2 : ' لینک وبسایت ها مرتبط'
    },
    {
        src : './src/assets/images/شبکه-های-اجتماعی.png',
        text1 : 'شبکه های اجتماعی ',
        text2 : ' شبکه های اجتماعی کانون زبان ایران'
    }
]
    return (
        <ul className="section_links_ul">
        {
            array.map((item)=>{
                return (
                    <li>
                 <a href="" className="section_links_a">
                   <img src={item.src} /><span>{item.text1}</span><br/><span>{item.text2}</span>
                 </a>
                </li>
                )
              
            })
        }
        </ul>
    )
}




