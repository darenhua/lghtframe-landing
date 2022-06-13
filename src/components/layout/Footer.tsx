import Image from 'next/image';

import Button from '@/components/buttons/Button';

export default function Footer() {
  return (
    <footer className='border-t-2 border-solid border-slate-200 bg-white pt-28 pb-16'>
      <div className='sm:px-8 md:px-20'>
        <div className='mx-auto w-full max-w-7xl'>
          <nav className='flex'>
            <div className='md:w-3/12 lg:w-4/12'>
              <div className='flex items-center'>
                <div className='mr-4 hidden sm:block'>
                  <Image
                    src='/images/download.png'
                    alt='placeholder'
                    width={60}
                    height={60}
                  />
                </div>
                <h2 className='md:text-2xl lg:text-3xl'>LGHTFRAME</h2>
              </div>
              <div className='md:text-md my-2 lg:text-xl'>
                <p>Sign up for our newsletter below.</p>
              </div>
              <div className='mt-6'>
                <form action=''>
                  <input type='email' className='w-24 md:w-36 lg:w-48' />
                  <Button className='mt-4 lg:ml-1 lg:mt-0' type='submit'>
                    Submit
                  </Button>
                </form>
              </div>
            </div>
            <div className='md:text-md flex md:w-9/12 lg:w-8/12 lg:text-lg'>
              <div className='w-1/3'>
                <h3 className='mx-auto mb-8 w-32 '>Section 1</h3>
                <ul className=''>
                  <li className='mx-auto mb-6 w-32 '>
                    <a href=''>Link 1</a>
                  </li>
                  <li className='mx-auto mb-6 w-32'>
                    <a href=''>Link 2</a>
                  </li>
                  <li className='mx-auto mb-6 w-32'>
                    <a href=''>Link 3</a>
                  </li>
                </ul>
              </div>
              <div className='w-1/3'>
                <h3 className='mx-auto mb-8 w-32'>Section 2</h3>
                <ul className=''>
                  <li className='mx-auto mb-6 w-32 '>
                    <a href=''>Link 4</a>
                  </li>
                  <li className='mx-auto mb-6 w-32'>
                    <a href=''>Link 5</a>
                  </li>
                  <li className='mx-auto mb-6 w-32'>
                    <a href=''>Link 6</a>
                  </li>
                </ul>
              </div>
              <div className='w-1/3'>
                <h3 className='mx-auto mb-8 w-32'>Section 3</h3>
                <ul className=''>
                  <li className='mx-auto mb-6 w-32 '>
                    <a href=''>Link 6</a>
                  </li>
                  <li className='mx-auto mb-6 w-32'>
                    <a href=''>Link 7</a>
                  </li>
                  <li className='mx-auto mb-6 w-32'>
                    <a href=''>Link 8</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
