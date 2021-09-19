import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '@/store/Form';
import {Navbar} from '@/components'

function Review() {
  const formData = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
    <main className=''>
      <Navbar/>
      <section className='text-secondary-500 flex flex-col items-center justify-center min-h-screen layout'>
        <div
          className='
            bg-white
            cards
            flex flex-col
            pt-12
            px-12
            pb-6
            rounded-lg
            border border-gray-400
          space-y-8
            w-3/6
          '
        >
          <div
            className='flex flex-col text-justify'
          >
            <p>
              Full Name : <span id='fullName'>{formData.data.fullName}</span>
            </p>
            <p>
              Email : <span id='email'>{formData.data.email}</span>
            </p>
            <p>
              Phone Number : <span id='phone'>{formData.data.phone}</span>
            </p>
            <p>
              Nationality : <span id='nationality'>{formData.data.nationality}</span>
            </p>
          </div>
          <div id='msg' className='w-auto text-justify mb-4'>
            {formData.data.message}
          </div>
          <div className='mt-6'>
            <hr className='w-1/2'  />
          </div>
          <div className='font-medium text-xl'>
            <p className=''>Thanks for contacting us!</p>
            <p className=''>We will be in touch with you shortly.</p>
            <a href='home.html'>
              <button
                className='
                  btn-touch
                  rounded-full
                  py-2
                  px-2
                  w-20
                  text-sm
                  md:text-base md:w-28
                  text-white
                  my-4
                  hover:bg-yellow-800
                '
              >
                Home
              </button>
            </a>
          </div>
        </div>
        <footer
          id='footer'
          className='
          h-36
          w-full
          justify-start
          font-medium
          px-8
          py-6
          text-lg
          md:px-60
        '
        >
          <img src='img/img-dot.png' />
        </footer>
      </section>
    </main>
    </>
  );
}

export default Review;
