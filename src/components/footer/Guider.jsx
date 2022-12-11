import React from "react";


export default function Guider(){
 const array = [
    {
        class : 'fa-solid fa-angle-left',
        text : 'نقشه سایت '
    },
    {
        class : 'fa-solid fa-angle-left',
        text : 'دفترچه های راهنمای زبان آموزان '
    },
    {
        class : 'fa-solid fa-angle-left',
        text : ' ویدئوهای راهنمای کلاس‌های آنلاین '
    },
    {
        class : 'fa-solid fa-angle-left',
        text : 'مقررات انضباطی - آموزشی '
    },
    {
        class : 'fa-solid fa-angle-left',
        text : ' پرسش های متداول '
    }
 ]
    return (
        <ul>
            {
                array.map((item)=>{
                    return(
                        <li>
                <a href=""><i className={item.class}></i><span> {item.text}</span></a>
                </li>
                    )
              
                })
            }
        </ul>
    )
}
