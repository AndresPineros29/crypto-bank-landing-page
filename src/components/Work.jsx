import React from "react";
import styles from "../style";
import dardo from "../assets/DARDO.png";

const Work = () => {
  return (
    <section
      id="goals"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className="font-poppins font-semibold ss:text-[60px] text-[30px] text-white ss:leading-[80px] leading-[50px] w-full">
          We work hard - you get the beast deals
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Because we're a credit broker, not a lender, we're able to search a
          panel of leading lenders to find the loan that suits you best. Got a
          less-than-perfect credit history? No need to worry. Got CCJs or
          defaults? The chances are, we'll still be able to help.
          <br />
          <br />
          Hundreds of products, loads of options, our technology cuts through
          the noise and our experts will advise on most the suitable option for
          you.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          draggable="false"
          src={dardo}
          alt="dardo"
          className="lg:w-[80%] md:w-full relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[30%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[70%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[40%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Work;
