import Image from 'next/image';

interface PanelProps {
  heading: React.ReactNode;
  className?: string;
  bodyText: React.ReactNode | string;
  sourceText?: string;
  year?: string;
  src: string;
}

interface UnderlinePanelProps {
  headingText: string;
  bodyText: string;
  sourceText: string;
  year: string;
  src: string;
}

function Panel({ heading, className, bodyText, sourceText, src }: PanelProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center   px-2 pb-6 pt-8 text-xl text-white lg:pb-0 xl:px-4 ${className}`}
    >
      <div className='mb-4  w-full sm:h-1/6'>{heading}</div>
      <div className='flex h-4/6 w-full flex-col items-center xs:flex-row sm:flex-col'>
        <div className='relative h-36 w-36 xs:h-full xs:w-6/12 sm:h-3/6 sm:w-5/12 lg:w-10/12'>
          <Image
            src={src}
            alt='placeholder'
            layout='fill'
            width='100%'
            height='100%'
          />
        </div>
        <div className='mt-4 flex h-fit w-full flex-col items-center justify-between px-6 text-sm leading-tight xs:h-full xs:w-6/12 sm:h-3/6 sm:w-full lg:px-10 xl:px-12'>
          <p className='pb-2'>{bodyText}</p>
          <p className=''>{sourceText}</p>
        </div>
      </div>
    </div>
  );
}

function UnderlinePanel({
  headingText,
  bodyText,
  sourceText,
  year,
  src,
}: UnderlinePanelProps) {
  return (
    <Panel
      heading={
        <div className='flex flex-col items-center justify-center text-xl compsm:flex-row sm:flex-col'>
          <h3 className='w-fit text-center text-xl leading-6 compsm:mr-6 compsm:text-left sm:mr-0 sm:text-center 2xl:text-2xl'>
            <span className='underline decoration-lghtgreen decoration-4'>
              {headingText}
            </span>{' '}
            single and multi-family housing
          </h3>
          <div className='inline-flex flex-row items-center lg:my-2'>
            <h3 className='mr-2 text-xl text-lghtcolordark xl:text-2xl'>
              {year}
            </h3>
            <div className='inline-flex items-center'>
              <Image
                src='/images/avatars-000220355343-echc6t-original.jpg'
                alt='placeholder'
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      }
      bodyText={bodyText}
      src={src}
      sourceText={sourceText}
    />
  );
}

export default function Comparisions() {
  return (
    <section className='my-20 mb-40 bg-lghtpurple pt-12 pb-12 lg:pt-0 '>
      <div className='grid w-full grid-cols-1 place-items-center gap-6  px-2 xs:gap-4 sm:h-[800px] sm:grid-cols-2 sm:px-6 lg:h-[650px] lg:grid-cols-4 lg:pt-24 xl:px-20'>
        <UnderlinePanel
          headingText='Sustainable'
          bodyText='Sustainable single and multi-family housing is predicted to represent 31%+ out of all single and multi-family housing in 2022, with most home prices starting at $350k+.*'
          sourceText='*www.statista.com, Green Multi-Family and Single Family Homes'
          src='/images/panelimg.jpg'
          year='2020'
        />
        <UnderlinePanel
          headingText='Affordable'
          bodyText='Affordable single and multi-family housing represented 36% out of all single and multi-family housing in 2020, with home prices below $350k+.*'
          src='/images/panelimg.jpg'
          sourceText='*www.statista.com, Millennial renters between the age of 24 and 39'
          year='2021'
        />

        <Panel
          heading={
            <div className='flex h-full flex-col items-center justify-center text-xl compsm:flex-row sm:flex-col'>
              <h3 className='text-center leading-6 compsm:mr-6 sm:mr-0'>
                Housing Shortage
              </h3>
              <h3 className='my-2'>2021</h3>
            </div>
          }
          bodyText='Currently, there is a 7.12M housing shortage. 250k houses were built between 2020-2022'
          sourceText='*www.statista.com, Number of homes built in the US between 1900 and 2021'
          src='/images/panelimg.jpg'
        />
        <Panel
          heading={
            <div className='flex h-full items-center justify-center text-xl '>
              <h3 className='text-center leading-6 text-lghtgreen underline decoration-lghtgreen decoration-4'>
                L*GHT House&trade;
              </h3>
            </div>
          }
          className='border-4 border-lghtgreen'
          bodyText={
            <span className='text-lghtgreen'>
              L*GHT&trade; sits at the intersection between sustainable and
              affordable single and multi-family housing, a market which is not
              established, with the goal of making a $150k house.*
            </span>
          }
          src='/images/panelimg.jpg'
        />
      </div>
    </section>
  );
}
