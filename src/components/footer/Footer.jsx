import Contact from "./Contact";
import Guider from "./Guider";
import End from "./End";
import Persenal from "./Persenal";

export default function Footer(){
    return (
        
    <footer>
    <div className="footerTop">
        <div className="footerTop_columns">
            <span>درباره ما</span>
            <p>کانون زبان ایران به عنوان معتبرترین، قدیمی‌ترین و بزرگترین مؤسسه‌ آموزش زبان‌های خارجی در ایران از سال 1304 تحت عنوان انجمن ایران و آمریکا در تهران شروع به فعالیت کرده است. ادامه...</p>
        </div>
        <div className="footerTop_columns"><span>تماس با ما</span><Contact /></div>
        <div className="footerTop_columns"><span>راهنما</span><Guider /></div>
        <div className="footerTop_columns"><span>کارمندان و مدرسان</span><Persenal /></div>
        <div className="footerTop_columns"><img src="./src/assets/images/logoenamad.png"/></div>
    </div>
    <div className="footerBottom">
    <p>کلیه حقوق این وب سایت متعلق به کانون زبان ایران می باشد.</p>
       <End /></div>
</footer>

    )
}