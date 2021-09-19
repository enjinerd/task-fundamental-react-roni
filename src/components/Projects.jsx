import React from 'react';
import styles from '@/components/styles/Projects.module.css';

function Projects() {
  return (
    <section className={styles.projects_container}>
      <p className={styles.projects_header}>Projects</p>
      <div className={styles.projects_list}>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&     auto=format&fit=crop&w=750&q=80'
            alt='Mountain'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-md mb-2'>Montana</div>
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80'
            alt='Mountain'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-md mb-2'>Sesan</div>
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            alt='Mountain'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-md mb-2'>Diano</div>
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
