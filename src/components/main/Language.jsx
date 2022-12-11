import React from "react";

export default function Language(){
    const array = [
        {
          text1 : 'En',
          text2 : 'آموزش زبان انگلیسی'
        },
        {
            text1 : 'De',
            text2 : ' آموزش زبان آلمانی'
          },
          {
            text1 : 'it',
            text2 : ' آموزش زبان ایتالیایی'
          },
          {
            text1 : 'Ru',
            text2 : ' آموزش زبان روسی'
          },
          {
            text1 : 'Fr',
            text2 : ' آموزش زبان فرانسه'
          },
          {
            text1 : 'Es',
            text2 : ' آموزش زبان اسپانیایی'
          },
          {
            text1 : 'Ar',
            text2 : ' آموزش زبان عربی'
          },
          {
            text1 : 'Zh',
            text2 : ' آموزش زبان چینی'
          },
          {
            text1 : 'Fa',
            text2 : ' آموزش زبان فارسی'
          }
    ]
    return (
        <ul className="language">
        { 
            array.map((item)=>{
              return (
            <li>
                <a href="" className="language_links">
                <div className="language_circle">{item.text1}</div>{item.text2}</a>
            </li>
              )
          })
          
        }
        </ul>
    )
}


         
             
                          
                            
                         
         