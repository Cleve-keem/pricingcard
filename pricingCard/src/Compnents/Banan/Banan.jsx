import React from 'react';
import styles from './Banan.module.css'
import PropTypes from 'prop-types'

function Banan({ feature })
{
    const {
        heading, 
        description,
        
    } = feature;

    return(

        <div className={styles.bg}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.description}>{description}</p>
        </div>

    )
}

Banan.PropTypes = {
    feature: PropTypes.exact({
        heading: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default Banan