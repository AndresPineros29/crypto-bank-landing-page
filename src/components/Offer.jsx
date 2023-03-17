import styles from "../style";
import altavoz from "../assets/ALTAVOZ.png";
import caja from "../assets/CAJA-FUERTE.png";
import flecha from "../assets/FLECHA.png";
import planeta from "../assets/MUNDO.png";
import "./offer.css";

const Offer = () => {
  return (
    <div className={`flex justify-between ${styles.paddingY}`}>
      <div className="lg:flex grid grid-cols-2 mx-0 md:mx-20 w-full justify- items-center flex-col md:flex-row rounded-lg bg-offer">
        <div className="lg:w-full text-center mx-[2%] text-white ">
          <div className="w-full flex justify-center">
            <img
              draggable="false"
              src={flecha}
              alt="flecha"
              className="m-5 w-[40%]"
            />
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Compatitive
            <br /> Rates
          </p>
        </div>
        <div className="lg:w-full text-center mx-[2%] text-white ">
          <div className="w-full flex justify-center">
            <img
              draggable="false"
              src={altavoz}
              alt="altavoz"
              className="m-5 w-[40%]"
            />
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Local & community
            <br /> Service
          </p>
        </div>
        <div className="lg:w-full text-center mx-[2%] text-white ">
          <div className="w-full flex justify-center">
            <img
              draggable="false"
              src={planeta}
              alt="planeta"
              className="m-5 w-[40%]"
            />
          </div>
          <p className={`${styles.paragraph}  mt-5`}>
            Multi
            <br /> Language
          </p>
        </div>
        <div className="lg:w-full text-center mx-[2%] text-white ">
          <div className="w-full flex justify-center">
            <img
              draggable="false"
              src={caja}
              alt="caja"
              className="m-5 w-[40%]"
            />
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Extremly
            <br /> Safe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
