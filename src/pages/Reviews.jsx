import '../css/mainPage.less'


export default function Reviews(props){

   return(
      <div className="review-card">
         <div className="review-head">
            <div className="review-img"><img src={props.img_prod_url} alt="" /></div>
            <div className="review-head-info">
               <h3>{props.prod_name}</h3>
               <p className="review-head-description">{props.prod_discription}</p>
              {props.price_old != null && <p className="old-price">{props.price_old} <span className="discont">-{props.price_discont}%</span></p>}
               <p className="review-head-info-price">{props.price_prod}₴</p>
            </div>
         </div>
         <div className="review-body">
            <h3>{props.name_of_review}</h3>
            <span>{props.stars_from_review}</span>
            <p className="review-body-text">{props.text_review}</p>
            <p className="review-body-data">{props.date_review}</p>
            <div className="review-body-traider">
               <div className="review-body-traider-img"><img src="" alt="" />{props.img_traider_url}</div>
               <h4 className="review-body-traider-info">{props.name_traider}</h4>
               <p><img src="" alt="" />{props.stars_traider}<span>({props.qty_reviews})</span></p>
                     
                     
                  
         
            </div>
         </div>
      </div>
   )
}