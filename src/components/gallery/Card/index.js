import React from 'react';

import Icon from '../../internal/Icon';
import Card from '../../external/Card';

import madsHeadshot from '../../../assets/images/mads-headshot.jpg';
import styles from './CardGallery.css';

const CardGallery = () => (
  <div>
    <div className={styles['my-card-type-container']}>
      <h2>Flat Link Card</h2>
      <h2>Flat Clickable Card</h2>
      <h2>Raised Link Card (Link in new tab)</h2>
      <h2>Standard Raised Card</h2>
      <h2>Another Standard Raised Card</h2>
    </div>
    <div className={styles['my-card-container']}>
      <Card
        className={styles['card-background-color']}
        href={'https://madsmikkelsen.com/'}
      >
        <img
          className={styles['card-picture']}
          src={madsHeadshot}
          alt={'Mads'}
        />
        <section className={styles['card-body']}>
          <h4>Mads Mikkelsen</h4>
          <span>One Cool Dude</span>
          <p>Mads is a world famous actor, who dabbles in all forms of art.</p>
        </section>
        <section className={styles['card-footer']}>
          <Icon name={'thumbs-o-up'} />
          <span>Follow</span>
          <Icon name={'linkedin'} />
        </section>
      </Card>
      <Card
        className={styles['card-background-color']}
        onClick={() => alert('It\'s Mads!')}
      >
        <img
          className={styles['card-picture']}
          src={madsHeadshot}
          alt={'Mads'}
        />
        <section className={styles['card-body']}>
          <h4>Mads Mikkelsen</h4>
          <span>One Cool Dude</span>
          <p>Mads is a world famous actor, who dabbles in all forms of art.</p>
        </section>
        <section className={styles['card-footer']}>
          <Icon name={'thumbs-o-up'} />
          <span>Follow</span>
          <Icon name={'linkedin'} />
        </section>
      </Card>
      <Card
        href={'https://madsmikkelsen.com/'}
        openInNewTab
        raised
      >
        <img
          className={styles['card-picture']}
          src={madsHeadshot}
          alt={'Mads'}
        />
        <section className={styles['card-body']}>
          <h4>Mads Mikkelsen</h4>
          <span>One Cool Dude</span>
          <p>Mads is a world famous actor, who dabbles in all forms of art.</p>
        </section>
        <section className={styles['card-footer']}>
          <Icon name={'thumbs-o-up'} />
          <span>Follow</span>
          <Icon name={'linkedin'} />
        </section>
      </Card>
      <Card
        className={styles['my-basic-card']}
        raised
      >
        <img
          className={styles['card-picture']}
          src={madsHeadshot}
          alt={'Mads'}
        />
        <section className={styles['card-body']}>
          <h4>Mads Mikkelsen</h4>
          <span>One Cool Dude</span>
          <p>Mads is a world famous actor, who dabbles in all forms of art.</p>
        </section>
        <section className={styles['card-footer']}>
          <Icon name={'thumbs-o-up'} />
          <span>Follow</span>
          <Icon name={'linkedin'} />
        </section>
      </Card>
      <Card
        className={styles['my-basic-card']}
        raised
      >
        <img
          className={styles['card-picture']}
          src={madsHeadshot}
          alt={'Mads'}
        />
        <section className={styles['card-body']}>
          <h4>Mads Mikkelsen</h4>
          <span>One Cool Dude</span>
          <p>Mads is a world famous actor, who dabbles in all forms of art.</p>
        </section>
        <section className={styles['card-footer']}>
          <Icon name={'thumbs-o-up'} />
          <span>Follow</span>
          <Icon name={'linkedin'} />
        </section>
      </Card>
    </div>
  </div>
);

export default CardGallery;
