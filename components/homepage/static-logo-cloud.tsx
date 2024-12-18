import Image from "next/image";

const logos = [
  {
    name: 'Vercel',
    src: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Nextjs',
    src: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
  },
  {
    name: 'Webflow',
    src: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
  },
  {
    name: 'Airbnb',
    src: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
  },
  {
    name: 'Tina',
    src: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
  },
  {
    name: 'Mistral',
    src: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
  },
]

const StaticLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
        <div className="font-medium uppercase">Sponsored by</div>
        <div className="group relative flex gap-6 px-2">
          <div className="flex shrink-0 flex-row justify-around gap-6">
            {logos.map((logo, key) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={150}
                height={50}
                className="h-auto w-[150px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticLogoCloud