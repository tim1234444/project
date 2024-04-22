import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function App() {
  window.onload = function() {
   var swiper = new Swiper('#right', {
    
    modules: [Navigation],
    loop: false,
    effect: 'fade', 
    speed: 500, // Скорость переключения слайдов (в миллисекундах)
  autoplay: {
    delay: 5000, // Задержка между автоматическим переключением слайдов (в миллисекундах)
  },
    
   
 
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 20,
   
    navigation: {
      prevEl: '.prev',
      nextEl: '.next'
    }});
    swiper.on('slideChange', function () {
        if(this.activeIndex === 2) {
            showMessage();
      // Закрытие сообщения через 3 секунды
      setTimeout(closeMessage, 3000);
        }
    });
    function showMessage() {
        var messageContainer = document.getElementById("message-container");
        messageContainer.classList.add("show");
      }
      
      // Функция для закрытия сообщения
      function closeMessage() {
        var messageContainer = document.getElementById("message-container");
        messageContainer.classList.remove("show");
      }
      
      
        
      
      
      // Привязка функции closeMessage к кнопке закрытия
      document.getElementById("close-button").addEventListener("click", closeMessage);
      }
    
    

  
  

  return (
    <>
      <div className="container">
        <section className="hero">
            <div className="hero__left left">
                <div className="left__container">
                    <img src="public\img\main_foto.jpg" alt="" className="left__img"/>
                    <div className="left__start">
                        
                        <h1 className="left__title">Vladochka</h1>
                        <a href="" className="left__instagram-link">@vlad_o_chka</a>
                    </div>
                    
                    <div className="left__state">
                        <p className="left__avaliable">
                            Available now
                        </p>
                        <p className="left__reasponds">
                            Responds in 2 minute
                        </p>
                        <p className="left__geo">
                            Frankfurt am Main, Germany
                        </p>
                    </div>
                    <div className="left__description">
                        <p>I’m staying in frankfurt am main from 15&nbsp;to&nbsp;apr&nbsp;21&nbsp;😍</p>
                        <p>Instagram subscribers only: send me a&nbsp;❤️️&nbsp;in&nbsp;my&nbsp;DMS </p>
                    </div>
                    <a href="" className="link left__link">
                        Subscrible&nbsp;my&nbsp;now&nbsp;Onlyfans
                    </a>
                    <div className="left__time">
                        <span>70% OFF</span> ends in 0h 31m 43s
                    </div>
                </div>
            </div>
            <div className="hero__right" >
                <div className="swiper " id="right">
               
                    <div className="swiper-wrapper" id="slider">
                    
                    
                    <div className="swiper-slide" >
                        <div className="swiper__bg">
                            <img src="public\img\foto1.jpg" alt="" />
                        </div>
                        <img src="public\img\foto1.jpg" alt="" className="swiper-img"/>
                    </div>
                    <div className="swiper-slide" >
                        <div className="swiper__bg">
                        <img src="public\img\foto2.jpg" alt="" />
                        </div>
                        <img src="public\img\foto2.jpg" alt="" className="swiper-img"/>
                    </div>
                    <div className="swiper-slide" >
                        <div className="swiper__bg">
                        <img src="public\img\foto3.jpg" alt="" />
                        </div>
                        <img src="public\img\foto3.jpg" alt="" className="swiper-img"/>
                        <div id="message-container">
                            <a href="">
                            <img src="public\img\massage-foto.jpg" alt="Your Photo"/>
                            <div className='massage-text'>Товарищи! укрепление и развитие структуры требуют определения и уточнения модели развития</div>
                            <button id="close-button">
                                <img src="public\img\Close.svg" alt="" />
                            </button>
                            </a>
                            </div>
                        </div>
                    <div className="swiper-slide">
                        <div className="swiper__bg">
                        <img src="public\img\foto4.jpg" alt="" />
                        </div>
                        <img src="public\img\foto4.jpg" alt="" className="swiper-img"/>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper__bg">
                        <img src="public\img\foto5.jpg" alt="" />
                        </div>
                        <img src="public\img\foto5.jpg" alt="" className="swiper-img"/>
                    </div>
                    <div className="swiper-slide">
                    <div className="swiper__bg">
                        <img src="public\gif\tenor 1.gif" alt="" />
                        </div>
                        <img src="public\gif\tenor 1.gif" alt="" className="swiper-img" id='end-slide'/>
                        <div className="swiper-join__container">
                            <h2 className="swiper-join__p">
                                 Подписывайся на меня, самые&nbsp;горячие&nbsp;видео&nbsp;в&nbsp;ЛС!
                            </h2>
                            <a href="" className="link swiper-join__link ">
                                Onlyfans
                            </a>


                        </div>
                    </div>
                    
                    
                    </div>
                    <div className="swiper__navigation">
                            
                        
                            <div className="actions">
                            
                            <div className="prev"></div>
                            <div className="next"></div>
                    
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default App
