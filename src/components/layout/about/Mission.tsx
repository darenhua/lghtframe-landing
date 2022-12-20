export default function Mission() {
  return (
    <section className='py-20 px-6 sm:px-10 md:px-20'>
      <div className='flex w-full flex-col items-center text-center'>
        <h2 className='w-fit text-5xl underline decoration-lghtpurple '>
          Our Mission.
        </h2>
        <p className='w-full px-0 pt-10 text-lg font-bold leading-9 xs:px-10 xs:text-2xl sm:px-20'>
          We are <span className='font-normal'>L*GHT&trade;</span>, a group of
          designers obsessed with the plastic recovery problem. We believe that
          plastic pollution and the housing shortage could have the same
          solution:{' '}
          <span className='underline decoration-lghtcolordark decoration-4'>
            construction materials made out of plastic waste
          </span>
          . We are creating a structural system for homes to keep plastic out of
          landfills and decrease the use of mined building materials,
          simultaneously improving the strength and durability of single and
          multi-family housing.
        </p>
      </div>
    </section>
  );
}
