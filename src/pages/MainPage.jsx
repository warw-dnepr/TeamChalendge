import '../css/mainPage.less'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Reviews from './Reviews';
import { carusel, responsive } from './responsive';

export default function MainPage(){
  const reviews= carusel.map(item=>(<Reviews key={item.id} 
   img_prod_url={item.img_prod_url} 
   prod_name={item.prod_name} 
   prod_discription={item.prod_discription}
   price_old={item.price_old}
   price_discont={item.price_discont}
   price_prod={item.price_prod}
   name_of_review={item.name_of_review}
   stars_from_review={item.stars_from_review}
   text_review={item.text_review}
   date_review={item.date_review}
   img_traider_url={item.img_traider_url}
   name_traider={item.name_traider}
   stars_traider={item.stars_traider}
   qty_reviews={item.qty_reviews}
   />))

   return (
      <>
      <div className='main-page'>
         <div className="main-page-baner">
            <img src="" alt="" />
            baner
         </div>
         <header>
            <div className="head-main">
               <div className="head-up">
                  <div className="head-logo">LOGO</div>
                  <div className="head-li">
                     <ul>
                        <li>Про нас</li>
                        <li>Оплата</li>
                        <li>Доставка</li>
                        <li>Відстежити замовлення</li>
                        <li>FAQ</li>
                     </ul>
                  </div>
                  <div className="head-btn">Контакти</div>
               </div>
               <div className="head-down-wrap">
               <div className="head-down">
                  <div className="head-catalog-click"><i className="fa fa-bars" aria-hidden="true"></i><span>Каталог товарів</span></div>
                  <div className="head-input"><input type="text" placeholder='Пошук товарів...'/><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 16.5L11.5001 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z" stroke="#888F97" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                  <div className="head-icons">
                     <div className="head-icon-heart"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9932 3.13581C8.9938 0.7984 5.65975 0.169643 3.15469 2.31001C0.649644 4.45038 0.296968 8.02898 2.2642 10.5604C3.89982 12.6651 8.84977 17.1041 10.4721 18.5408C10.6536 18.7016 10.7444 18.7819 10.8502 18.8135C10.9426 18.8411 11.0437 18.8411 11.1361 18.8135C11.2419 18.7819 11.3327 18.7016 11.5142 18.5408C13.1365 17.1041 18.0865 12.6651 19.7221 10.5604C21.6893 8.02898 21.3797 4.42787 18.8316 2.31001C16.2835 0.192157 12.9925 0.7984 10.9932 3.13581Z" stroke="#404345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className="head-icon-cart"><span className='cart-qty'>0</span><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9996 6C14.9996 7.06087 14.5782 8.07828 13.828 8.82843C13.0779 9.57857 12.0605 10 10.9996 10C9.93872 10 8.92131 9.57857 8.17116 8.82843C7.42102 8.07828 6.99959 7.06087 6.99959 6M2.63281 5.40138L1.93281 13.8014C1.78243 15.6059 1.70724 16.5082 2.01227 17.2042C2.28027 17.8157 2.74462 18.3204 3.33177 18.6382C4.00006 19 4.90545 19 6.71623 19H15.283C17.0937 19 17.9991 19 18.6674 18.6382C19.2546 18.3204 19.7189 17.8157 19.9869 17.2042C20.2919 16.5082 20.2167 15.6059 20.0664 13.8014L19.3664 5.40138C19.237 3.84875 19.1723 3.07243 18.8285 2.48486C18.5257 1.96744 18.0748 1.5526 17.5341 1.29385C16.92 1 16.141 1 14.583 1L7.41623 1C5.85821 1 5.07921 1 4.4651 1.29384C3.92433 1.5526 3.47349 1.96744 3.17071 2.48486C2.82689 3.07243 2.76219 3.84875 2.63281 5.40138Z" stroke="#404345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className="head-icon-login"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 18C3.33579 15.5226 6.50702 14 10 14C13.493 14 16.6642 15.5226 19 18M14.5 5.5C14.5 7.98528 12.4853 10 10 10C7.51472 10 5.5 7.98528 5.5 5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5Z" stroke="#404345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                  </div>
               </div>
               </div>

            </div>
         </header>
         {/* main */}
         <main>


         </main>
         {/* end main */}
         
         {/* reviews  */}
         <section>
            <div className="reviews-main">
               <h2>Останні відгуки</h2>
               <Carousel infinite={true} swipeable={true} responsive={responsive}>
                  {reviews}
              </Carousel>
            </div>
         </section>
                  {/* reviews  end*/}

      </div>
      </>
   )
}