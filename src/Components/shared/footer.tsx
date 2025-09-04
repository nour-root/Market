export default function Footer() {
  return (
    <div className="bg-[#222935] py-10 max-lg:pb-20 grid max-sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4 p-4">
        <img src="/logo.svg" className="w-[105px]" alt="" />
        <p className="text-sm text-[#aeb4be]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
          id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
          vel ut sollicitudin elit at amet.
        </p>
        <div className="flex items-center gap-3">
          <div className="bg-[#161d2b] flex items-center p-2 rounded-lg w-fit gap-2">
            <svg
              className="w-6 h-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="PlayStoreIcon"
              fill="currentColor"
            >
              <g>
                <path
                  d="M17.9236 8.23227C15.1356 6.67287 10.6607 4.16885 3.71978 0.282486C3.25183 -0.0265614 2.71342 -0.0670615 2.24823 0.090392L14.1569 11.999L17.9236 8.23227Z"
                  fill="#32BBFF"
                ></path>
                <path
                  d="M2.24824 0.090332C2.16105 0.119863 2.07621 0.155488 1.99507 0.19852C1.48137 0.476395 1.10388 1.0111 1.10388 1.68737V22.3105C1.10388 22.9868 1.48132 23.5215 1.99507 23.7993C2.07607 23.8423 2.16087 23.8781 2.24796 23.9078L14.1568 11.999L2.24824 0.090332Z"
                  fill="#32BBFF"
                ></path>
                <path
                  d="M14.1569 11.999L2.24799 23.9079C2.71331 24.0665 3.25172 24.0291 3.71982 23.7155C10.451 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8512 15.8121 17.9272 15.7694L14.1569 11.999Z"
                  fill="#32BBFF"
                ></path>
                <path
                  d="M1.10388 11.999V22.3106C1.10388 22.9869 1.48132 23.5216 1.99507 23.7994C2.07607 23.8424 2.16087 23.8782 2.24796 23.9079L14.1568 11.999H1.10388Z"
                  fill="#2C9FD9"
                ></path>
                <path
                  d="M3.71978 0.282559C3.16407 -0.0843794 2.50876 -0.0739263 1.99506 0.198699L13.9761 12.1798L17.9235 8.23234C15.1356 6.67295 10.6607 4.16893 3.71978 0.282559Z"
                  fill="#29CC5E"
                ></path>
                <path
                  d="M13.9762 11.8184L1.99506 23.7994C2.50881 24.072 3.16407 24.0877 3.71978 23.7155C10.4509 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8511 15.8121 17.9271 15.7694L13.9762 11.8184Z"
                  fill="#D93F21"
                ></path>
                <path
                  d="M22.8961 11.9989C22.8961 11.4275 22.6078 10.8509 22.0363 10.5311C22.0363 10.5311 20.9676 9.93479 17.6919 8.10254L13.7955 11.9989L17.6957 15.8992C20.9355 14.0801 22.0363 13.4667 22.0363 13.4667C22.6078 13.147 22.8961 12.5703 22.8961 11.9989Z"
                  fill="#FFD500"
                ></path>
                <path
                  d="M22.0363 13.4669C22.6078 13.1471 22.8961 12.5704 22.8961 11.999H13.7955L17.6957 15.8993C20.9355 14.0802 22.0363 13.4669 22.0363 13.4669Z"
                  fill="#FFAA00"
                ></path>
              </g>
            </svg>
            <div className="">
              <p className="text-[8px]">Get it on</p>
              <p className="text-sm">Google Play</p>
            </div>
          </div>
          <div className="bg-[#161d2b] flex items-center p-2 rounded-lg w-fit gap-2">
            <svg
              className="w-6 h-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AppleStoreIcon"
              fill="currentColor"
            >
              <g>
                <path
                  d="M19.0781 24H4.92188C2.20795 24 0 21.792 0 19.0781V4.92188C0 2.20795 2.20795 0 4.92188 0H19.0781C21.792 0 24 2.20795 24 4.92188V19.0781C24 21.792 21.792 24 19.0781 24Z"
                  fill="#00C3FF"
                ></path>
                <path
                  d="M19.0781 0H12V24H19.0781C21.792 24 24 21.792 24 19.0781V4.92188C24 2.20795 21.792 0 19.0781 0Z"
                  fill="#00AAF0"
                ></path>
                <path
                  d="M7.38978 18.4929C7.17299 18.8684 6.77825 19.0785 6.37292 19.0786C6.17422 19.0786 5.97303 19.0281 5.78895 18.9218C5.22936 18.5988 5.03694 17.8807 5.36 17.3211L5.59049 16.9219H8.29681L7.38978 18.4929Z"
                  fill="white"
                ></path>
                <path
                  d="M5.17969 15.984C4.53352 15.984 4.00781 15.4583 4.00781 14.8122C4.00781 14.166 4.53352 13.6403 5.17969 13.6403H7.48491L10.6468 8.1637L9.78989 6.67945C9.46683 6.11985 9.6592 5.40173 10.2188 5.07862H10.2188C10.7784 4.75556 11.4966 4.94803 11.8196 5.50757L12 5.81999L12.1804 5.50762C12.5036 4.94798 13.2217 4.7556 13.7812 5.07867C14.0522 5.23518 14.2462 5.48788 14.3272 5.79023C14.4082 6.09257 14.3666 6.40842 14.2101 6.67949L10.1912 13.6403H12.7262L14.0794 15.984H5.17969Z"
                  fill="white"
                ></path>
                <path
                  d="M18.8203 15.9844H17.8682L18.6399 17.3211C18.963 17.8806 18.7706 18.5988 18.2111 18.9219C18.0304 19.0261 17.83 19.0794 17.6269 19.0794C17.5251 19.0794 17.4228 19.066 17.3217 19.039C17.0194 18.9579 16.7667 18.764 16.6101 18.4929L12.5412 11.4453L13.8943 9.10156L16.5151 13.6407H18.8203C19.4665 13.6407 19.9922 14.1664 19.9922 14.8126C19.9922 15.4587 19.4665 15.9844 18.8203 15.9844Z"
                  fill="#F2F2F2"
                ></path>
                <path
                  d="M12 13.6406V15.9844H14.0794L12.7262 13.6406H12Z"
                  fill="#F2F2F2"
                ></path>
                <path
                  d="M14.3272 5.7907C14.2461 5.48836 14.0522 5.23561 13.7812 5.07914C13.2217 4.75608 12.5035 4.9484 12.1804 5.50809L12 5.82047V10.508L14.2101 6.67996C14.3666 6.40889 14.4082 6.09309 14.3272 5.7907Z"
                  fill="#F2F2F2"
                ></path>
              </g>
            </svg>
            <div className="">
              <p className="text-[8px]">Download on the</p>
              <p className="text-sm">App Store</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h2 className="text-lg capitalize">About us</h2>
        <ul className="text-[#aeb4be] space-y-3">
          <li className="capitalize text-sm">Careers</li>
          <li className="capitalize text-sm">Our Stores</li>
          <li className="capitalize text-sm">Our Cares</li>
          <li className="capitalize text-sm">Terms & Conditions</li>
          <li className="capitalize text-sm">Privacy Policy</li>
        </ul>
      </div>
      <div className="space-y-2 p-4">
        <h2 className="text-lg capitalize">customer Care</h2>
        <ul className="text-[#aeb4be] space-y-3">
          <li className="capitalize text-sm">help center</li>
          <li className="capitalize text-sm">track your order</li>
          <li className="capitalize text-sm">corporate & bulk purchasing</li>
          <li className="capitalize text-sm">returns & refunds</li>
        </ul>
      </div>
      <div className="space-y-2 p-4">
        <h2 className="text-lg capitalize">contact us</h2>
        <ul className="text-[#aeb4be] space-y-3">
          <li className="capitalize text-sm">
            70 Washington Square South, New York, NY 10012, United States
          </li>
          <li className="capitalize text-sm">Email: uilib.help@gmail.com</li>
          <li className="capitalize text-sm">corporate & bulk purchasing</li>
          <li className="capitalize text-sm">Phone: +1 1123 456 780</li>
        </ul>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="bg-[#00000033] p-2 rounded-lg hover:bg-[rgba(75,86,107,0.04)]"
          >
            <svg
              className="w-3 h-3"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 10 14"
              data-testid="TwitterIcon"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.55556 0C2.41466 0 3.11111 0.696446 3.11111 1.55556V3.88889H7.77778C8.63689 3.88889 9.33333 4.58533 9.33333 5.44444C9.33333 6.30355 8.63689 7 7.77778 7H3.11111V8.55556C3.11111 9.84422 4.15578 10.8889 5.44444 10.8889H7.77778C8.63689 10.8889 9.33333 11.5853 9.33333 12.4444C9.33333 13.3036 8.63689 14 7.77778 14H5.44444C2.43756 14 0 11.5624 0 8.55556V1.55556C0 0.696446 0.696446 0 1.55556 0Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="MuiTouchRipple-root css-4mb1j7"></span>
          </button>
          <button
            type="button"
            className="bg-[#00000033] p-2 rounded-lg hover:bg-[rgba(75,86,107,0.04)]"
          >
            <svg
              className="w-3 h-3"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 15 11"
              data-testid="YoutubeIcon"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25V8.25C13.5 8.66421 13.1642 9 12.75 9H2.25C1.83579 9 1.5 8.66421 1.5 8.25V2.25C1.5 1.83579 1.83579 1.5 2.25 1.5ZM0 2.25C0 1.00736 1.00736 0 2.25 0H12.75C13.9926 0 15 1.00736 15 2.25V8.25C15 9.49264 13.9926 10.5 12.75 10.5H2.25C1.00736 10.5 0 9.49264 0 8.25V2.25ZM6 3L9 5.25L6 7.5V3Z"
                fill="white"
              ></path>
            </svg>
            <span className="MuiTouchRipple-root css-4mb1j7"></span>
          </button>
          <button
            type="button"
            className="bg-[#00000033] p-2 rounded-lg hover:bg-[rgba(75,86,107,0.04)]"
          >
            <svg
              className="w-3 h-3"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 14 14"
              data-testid="InstagramIcon"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 3.81818C5.24273 3.81818 3.81818 5.24273 3.81818 7C3.81818 8.75727 5.24273 10.1818 7 10.1818C8.75727 10.1818 10.1818 8.75727 10.1818 7C10.1818 5.24273 8.75727 3.81818 7 3.81818ZM5.09091 7C5.09091 8.05436 5.94564 8.90909 7 8.90909C8.05436 8.90909 8.90909 8.05436 8.90909 7C8.90909 5.94564 8.05436 5.09091 7 5.09091C5.94564 5.09091 5.09091 5.94564 5.09091 7Z"
                fill="white"
              ></path>
              <path
                d="M10.8182 2.54545C10.4667 2.54545 10.1818 2.83036 10.1818 3.18182C10.1818 3.53327 10.4667 3.81818 10.8182 3.81818C11.1696 3.81818 11.4545 3.53327 11.4545 3.18182C11.4545 2.83036 11.1696 2.54545 10.8182 2.54545Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.54545 0C1.13964 0 0 1.13964 0 2.54545V11.4545C0 12.8604 1.13964 14 2.54545 14H11.4545C12.8604 14 14 12.8604 14 11.4545V2.54545C14 1.13964 12.8604 0 11.4545 0H2.54545ZM11.4545 1.27273H2.54545C1.84255 1.27273 1.27273 1.84255 1.27273 2.54545V11.4545C1.27273 12.1575 1.84255 12.7273 2.54545 12.7273H11.4545C12.1575 12.7273 12.7273 12.1575 12.7273 11.4545V2.54545C12.7273 1.84255 12.1575 1.27273 11.4545 1.27273Z"
                fill="white"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="bg-[#00000033] p-2 rounded-lg hover:bg-[rgba(75,86,107,0.04)]"
          >
            <svg
              className="w-3 h-3"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 14 14"
              data-testid="GoogleIcon"
              fill="currentColor"
            >
              <path
                d="M2.8 7C2.8 9.3196 4.6804 11.2 7 11.2C8.82871 11.2 10.3844 10.0313 10.961 8.4H7V5.6H13.8633V8.4H13.86C13.2114 11.5951 10.3865 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C9.41148 0 11.5382 1.2194 12.7971 3.07522L10.5028 4.6817C9.75071 3.54768 8.46267 2.8 7 2.8C4.6804 2.8 2.8 4.6804 2.8 7Z"
                fill="white"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="bg-[#00000033] p-2 rounded-lg hover:bg-[rgba(75,86,107,0.04)]"
          >
            <svg
              className="w-3 h-3"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 8 14"
              data-testid="FacebookIcon"
              fill="currentColor"
            >
              <path
                d="M1.72081 14H4.59374V8.09799H7.18233L7.46667 5.16509H4.59374V3.68421C4.59374 3.27726 4.9153 2.94737 5.31197 2.94737H7.46667V0H5.31197C3.32863 0 1.72081 1.64948 1.72081 3.68421V5.16509H0.284341L0 8.09799H1.72081V14Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
