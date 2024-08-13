import PricingCard from "./Compnents/PricingCard/PricingCard"
import styles from './App.module.css'

function App() {
  const cards = [
    {
      label: "Start-Up",
      price_figure: "Free",
      image: "/images/bike.png",
      imageAlt: "Moving bicycle with clouds",
      cardItems: [
        "Ulimited Downloads",
        "Email Support",
        "Limited Access"
      ],
    },
    {
      label: "Pro",
      price_figure: "49$",
      price_duration: "/Year",
      image: "/images/car.png",
      imageAlt: "Moving car with clouds",
      cardItems: [
        "Upto 10 Users",
        "Email Support, Call Support",
        "1 Year Access"
      ],
    },
    {
      label: "Enterprice",
      price_figure: "99$",
      price_duration: "/Year",
      image: "/images/jet.png",
      imageAlt: "Flaying plane with clouds",
      cardItems: [
        "Unlimited Access",
        "On demand request",
        "Life time access"
      ],
    }
  ]

  return(
    <>
      <div className={styles.bg}>
        <h1 className={styles.heading}>Choose your plan</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos fugiat blanditiis, nulla nemo eum doloremque dignissimos recusandae consequuntur</p>
      </div>
      <div className={`${styles.prices} container`}>
        {cards.map(card => {
          return(
            <PricingCard
              key={card.label}
              label={card.label}
              price_figure={card.price_figure}
              price_duration={card.price_duration}
              image={card.image}
              imageAlt={card.imageAlt}
              cardItems={card.cardItems}
            />
          )
        })}
      </div>
    </>
  )
} 

export default App
