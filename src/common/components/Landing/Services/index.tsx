import Image from "next/image";
import styles from "./services.module.scss";

const services = [
  {
    id: 1,
    course: "Computer Fundamentals",
    desc: "Underatanding software, hardware, and essential computing concepts",
    price: "N 200,000",
    month: "6 Weeks",
  },
  {
    id: 2,
    course: "Professional Typing",
    desc: "Develop speed and accuracy with our specialized training modules",
    price: "N 80,000",
    month: "2 Weeks",
  },
  {
    id: 3,
    course: "Office Productivity",
    desc: "Master Word, Excel, PowerPoint, and essential business tools",
    price: "N 150,000",
    month: "4 Weeks",
  },
];
const Services = () => {
  return (
    <div id="services" className={styles.ServicesContainer}>
      <h4 className={styles.Question}>What we do</h4>
      <p className={styles.Content}>
        Provide professional development training
      </p>
      <div className={styles.Services}>
        {services.map((service) => (
          <div key={service.id} className={styles.cardWrap}>
         
              <h5>{service.course}</h5>
              <p>{service.desc}</p>
              <div className={styles.pricegroup}>
              <p className={styles.month}>{service.month}</p>
              <p className={styles.price}>{service.price}</p>
              </div>
             
            </div>
       
        ))}
      </div>
    </div>
  );
};

export default Services;
