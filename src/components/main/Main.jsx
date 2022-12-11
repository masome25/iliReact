import Attachment from "./Attachment";
import BgGreen from "./BgGreen";
import Language from "./language";
import Links from "./Links";
import NewsContent from "./NewsContent";
import NewsNav from "./NewsNav";

export default function Main(){
    return(
        <section>
        <div className="section_language"><Language /></div>
      <div className="section_news">
        <div className="news_nav">
            <div className="news"> اخبار ویژه</div>
            <div className="news_links"><NewsNav /></div>
        </div>
        <div className="news_content">
            <div className="news_content_column1">
                <img src="./src/assets/images/معاون-آموزشی-کانون-زبان-ایران-از-بخش-بازرگانی-و-فروش-کانون-بازدید-کرد.jpg" className="news_column1_img"/><br/>
                <a href="" className="news_column1_text">معاون آموزشی کانون زبان ایران از بخش بازرگانی و فروش کانون...</a>
            </div>
           <NewsContent />
        </div>
      </div>
      <div className="section_bgGreen"> <BgGreen /></div>
      <div className="bg_attachment"><Attachment /></div>
      <div className="section_links"><Links /></div>
    </section>

    )
}