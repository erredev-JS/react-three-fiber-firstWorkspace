
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from './TextSection.module.css';
import './carouselStyles.css';
const TextSection = () => {
  return (
    <div className={style.sectionContainer}>
      <h1 className={style.sectionTitle}>Redefining the Pickup Truck</h1>
      <p className={style.sectionParagraph}>
        Whatever the task, terrain or weather.
        <br />
        Cybertruck was designed to do it all.
      </p>

      {/* Carrusel React Responsive Carousel */}
      <Carousel className={style.carousel}  showIndicators={false} showThumbs={false} swipeable={false}>
        <div>
          <div className={style.card}>
            <img src="./img/cyber1prueba.PNG" alt="Imagen 1" className={style.cardImage} />
            <div className={style.cardTextContainer}>
            <p className={style.cardTitle}>Bring It All</p>
            <p className={style.cardDescription}>Weekend road trips, outdoor adventures or a day at the job site—with up to 120 cubic feet of cargo space, you can bring along everything you need. Second-row seat cushions fold up for even more storage.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src="./img/cyber2prueba.png" alt="Imagen 2" className={style.cardImage} />
            <div className={style.cardTextContainer}>
            <p className={style.cardTitle}>Power On Tap</p>
            <p className={style.cardDescription}>Two 120 V outlets in the cabin. Two 120 V outlets in the truck bed (plus one 240 V outlet for even more power).5 Together, they deliver up to 9.6 kW of total electric power, so you can plug in everything from air compressors to heavy-duty power tools.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src="./img/cyber3prueba.png" alt="Imagen 3" className={style.cardImage} />
            <div className={style.cardTextContainer}>
            <p className={style.cardTitle}>Throw Anything at It</p>
            <p className={style.cardDescription}>Exterior body panels are made from stainless steel, making your truck tough on the outside to keep you safe on the inside. Cabin windows and glass roof have shatter-resistant armor glass that can handle the impact of hail the size of a baseball (or an actual baseball).</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TextSection;
