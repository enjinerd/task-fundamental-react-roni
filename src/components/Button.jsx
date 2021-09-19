import React from 'react';
import styles from '@/components/styles/Button.module.css';

function Button({ children, onClick }) {
  return (
    <button className={`${styles.button} my-4`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
