import PricingCard from "./Compnents/PricingCard/PricingCard"
import styles from './App.module.css'
import Banan from "./Compnents/Banan/Banan"

function App() {

  const showPricingCards = true;

  const bgContent = {
    heading: "Choose your plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minus doloremque quia nihil sunt possimus libero? Nisi temporibus optio non",
  }
  
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
      price_figure: "$49",
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
      price_figure: "$99",
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
      <Banan feature={bgContent} />

      {
        showPricingCards && (
          <div className={`${styles.prices} container`}>
            {cards.map(card => {
              return(
                <PricingCard
                  key={card.label}
                  card={card}
                />
              )
            })}
          </div>
        )
      }
    </>
  )
} 

export default App
