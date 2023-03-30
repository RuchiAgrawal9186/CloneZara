import React from 'react'
import styles from "./Home.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };


  var setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <div>

     <div className={styles.carousel}>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          <div className={styles.box}>
            {/* <h3>1</h3> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIumjTLwS1ZJQq0XIPKONhjSzGfWePNLXJ2-X56O36A&usqp=CAU&ec=48665699" alt="1" /> 
          </div>
          <div className={styles.box}>
          {/* <h3>1</h3> */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq0LOHwI7wJ8lnxIS3EtaKTmvwf_U4D1AOudwZD19sQ&usqp=CAU&ec=48665699" alt="2" />
          </div>
          <div className={styles.box}>
          {/* <h3>1</h3> */}
          <img src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/2023_2WK3_YW_HARDGOODS_LP_1675883614071.jpg?wid=1074&scl=1" alt="2" />
          </div>
          <div className={styles.box}>
          {/* <h3>1</h3> */}
          <img src="https://images-static.nykaa.com/uploads/722e2d8c-476e-4993-be69-a505143ceca2.jpg?tr=w-1200,cm-pad_resize" alt="2" />
          </div>
          <div className={styles.box}>
          {/* <h3>1</h3> */}
          <img src="https://images-static.nykaa.com/uploads/a908e8ad-3bd3-4d87-bca2-2fca7c54bf98.jpg?tr=w-1200,cm-pad_resize" alt="2" />
          </div>
        </Slider>
      </div>
   
      <div className={styles.div_category}>
        <div>
        <img src="https://rukminim1.flixcart.com/image/612/612/knrsjgw0/t-shirt/w/q/0/l-2115-the-dry-state-original-imag2djmgambgwhj.jpeg?q=70" alt="man img"></img>
        <p>Men</p>
        </div>
      
        <div>
        <img src="https://rukminim1.flixcart.com/image/612/612/kqpj4i80/dress/y/y/3/xl-lucy-051-purvaja-original-imag4nzkm5s9qns8.jpeg?q=70" alt="woman img"></img>
        <p>Women</p>
        </div>
        <div>
       <img src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/2022_9WK3_YW_FEATURED_SHOPS_Special_occasion_1664307196635.jpg" alt="kids img"></img>
       <p>Kids</p>
       </div>
       <div>
       <img src="https://rukminim1.flixcart.com/image/612/612/jwzabgw0/combo-kit/f/g/d/women-s-makeup-vanity-kit-of-all-the-beauty-products-mka29-otis-original-imafhdfn3utwfkpd.jpeg?q=70" alt="beauty img"></img>
       <p>Beauty</p>
       </div>
      </div>
      
      
      <div className={styles.carousel1}>
      <h2 className={styles.h2}>WOMEN</h2>
        <Slider {...setting}>
          <div className={styles.box1}>
            {/* <h3>1</h3> */}
            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/top/6/u/m/xxl-shinched-thundercreation-original-imaggst8khew8kw2.jpeg?q=70" alt="1" />
          </div>
          <div className={styles.box1}>
            <img src="https://rukminim1.flixcart.com/image/612/612/k2tc1ow0pkrrdj/top/m/6/d/m-t574-the-style-story-original-imafkhjsdsncghkz.jpeg?q=70" alt="2" />
            {/* <h3>2</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://static.zara.net/photos///2022/I/0/1/p/0387/195/611/2/w/281/0387195611_1_1_1.jpg?ts=1668527092971" alt="3" />
            {/* <h3>3</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://static.zara.net/photos///2022/I/0/1/p/9246/864/800/2/w/281/9246864800_1_1_1.jpg?ts=1666959137003" alt="4" />
            {/* <h3>4</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/i/9/b/free-mirchi-combo-palazzo-presha-original-imaghvmtg4vfuhfq.jpeg?q=70" alt="5" />
            {/* <h3>5</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://rukminim1.flixcart.com/image/612/612/kyoqmq80/salwar/l/b/c/xs-139sjdht-fab-queens-original-imagav95u53suzbn.jpeg?q=70" alt="6" />
            {/* <h3>6</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://rukminim1.flixcart.com/image/612/612/l4rd0280/jean/v/9/w/34-gtladiesjeans100-guti-original-imagfkygvexvfzmw.jpeg?q=70" alt="7" />
            {/* <h3>7</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/v/p/6/m-sys-4001-funday-fashion-original-imafvynfzrutn2s2-bb.jpeg?q=70" alt="8" />
            {/* <h3>8</h3> */}
          </div>
        </Slider>
      </div>

      
      <div className={styles.carousel1}>
      <h2 className={styles.h2}>MEN</h2>
        <Slider {...setting}>
          <div className={styles.box1}>
            {/* <h3>1</h3> */}
            <img src="https://static.zara.net/photos///2022/I/0/1/p/7545/405/400/2/w/281/7545405400_2_1_1.jpg?ts=1661256151300" alt="1" />
          </div>
          <div className={styles.box1}>
            <img src="https://static.zara.net/photos///2023/V/0/2/p/4100/264/084/2/w/281/4100264084_1_1_1.jpg?ts=1669367924422" alt="2" />
            {/* <h3>2</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://static.zara.net/photos///2023/V/0/2/p/7545/191/800/2/w/281/7545191800_1_1_1.jpg?ts=1669720586657" alt="3" />
            {/* <h3>3</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://static.zara.net/photos///2022/I/0/2/p/0399/014/623/2/w/281/0399014623_1_1_1.jpg?ts=1658845522737" alt="4" />
            {/* <h3>4</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://m.media-amazon.com/images/I/61KeCcAj81L._AC_UL320_.jpg" alt="5" />
            {/* <h3>5</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://m.media-amazon.com/images/I/51zUzJpOR3L._AC_UL320_.jpg" alt="6" />
            {/* <h3>6</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://m.media-amazon.com/images/I/81Jt5IzgmcL._AC_UL320_.jpg" alt="7" />
            {/* <h3>7</h3> */}
          </div>
          <div className={styles.box1}>
            <img src="https://m.media-amazon.com/images/I/71gPFl7U--L._AC_UL320_.jpg" alt="8" />
            {/* <h3>8</h3> */}
          </div>
        </Slider>
      </div>


       

     
    </div>
  )
}

export default Home
