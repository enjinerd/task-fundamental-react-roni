import React from 'react';
import styles from '@/components/styles/Social.module.css';

function Social() {
  return (
    <section className={styles.social_container}>
      <p className={styles.social_header}>Social Media</p>
      <div className='flex flex-row space-x-4 md:space-x-16'>
        <div className='p-2 md:p-4 bg-secondary-500 rounded-full'>
          <img src='img/ic_fb@2x.png' alt='fb' />
        </div>
        <div className='p-2 md:p-4 bg-secondary-500 rounded-full'>
          <img src='img/ic-twitter@2x.png' alt='twitter' />
        </div>
        <div className='p-2 md:p-4 bg-secondary-500 rounded-full'>
          <img src='img/ic-linkedin@2x.png' alt='linkedin' />
        </div>
      </div>
    </section>
  );
}

export default Social;
