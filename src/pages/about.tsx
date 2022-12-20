import Approach from '@/components/layout/about/Approach';
import Comparisions from '@/components/layout/about/Comparisons';
import Mission from '@/components/layout/about/Mission';
import Team from '@/components/layout/about/Team';
import CallToAction from '@/components/layout/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function AboutPage() {
  const aboutMeta = {
    templateTitle: 'About',
    date: '12/11/2022',
    description:
      'Lghtframe is building a new sustainable housing system. Learn more about the team of designers and architects behind LGHTFrame!',
  };
  return (
    <Layout>
      <Seo {...aboutMeta} />
      <div className='bg-lghtgrey'>
        <div className='mx-auto w-full'>
          <main>
            <Mission />
            <Team />
            <Comparisions />
            <Approach />
            <CallToAction />
          </main>
        </div>
      </div>
    </Layout>
  );
}
