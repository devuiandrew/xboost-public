import Image from "next/image";

// Floating icon positioned around the hero logo
export function Icons({ position, icon, alt }) {
  const wrapperClasses = `absolute rounded-xs z-10 ${position}`;
  const imageClasses = "p-1 shadow-md shadow-boost-green border rounded-xl bg-white w-full";

  return (
    <div className={wrapperClasses}>
      <Image className={imageClasses} src={icon} alt={alt} />
    </div>
  );
}
