import Nav1 from "./Nav1";
import Nav2 from './Nav2';
import IconPack from './IconPack';
import Link3 from './Link3';
import Link9 from './Link9';








export default function Header(){
 return (
    <header>
     <div className="headerA">
            <div className="headerTop container">
                <div className="logo_ILI">
                    <img src="./src/assets/images/کانون-زبان-ایران.png"/>
                </div>
                <div className="information">
                    <div className="nav1"><Nav1 /></div>
                    <div className="nav2"><Nav2 /></div>
                </div> 
                <div className="logo_OLDAGE">
                    <img src="./src/assets/images/3357_orig.png"/>
                </div>
            </div>
        </div>
            <div className="headerB">
            <div className="headerBottom container">
                <div className="headerBottom_column1">
                    <div className="headerBottom_column1_text">
                        <span>کانون زبان ایران</span><br/>
                        <span>قدیمی‌ترین، معتبرترین و بزرگترین موسسه آموزش زبان در ایران</span>
                    </div>
                    <div className="headerBottom_column1_links">
                     <Link3 />
                    
                    </div>
                    </div>
                <div className="headerBottom_column2">
                 <Link9 />
              </div>
            </div>
        </div>
       
    </header>

 )
}


