import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from '@/components';
import useAxios from '@/hooks/useAxios';
import { format } from 'date-fns';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles?username=nataliedeweerd')
      .then(function (response) {
        setNews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(!loading);
      });
  }, []);

  return (
    <main>
      <Navbar />
      {loading ? (
        <div className='flex flex-col items-center justify-center py-8 text-xl font-bold text-secondary-500'>
          Loading...
        </div>
      ) : (
        <section className='flex flex-col space-y-4 justify-center items-center  py-8 px-32'>
          {news.map((d) => (
            <div className='w-full flex flex-col space-y-2 p-6 border border-secondary-400 bg-secondary-300 text-white'>
              <a>
                <p className='font-bold hover:text-primary-500 w-2/3'>
                  {d.title}
                </p>
              </a>
              <p>{d.description}</p>
            </div>
          ))}
        </section>
      )}
      <Footer />
    </main>
  );
}

export default News;
