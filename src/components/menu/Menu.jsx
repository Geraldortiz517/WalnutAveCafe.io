import { react} from 'react';
import "./menu.css";
import { menu } from '../../Data';
import webmenu from "../../assets/webmenu.pdf"
const Menu = () => {
 return(

<section className="menu section" id="menu">
    <h2 className="section__title" data-title="Menu">
       Let's Check Our Cafe Favorites
        </h2>


 <div className="menu__grid container grid">
        {menu.map(({img, title, description, price}, index) =>
        {
            return(
            
                <div className="menu__item grid" key={index}>
                <div className="menu__img-wrapper">
                    <img src={img}  alt="" className="menu__img" />
                </div>
                <div className="menu__data">
                    <div>
                        <h3 className="menu__title">{title}</h3>
                        <p className="menu__description">{description}</p>
                    </div>
                    <span className="menu__price">${price}</span>
                </div>
                </div>
        
           
                 );})}

</div>
<a href={webmenu} className="btn"  id='bt3'>Check Full Menu</a>
</section>
        
        )  }
        
export default Menu