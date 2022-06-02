import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='px-20'>
        <div className='mx-auto w-full max-w-7xl'>
          <main>
            <section className='my-20 mb-40'>
              <article className='flex items-center'>
                <div className='w-7/12'>
                  <h1 className='text-6xl tracking-tight'>
                    We have the solution to your problem.
                  </h1>
                  <div className='mt-6 mb-8 max-w-lg'>
                    <p className='text-xl'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores dicta ad suscipit dolor mollitia quod iste illo id
                      sunt ab perspiciatis numquam.
                    </p>
                  </div>
                  <div className='flex flex-wrap gap-6'>
                    <Button variant='primary' className='text-lg'>
                      Explore our houses
                    </Button>
                    <Button variant='outline' className='text-lg'>
                      Sign up now
                    </Button>
                  </div>
                </div>
                <div className='w-5/12'>
                  <div className='max-w-md'>
                    <Image
                      src='/images/download.png'
                      alt='placeholder'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </article>
            </section>
            <section className='my-20 mb-40'>
              <div className='relative flex justify-center text-center'>
                <div className='max-w-xl pt-12'>
                  <h2 className='text-5xl'>
                    We eliminate plastic waste and build houses
                  </h2>
                  <div className='mt-8 '>
                    <p className='text-xl'>Supported by Harvard E-Labs</p>
                  </div>
                  <div className='mt-8 mb-12'>
                    <Image
                      src='/images/download.png'
                      alt='placeholder'
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className='absolute top-6 left-0 -translate-x-20'>
                  <Image
                    src='/images/download.png'
                    alt='placeholder'
                    width={200}
                    height={200}
                  />
                </div>
                <div className='absolute top-6 right-0 translate-x-20'>
                  <Image
                    src='/images/download.png'
                    alt='placeholder'
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </section>
            <section className='my-20 mb-40'>
              <div className='flex items-center'>
                <div className='w-6/12'>
                  <h2 className='text-5xl'>Introducing: Plasteel</h2>
                  <div className='mt-8 max-w-md'>
                    <p className='text-xl'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet fuga perspiciatis tempore rem non quibusdam velit,
                      magni accusantium in corrupti, dignissimos sunt ut
                      blanditiis, voluptatem omnis eius dolores recusandae
                      doloribus.
                    </p>
                  </div>
                </div>
                <div className='flex w-6/12 justify-center'>
                  <div className='max-w-md'>
                    <Image
                      src='/images/download.png'
                      alt='placeholder'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className='my-20 mb-40 text-right'>
              <div className='flex flex-row-reverse items-center'>
                <div className='w-6/12'>
                  <h2 className='text-5xl'>Introducing: Plasteel</h2>
                  <div className='mr-0 ml-auto mt-8 max-w-md'>
                    <p className='text-xl'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet fuga perspiciatis tempore rem non quibusdam velit,
                      magni accusantium in corrupti, dignissimos sunt ut
                      blanditiis, voluptatem omnis eius dolores recusandae
                      doloribus.
                    </p>
                  </div>
                </div>
                <div className='flex w-6/12 justify-center'>
                  <div className='max-w-md'>
                    <Image
                      src='/images/download.png'
                      alt='placeholder'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className='my-20 mb-40'>
              <div className='flex items-center'>
                <div className='w-6/12'>
                  <h2 className='text-5xl'>Introducing: Plasteel</h2>
                  <div className='mt-8 max-w-md'>
                    <p className='text-xl'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet fuga perspiciatis tempore rem non quibusdam velit,
                      magni accusantium in corrupti, dignissimos sunt ut
                      blanditiis, voluptatem omnis eius dolores recusandae
                      doloribus.
                    </p>
                  </div>
                </div>
                <div className='flex w-6/12 justify-center'>
                  <div className='max-w-md'>
                    <Image
                      src='/images/download.png'
                      alt='placeholder'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className='my-20'>
              <div className='mx-auto flex max-w-2xl flex-col items-center rounded-2xl border-4 border-slate-200 px-20 py-6'>
                <h2 className='text-4xl'>Interested? Sign up now!</h2>
                <div className='mt-4'>
                  <Button variant='primary' className='text-lg'>
                    Sign up now
                  </Button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
