import BrandIcons from "../SvgIcons/BrandIcons"
import EmojiIcons from "../SvgIcons/EmojiIcons"
import Icons from "../SvgIcons/Icons"

const Footer = () => {
  return (
    <footer className="xl:col-start-3 col-span-full flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 p-4 rounded-lg bg-gray-900 border border-gray-700 text-gray-300">
      <h4 className="flex items-center">
        <EmojiIcons.Rocket size={32} />
        <span>FrontendPro</span>
      </h4>
      <small className="flex items-center">
        <Icons.CopyRight size={16} className="mr-2 -ml-1" />
        {`${new Date().getFullYear()}`} FrontendPro. All right reserved
      </small>
      <div className="social flex items-center justify-center">
        <a
          href="https://github.com/rishipurwar1/coding-space"
          className="px-2"
          aria-label="FrontendPro github repository"
          title="FrontendPro github repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandIcons.GitHub size={18} className="hover:fill-current" />
        </a>
        <a
          href="https://twitter.com/FrontendProHQ"
          className="px-2"
          aria-label="FrontendPro twitter account"
          title="FrontendPro twitter account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandIcons.Twitter size={18} className="hover:fill-current" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
