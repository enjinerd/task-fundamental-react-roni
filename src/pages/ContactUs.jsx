import React, { useState } from 'react';
import { Button, Footer } from '@/components';
import { isEmail, isAlpha } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '@/store/Form';

function ContactUs() {
  const form = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    message: '',
  });

  let [error, setError] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [hidden, setHidden] = useState(true);

  const handleChange = (e) => {
    const newData = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: newData,
    });
    dispatch(addData({ name: e.target.name, value: e.target.value }));
  };

  const validate = () => {
    const newError = { ...error };

    if (!formData.email) {
      newError.email = 'Email wajib diisi!';
    } else if (!isEmail(formData.email)) {
      newError.email = 'Email tidak valid!';
    } else {
      newError.email = '';
    }

    if (!formData.fullName) {
      newError.fullName = 'Nama Lengkap wajib diisi!';
    } else if (!isAlpha(formData.full_name.replace(/\s/g, ''))) {
      newError.fullName = 'Nama lengkap harus diisi huruf!';
    }

    if (!formData.phone) {
      newError.phone = 'No. Handphone wajib diisi!';
    } else if (!isInt(formData.num_phone)) {
      newError.phone = 'No. Handphone harus angka!';
    } else if (formData.phone.length > 14 || formData.phone.length < 9) {
      newError.phone =
        'No. Handphone harus lebih dari 9 karakter dan kurang dari 14 karakter!';
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const findErrors = validate();
    if (Object.keys(findErrors).some((error) => error !== '')) {
      setError(findErrors);
    }
  };

  return (
    <main className='text-secondary-500 h-screen w-full flex-col md:flex md:flex-row md:items-stretch mx-auto my-auto px-auto py-auto md:space-x-48'>
      <section
        id='side-container'
        className='h-full items-center justify-center px-24 py-64 bg-no-repeat bg-cover bg-top'
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(25, 52, 94, 0.65), rgba(25, 52, 94, 0.65)), url('img/charles-rRWiVQzLm7k-unsplash.jpg')",
        }}
      >
        <img
          className='opacity-70 w-64 h-auto'
          src='img/logo-ALTA-v2@2x.png'
          alt='alta'
        />
      </section>
      <section
        id='contact-form'
        className='h-screen md:h-auto py-6 md:py-0 md:my-8 md:my-0 items-center md:items-start md:justify-center flex flex-col space-y-4 font-medium'
      >
        <p className='text-xl md:text-2xl text-center'>Contact Us</p>
        <form className='text-lg flex flex-col justify-start space-y-2 md:space-y-4 md:w-96'>
          <div className='flex flex-col'>
            <label for='fullName'>
              Full Name<span className='text-red-800'>*</span>
            </label>
            <input
              id='fullName'
              onChange={handleChange}
              className={
                'md:w-full text-base px-2 md:px-4' +
                (error.fullName
                  ? 'border border-red-400'
                  : 'border border-gray-400')
              }
              name='fullName'
              type='text'
              placeholder='Your Full Name Here...'
            />
            {error.fullName ? (
              <p className='text-red-500 text-sm mt-2'>{error.fullName}</p>
            ) : (
              ''
            )}
          </div>
          <div className='flex flex-col'>
            <label for='email'>
              Email Address<span class='text-red-800'>*</span>
            </label>
            <input
              id='email'
              onChange={handleChange}
              className={
                'md:w-full text-base px-2 md:px-4' +
                (error.email
                  ? 'border border-red-400'
                  : 'border border-gray-400')
              }
              name='email'
              type='email'
              placeholder='example@domain.com'
            />
            {error.email !== '' ? (
              <p className='text-red-500 text-sm mt-2'>{error.email}</p>
            ) : (
              ''
            )}
          </div>
          <div className='flex flex-col'>
            <label for='phone'>
              Phone Number<span className='text-red-800'>*</span>
            </label>
            <input
              id='phone'
              onChange={handleChange}
              className={
                'md:w-full text-base px-2 md:px-4' +
                (error.phone
                  ? 'border border-red-400'
                  : 'border border-gray-400')
              }
              name='phone'
              type='text'
              placeholder='085703890xxxxx'
            />
            {error.phone !== '' ? (
              <p className='text-red-500 text-sm mt-2'>{error.phone}</p>
            ) : (
              ''
            )}
          </div>
          <div className='flex flex-col'>
            <label for='nationality'>Nationality</label>
            <select
              id='nationality'
              onChange={handleChange}
              className='border bg-white border-gray-400 md:w-96 text-base px-2 md:px-4 py-1'
              name='nationality'
              type='text'
            >
              <option value='indonesia'>Indonesia</option>
              <option value='singapore'>Singapore</option>
              <option value='us'>United States</option>
              <option value='japan'>Japan</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label for='message'>Message</label>
            <textarea
              onChange={handleChange}
              id='message'
              className='border border-gray-400 md:w-96 text-base px-2 md:px-4 py-1 h-12 md:h-32'
              name='message'
              type='text'
              placeholder='Your Message Here..'
            ></textarea>
          </div>
        </form>
        <Button className='py-2 px-4' onClick={handleSubmit}>
          Submit
        </Button>
      </section>
    </main>
  );
}

export default ContactUs;
