import React from "react";
import styles from "../style";
import { testimonios as tes } from "../constants";

const Testimonios = () => {
  return (
    <section id="testimonios" className="text-center">
      <div className="my-14">
        <h2 className={`${styles.heading2}`}>
          Some Of Our Awesome Testimonials
        </h2>
      </div>
      <div className="flex text-left justify-between items-center flex-col md:flex-row">
        {tes.map((info) => (
          <div className="h-full ss:w-[50%] md:w-full mx-[5%] p-10 m-5 lg:m-3 rounded-lg bg-secondbg/40">
            <div className="flex justify-between w-full mb-5 ">
              <img
                draggable="false"
                src={info.image}
                className="w-[30%] rounded-full"
              />
            </div>

            <div className={`${styles.paragraph}`}>
              <p className={`${styles.paragraph} lg:text-sm py-5`}>
                {info.value}
              </p>
              <h2>{info.Name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
