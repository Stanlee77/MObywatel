type IconQrProps = {
  width?: string;
};

function IconQr(props: IconQrProps) {
  const DEFAULT_WIDTH = 30;
  return (
    <svg
      width={props.width || DEFAULT_WIDTH}
      height={props.width || DEFAULT_WIDTH}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_92_60)">
      <path fillRule="evenodd" clipRule="evenodd" d="M19 1C20.654 1 23 2.846 23 4.5V19C23 20.654 20.654 23 19 23H5C3.346 23 1 20.654 1 19V5C1 3.346 3.346 1 5 1H19ZM19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0Z" fill="#52575F"/>
      <path d="M11 8H10V6H11V5H10V4H12V5V6H11V7H13V4H14V7H13V8H14V9H13V8H12V9H11V8Z" fill="#52575F"/>
      <path d="M4 10H5H6V11H7V14H6V13H5V14H4V12H6V11H4V10Z" fill="#52575F"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 15H9V20H4V15ZM8 19H5V16H8V19ZM6 18H7V17H6V18Z" fill="#52575F"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 20V19H12V18H14V20H15V19H16V20H18V19H19V20H20V19H19V18H20V15H19V14H20V13H19V12H20V11H19V10H20V4H15V9H19V10H17V11H16V10H14V11H13V10H10V9H9V4H4V9H9V10H8V11H9V13H8V14H9V13H10V12H11V14H10V16H11V17H10V20H11V19H12V20H13ZM12 14V16H11V14H12ZM13 14H12V12H15V13H13V14ZM15 15H13V14H15V15ZM16 15V12H17V13H18V15H19V16H18V17H19V18H17V17H16V18H15V17H14V16H15V15H16ZM16 15V16H17V15H16ZM19 11H18V12H19V11ZM5 5H8V8H5V5ZM7 6H6V7H7V6ZM19 8V5H16V8H19ZM18 7H17V6H18V7Z" fill="#52575F"/>
      </g>
      <defs>
      <clipPath id="clip0_92_60">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
  );
}

export default IconQr;
