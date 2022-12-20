import ContactHero from '@/components/layout/contact/ContactHero';
import CallToAction from '@/components/layout/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactPage() {
  const contactMeta = {
    templateTitle: 'Contact',
    date: '12/11/2022',
    description:
      'Lghtframe is building a new sustainable housing system. Talk to someone at LGHTFrame today!',
  };
  return (
    <Layout>
      <Seo {...contactMeta} />
      <div className=''>
        <div className='mx-auto w-full'>
          <main>
            <ContactHero />
            <CallToAction />
          </main>
        </div>
      </div>
    </Layout>
  );
}
