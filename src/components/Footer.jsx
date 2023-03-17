import styles from "../style";
import bank from "../assets/BANCO.png";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <div className="flex justify-center items-center w-full">
        <img
          draggable="false"
          src={bank}
          alt="bank"
          className="w-[3%] mr-3 my-3"
        />
        <h3 className={`${styles.paragraph}`}>Crypto Bank</h3>
      </div>
      <div
        className={`${styles.paragraph} flex justify-center items-center text-center`}
      >
        <p className="mr-2 text-[15px]">
          Made with love by{" "}
          <a
            className="text-white"
            href="https://github.com/AndresPineros29"
            target="_blank"
          >
            AndresPineros29
          </a>
        </p>
        <FaGithub color="#fff" />
      </div>
    </section>
  );
};

export default Footer;
