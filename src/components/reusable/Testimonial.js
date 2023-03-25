import Image from "next/image"
import james from ".././../assets/images/james.png"
import Icons from "../SvgIcons/Icons"

const Testimonial = () => {
  return (
    <div className="relative rounded-lg bg-gray-800 border border-gray-700 p-8 mt-32 overflow-hidden">
      <Icons.Quote
        className="rotate-180 absolute -top-12 -left-6 z-0 text-gray-600"
        size={160}
      />
      <div className="flex flex-col items-center md:items-start md:flex-row space-y-12 md:space-x-12 md:space-y-0">
        <div className="flex-shrink-0 z-50">
          <Image
            src={james}
            width={120}
            height={120}
            className="rounded-full"
            alt="James Q Quick"
          />
        </div>
        <div className="z-50">
          <p className="text-white sm:text-xl sm:leading-relaxed mb-4">
            &quot;Building projects is by far the best way to get better at programming,
            but most people don&apos;t know what to build. FrontendPro is a great resource
            for developers looking for new and exciting challenges to take their frontend
            development skills to the next level!&quot;
          </p>
          <p className="text-white sm:text-xl sm:leading-relaxed">
            <a
              href="https://twitter.com/jamesqquick"
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:underline underline-offset-2"
            >
              James Q Quick
            </a>
            <span className="font-normal text-base text-gray-200">
              , Software Developer & Youtuber with 178K+ subscribers
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
