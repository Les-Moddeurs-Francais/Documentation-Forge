import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Mysterious_Dev',
        img: 'https://avatars.githubusercontent.com/u/40738104?v=4',
    },
    {
        title: 'Zom',
        img: 'https://avatars.githubusercontent.com/u/24624348?v=4',
    },
    {
        title: 'Moddeur_Ultime',
        img: '../../static/img/le_moddeur_ultime.jpg',
    }
];

function Feature({img, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={img} className={styles.featureSvg} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h2 className="text--center">Équipe LMF</h2>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
