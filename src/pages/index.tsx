import * as React from 'react';

import CallToAction from '@/components/layout/home/CallToAction';
import Hero from '@/components/layout/home/Hero';
import ProductSection from '@/components/layout/home/ProductSection';
import ValueProp from '@/components/layout/home/ValueProp';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='px-20'>
        <div className='mx-auto w-full max-w-7xl'>
          <main>
            <Hero />
            <ValueProp />
            <ProductSection />
            <ProductSection right />
            <ProductSection />
            <CallToAction />
          </main>
        </div>
      </div>
    </Layout>
  );
}
