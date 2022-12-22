const Icons = {
  PlaceholderThumbnail: () => (
    <svg
      className="w-12 h-12 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 640 512"
    >
      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
    </svg>
  ),
  PlaceholderAvatar: () => (
    <svg
      className="w-14 h-14 text-gray-700"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  Loader: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin text-white mr-2 -ml-1"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 1 0 9 9"></path>
    </svg>
  ),
  ChevronDown: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-down"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  ChevronUp: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-up"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="6 15 12 9 18 15"></polyline>
    </svg>
  ),
  ArrowDown: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-down"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="18" y1="13" x2="12" y2="19"></line>
      <line x1="6" y1="13" x2="12" y2="19"></line>
    </svg>
  ),
  Download: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-download"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
      <polyline points="7 11 12 16 17 11"></polyline>
      <line x1="12" y1="4" x2="12" y2="16"></line>
    </svg>
  ),
  ArrowRight: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <line x1="13" y1="18" x2="19" y2="12"></line>
      <line x1="13" y1="6" x2="19" y2="12"></line>
    </svg>
  ),
  ShieldLock: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
      <circle cx="12" cy="11" r="1"></circle>
      <line x1="12" y1="12" x2="12" y2="14.5"></line>
    </svg>
  ),
  Code: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-code"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="7 8 3 12 7 16"></polyline>
      <polyline points="17 8 21 12 17 16"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </svg>
  ),
  Share: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="18" cy="18" r="3"></circle>
      <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"></line>
      <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"></line>
    </svg>
  ),
  MessageCode: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-message-2-code"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
      <path d="M10 9l-2 2l2 2"></path>
      <path d="M14 9l2 2l-2 2"></path>
    </svg>
  ),
  BrowserCheck: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="1"></rect>
      <path d="M4 8h16"></path>
      <path d="M8 4v4"></path>
      <path d="M9.5 14.5l1.5 1.5l3 -3"></path>
    </svg>
  ),
  RoadMap: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-road"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 19l4 -14"></path>
      <path d="M16 5l4 14"></path>
      <path d="M12 8v-2"></path>
      <path d="M12 13v-2"></path>
      <path d="M12 18v-2"></path>
    </svg>
  ),
  CopyRight: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-copyright"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"></path>
    </svg>
  ),
  Star: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
    </svg>
  ),
  Rocket: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-rocket"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
      <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
      <circle cx="15" cy="9" r="1"></circle>
    </svg>
  ),
  Certificate: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-certificate"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="15" cy="15" r="3"></circle>
      <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
      <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
      <line x1="6" y1="9" x2="18" y2="9"></line>
      <line x1="6" y1="12" x2="9" y2="12"></line>
      <line x1="6" y1="15" x2="8" y2="15"></line>
    </svg>
  ),
  User: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-user"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="7" r="4"></circle>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
    </svg>
  ),
  SignOut: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-logout"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
      <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
    </svg>
  ),
  Desktop: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-device-desktop"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="4" width="18" height="12" rx="1"></rect>
      <line x1="7" y1="20" x2="17" y2="20"></line>
      <line x1="9" y1="16" x2="9" y2="20"></line>
      <line x1="15" y1="16" x2="15" y2="20"></line>
    </svg>
  ),
  Phone: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-device-mobile"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="6" y="3" width="12" height="18" rx="2"></rect>
      <line x1="11" y1="4" x2="13" y2="4"></line>
      <line x1="12" y1="17" x2="12" y2="17.01"></line>
    </svg>
  ),
  ExternalLink: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-external-link"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
      <line x1="10" y1="14" x2="20" y2="4"></line>
      <polyline points="15 4 20 4 20 9"></polyline>
    </svg>
  ),
  Menu: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-2"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  ),
  Cross: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-x"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Reply: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-message-circle"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
      <line x1="12" y1="12" x2="12" y2="12.01"></line>
      <line x1="8" y1="12" x2="8" y2="12.01"></line>
      <line x1="16" y1="12" x2="16" y2="12.01"></line>
    </svg>
  ),
  Edit: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-edit"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
      <path d="M16 5l3 3"></path>
    </svg>
  ),
  Delete: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-trash"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="4" y1="7" x2="20" y2="7"></line>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg>
  ),
  Plus: ({ size = 24, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-plus"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  ),
}

export default Icons
