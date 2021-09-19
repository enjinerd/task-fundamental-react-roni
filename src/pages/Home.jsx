import React from 'react';
import { Button, Navbar, Footer, Projects, Social } from '@/components';

export default function Home() {
  let time = () => {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    return  ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  }

  return (
    <main className='flex flex-col min-h-screen'>
      <Navbar />
      <section
        className='w-full content items-center justify-center fle-1x md:flex-1 px-4 py-6 mx-auto md:px-6 md:py-12 bg-no-repeat bg-cover bg-top'
        style={{ backgroundImage: "url('img/bg-img.png')" }}
      >
        <div className='text-secondary-500 justify-center flex flex-row mt-12 space-x-6 md:space-x-10 md:mt-24'>
          <img
            className='rounded-full w-32 h-32 md:w-96 md:h-96'
            src='img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
            alt='anne'
          />
          <div className='flex flex-col justify-center'>
            <p className='font-medium text-lg md:text-2xl md:mb-2'>
              Hi, my name is
            </p>
            <p className='font-semibold text-2xl md:text-8xl md:my-2'>
              Anne Sulivan
            </p>
            <p className='font-medium text-xl md:text-4xl md:my-2'>
              I build things for the web
            </p>
            <a href='contact_us.html'>
              <Button>Get In Touch</Button>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-primary-500 p-8 flex items-center justify-center text-secondary-500">
      Asu  
    </section>
      <Projects />
      <Social />
      <Footer />
    </main>
  );
}
