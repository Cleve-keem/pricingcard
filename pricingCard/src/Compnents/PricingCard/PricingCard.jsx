import Button from '../Button/Button'
import styles from './PricingCard.module.css'
import PropTypes from 'prop-types'

function PricingCard({ card }) 
{

    const {
        label,
        price_figure,
        price_duration,
        image,
        imageAlt,
        cardItems
    } = card

    const cardThemes = {
        "Start-Up": styles.card_startup,
        "Pro": styles.card_pro,
        "Enterprice": styles.card_enterprice, 
    }
    
    const classTheme = cardThemes[label];

    return(
        <div className={`${styles.card} ${classTheme}`}>
            <div className = {`${styles["card_wrapper"]} center-vertical`}>
                <span className ={styles.card__label}>{label}</span>
                <div className={styles.card_image} >
                    <img src={image} alt={imageAlt}/>
                </div>
                <div className={styles["card_price"]}>
                    <span className={styles["card_price_figure"]}>{price_figure}</span>
                    {price_duration && (
                        <span className={styles["card_price_duration"]}>{price_duration}</span>
                    )}
                </div>
                <span className={styles["card_items_label"]}>Everything in free, plus</span>
                <ul className={styles["card_items"]}>
                    {cardItems.map(item => {
                        return(
                            <li key={item} className={`${styles["card_item"]} center-horizontal`}>
                                <img className={styles["card_item_icon"]} src="/icon/checkbox-line.png" alt="" />
                                {item}
                            </li>
                        )
                    })}
                </ul>
                <Button className={styles.card_button}>
                    Choose
                </Button>
            </div>
        </div>
    )
}

PricingCard.propTypes = {
    card: PropTypes.exact({
        label: PropTypes.string.isRequired,
        price_figure: PropTypes.string.isRequired,
        price_duration: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        cardItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}

export default PricingCard