import * as React from 'react';

import CallToAction from '@/components/layout/home/CallToAction';
import Hero from '@/components/layout/home/Hero';
import ProductSection from '@/components/layout/home/ProductSection';
import ValueProp from '@/components/layout/home/ValueProp';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const textContent = [
    {
      heading: 'Introducing: The L*ght FRAME',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fuga perspiciatis tempore rem non quibusdam velit, magni accusantium in corrupti, dignissimos sunt ut blanditiis, voluptatem omnis eius dolores recusandae doloribus.',
    },
    {
      heading: 'Framing',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fuga perspiciatis tempore rem non quibusdam velit, magni accusantium in corrupti, dignissimos sunt ut blanditiis, voluptatem omnis eius dolores recusandae doloribus.',
    },
    {
      heading: 'Sheething',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fuga perspiciatis tempore rem non quibusdam velit, magni accusantium in corrupti, dignissimos sunt ut blanditiis, voluptatem omnis eius dolores recusandae doloribus.',
    },
    {
      heading: 'N-E Space',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fuga perspiciatis tempore rem non quibusdam velit, magni accusantium in corrupti, dignissimos sunt ut blanditiis, voluptatem omnis eius dolores recusandae doloribus.',
    },
    {
      heading: 'L*ght House',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fuga perspiciatis tempore rem non quibusdam velit, magni accusantium in corrupti, dignissimos sunt ut blanditiis, voluptatem omnis eius dolores recusandae doloribus.',
    },
  ];
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className=''>
        <div className='mx-auto w-full'>
          <main>
            <Hero />
            <ValueProp />
            {textContent.map((text, index) => (
              <ProductSection
                key={index}
                imageUsed={index}
                right={index > 0 && index < 4}
                bodyText={text.body}
                headerText={text.heading}
              />
            ))}
            <CallToAction />
          </main>
        </div>
      </div>
    </Layout>
  );
}
