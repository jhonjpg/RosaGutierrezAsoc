import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SliderReviews = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    speed: 9000,
                    autoplaySpeed: 1000,
                    slidesToScroll: 1
                }
            }
        ]
      };
  

    const immg = [
        
        { 
            
            fotos: [
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1200',
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
        'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200',
        "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1200",
        



    ],

          nombres:   ["pedro" , "luisa", "maria", "juana", "tom", "pablo","juan" , "mario ", "taisha", "dario", "tomy", "jaszmin"],



          resenas: ["Excelente servicio al cliente" , "El personal es muy amable y servicial.", "Los productos son de alta calidad.", "El ambiente es acogedor y agradable.", "El precio es razonable en comparación con otros lugares similares.", "La ubicación es conveniente y de fácil acceso.","Siempre hay promociones y descuentos disponibles." , "La comida es deliciosa y fresca.", "Los tiempos de espera son mínimos, incluso en horas pico.", "El lugar está muy bien decorado y diseñado.", "La rapidez y eficiencia del servicio son impresionantes.", "La variedad de opciones en el menú es genial, siempre hay algo nuevo por probar."]
          

        }


    ]

   

  return (

<>


<ul  className="reviewSlide">

        <Slider {...settings}>
        {immg[0].fotos.map((imageUrl, index) => (


<li key={index} className="slash"> 

<div className="one">
<div className="miniature"> 
<img src={imageUrl} alt="ftt" />

<h6>{immg[0].nombres[index]}</h6>
</div> 
</div>

<div className="two">

<p>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Deserunt incidunt itaque assumenda 
    voluptatum hic consectetur in, numquam vero, dolores natus 
    tempora porro quis provident. Hic facilis cumque porro maxime!
     Atque.</p>
     </div>

     </li>


))}
        </Slider>


          </ul>

          </>


)
}

export default SliderReviews