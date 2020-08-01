import React, { useContext } from "react";
import { GymContext } from "../../../contexts/gymContext";
import { Redirect } from "react-router-dom";
import styles from "./index.module.css"
function Details(props) {
  const { Gyms } = useContext(GymContext);
  const GymId = props.match.params.id;
  const gym = Gyms ? Gyms.find((gym) => gym._id === GymId) : {};
  
  console.log(Gyms);
  if (!GymId) {
    return <Redirect to="/" />;
  } else if (gym) {
    const {name, location, phonenumber,openings,ratings} = gym
    return (
    
      <>
      <section className={styles.header_details}>
      <div className={styles.info}>
          <div className={styles.info_wrapper}>
   
          <div className={styles.overview}>
           <div>
               <img  className={styles.logo} src="/images/gymicon.png" alt="gymlogo" /> 
           </div>
            <div className={styles.brief}>
                <h1 className={styles.name} >{name && name}</h1>
    <p>{Array.from(ratings)}--- 200 review</p>
                <p><i className="fa fa-gmap-marker-alt"></i>{location}</p>
            </div>
          </div>
         <div className={styles.action}>
             <a className={`${styles.btn} ${styles.btn_book}`} href="/booking">Book Us</a>
             <a className={`${styles.btn} ${styles.btn_share}`} href="/gym/share"><i className="fa fa-share"></i>  Share</a>
         </div>
       </div>
      </div>   
  </section>
<section className={styles.main}>

  <div className={styles.content}>
      <div className={`${styles.contact} shadow`}>
          <div className={styles.map}>
           map
          </div>
          <div className={styles.details}>
              <h2 className={styles.title_bar}>
                 Contacts
              </h2>
              <p><i className="fa fa-map-marker-alt"></i> N0 15 ADENUGA STREET</p>
              <p><i className="fa fa-phone"></i>+2347014239218</p>
              <div className={styles.social}>
                  <span>
                   <i className="fab fa-facebook"></i>
                  </span>
                  <span>
                   <i className="fab fa-twitter"></i>
                  </span>
                  <span>
                   <i className="fab fa-instagram"></i>
                  </span>
                  <span>
                   <i className="fab fa-google"></i>
                  </span>
              </div>
          </div>
      </div>
      <div className={`${styles.about} shadow`}>
          <div className={styles.details_text}>
              <h2 className={styles.title_bar}>About us</h2>
             <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quo debitis 
              voluptate sunt veritatis cupiditate. Ipsam saepe consequuntur vo
              luptas quis odio. Expedita deleniti ipsa, a explicabo temporibus optio ipsum. Fuga!</p>
              <a className={styles.btn} href="gym/test/booking">Book Us now</a>
          </div>
          <div className={styles.facilities}>
           <h2 className={styles.title_bar}>Our Facilities</h2>
          </div>
      </div>
      <div className="gallery"></div>
      <div className="review"></div>
  </div>
  <div className={styles.sidebar}>
      <div className={`${styles.membership} shadow`}>
          <div className={styles.memb_title}>
              <h2>membership</h2>
              <p><i className="fa fa-arrow-down"></i></p>
          </div>
          <div className={styles.plan}>
           <a className={`${styles.btn} ${styles.btn_active}` } href="/book">BOOK</a>
              <div>
                <h2 className={styles.type}>1 workout</h2>
                <small>1 workout per session</small>
                <p className={styles.price}><span>$50</span></p>
              </div>
              
          </div>
          <div className={styles.plan}>
          <a className={`${styles.btn} ${styles.btn_rest}`} href="/test/buy">BUY</a>
              <div>
                <h2  className={styles.type}>1 wmonth</h2>
                <p className={styles.price}><del>$50</del> <span>$30</span></p>
              </div>
              
          </div>
          <div  className={styles.plan}>
          <a className={`${styles.btn} ${styles.btn_rest}`} href="/test/buy">BUY</a>
              <div>
                <h2 className={styles.type}>3 wmonth</h2>
                <p  className={styles.price}><del>$90</del> <span>$70</span></p>
              </div>
              
          </div>
          <div className={styles.plan}>
          <a className={`${styles.btn} ${styles.btn_rest}`} href="/test/buy">BUY</a>
              <div>
                <h2  className={styles.type}>6 wmonth</h2>
                <p className={styles.price}><del>$200</del> <span>$90</span></p>
              </div>
              
          </div>
      </div>
  </div>

</section>
</>
);
  } else {
    return (
      <div classNameNameName="title">
        <h2>"404 gym not found</h2>
      </div>
    );
  }
}

export default Details;
