function SectionHeader({ heading, subHeading }) {
  return (
    <div className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center">
      <h1>{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
}

export default SectionHeader;
