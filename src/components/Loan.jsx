import styles from "../style";
import "./offer.css";
import { loan } from "../constants/index";

const Loan = () => {
  return (
    <section
      id="loan"
      className={`flex md:flex-row flex-col ${styles.paddingY} my-14`}
    >
      <div className="flex sm:mx-20  md:w-full justify-between items-center flex-col md:flex-row">
        {loan.map((info) => (
          <div className="h-full w-full mx-[5%] p-10 m-5 lg:m-3 rounded-lg bg-secondbg/40">
            <div className="flex justify-between w-full mb-5 ">
              <img draggable="false" src={info.image} className="w-[30%]" />

              <h2 className={`${styles.paragraph}`}>{info.title}</h2>
            </div>
            <div>
              <ul className={`${styles.paragraph} list-disc lg:text-sm`}>
                <li className="my-2">{info.value1}</li>
                <li className="my-2">{info.value2}</li>
                <li className="my-2">{info.value3}</li>
                <li className="my-2">{info.value4}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loan;
