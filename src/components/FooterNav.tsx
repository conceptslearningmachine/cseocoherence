import * as React from "react";
import './ComponentPage.scss';
//import { Link } from 'react-router-dom';

const FooterNav = () => {

    return (
         <div className="Microsoft-logo">
              <a href="https://www.microsoft.com/en-us/ " target="_blank"><svg width="75" height="25" viewBox="0 0 57 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2896 2.40052V9.60046H22.0455V3.95051H22.0289L19.8061 9.60046H18.9767L16.7041 3.95051H16.6875V9.60046H15.543V2.40052H17.3345L19.3914 7.73381H19.4246L21.5976 2.40052H23.2896ZM24.318 2.95051C24.318 2.75051 24.3844 2.58385 24.5337 2.45052C24.683 2.31718 24.8488 2.25052 25.0479 2.25052C25.2635 2.25052 25.446 2.31718 25.5787 2.46718C25.7114 2.60052 25.7944 2.76718 25.7944 2.96718C25.7944 3.16718 25.728 3.33384 25.5787 3.46718C25.4294 3.60051 25.2635 3.66717 25.0479 3.66717C24.8323 3.66717 24.6664 3.60051 24.5337 3.46718C24.401 3.30051 24.318 3.13385 24.318 2.95051ZM25.6617 4.43384V9.60046H24.4507V4.43384H25.6617ZM29.3276 8.71714C29.5101 8.71714 29.7091 8.66714 29.9248 8.58381C30.1404 8.50047 30.3395 8.38381 30.5219 8.25047V9.3838C30.3229 9.50047 30.1072 9.5838 29.8584 9.6338C29.6096 9.6838 29.3442 9.71713 29.0456 9.71713C28.2826 9.71713 27.6688 9.4838 27.2043 9.00047C26.7233 8.51714 26.4911 7.90048 26.4911 7.16715C26.4911 6.33382 26.7399 5.65049 27.2209 5.11716C27.702 4.58383 28.3821 4.31717 29.2778 4.31717C29.5101 4.31717 29.7257 4.3505 29.958 4.4005C30.1902 4.46717 30.3726 4.53384 30.5054 4.6005V5.76716C30.3229 5.63383 30.1238 5.51716 29.9414 5.4505C29.7423 5.36716 29.5432 5.33383 29.3442 5.33383C28.8631 5.33383 28.4816 5.48383 28.183 5.80049C27.8844 6.11716 27.7352 6.53382 27.7352 7.06715C27.7352 7.58381 27.8679 8.00048 28.1499 8.28381C28.465 8.56714 28.8466 8.71714 29.3276 8.71714ZM33.9557 4.3505C34.0552 4.3505 34.1381 4.3505 34.2211 4.36717C34.304 4.38384 34.3704 4.4005 34.4201 4.41717V5.65049C34.3538 5.60049 34.2708 5.56716 34.1381 5.51716C34.022 5.46716 33.8727 5.4505 33.6903 5.4505C33.3917 5.4505 33.1428 5.58383 32.9438 5.83383C32.7447 6.08382 32.6286 6.46715 32.6286 7.00048V9.60046H31.4177V4.43384H32.6286V5.2505H32.6452C32.7613 4.96716 32.9272 4.7505 33.1428 4.58383C33.3751 4.43384 33.6405 4.3505 33.9557 4.3505ZM34.4865 7.10048C34.4865 6.25049 34.7187 5.56716 35.1998 5.06716C35.6808 4.56717 36.3443 4.31717 37.2069 4.31717C38.0031 4.31717 38.6335 4.5505 39.0814 5.03383C39.5292 5.51716 39.7615 6.16716 39.7615 6.98382C39.7615 7.81714 39.5292 8.48381 39.0482 8.9838C38.5671 9.4838 37.9202 9.7338 37.0908 9.7338C36.2946 9.7338 35.6642 9.50047 35.1998 9.0338C34.7187 8.55047 34.4865 7.90048 34.4865 7.10048ZM35.7472 7.05048C35.7472 7.58381 35.8633 8.00048 36.1121 8.28381C36.3609 8.56714 36.7093 8.71714 37.1571 8.71714C37.605 8.71714 37.9368 8.56714 38.169 8.28381C38.4012 8.00048 38.5174 7.58381 38.5174 7.01715C38.5174 6.46715 38.4012 6.05049 38.1524 5.76716C37.9202 5.48383 37.5884 5.3505 37.1571 5.3505C36.7093 5.3505 36.3775 5.50049 36.1287 5.80049C35.8633 6.08382 35.7472 6.50049 35.7472 7.05048ZM41.553 5.80049C41.553 5.96716 41.6027 6.11716 41.7188 6.21716C41.835 6.31716 42.0672 6.43382 42.4487 6.58382C42.9298 6.78382 43.2781 7.00048 43.4606 7.23382C43.6596 7.48381 43.7592 7.76715 43.7592 8.11714C43.7592 8.60047 43.5767 9.00047 43.1952 9.2838C42.8302 9.5838 42.316 9.7338 41.6857 9.7338C41.47 9.7338 41.2378 9.70046 40.9724 9.65047C40.707 9.60047 40.4913 9.5338 40.3089 9.45047V8.25047C40.5245 8.40047 40.7733 8.53381 41.0222 8.61714C41.271 8.70047 41.5032 8.75047 41.7188 8.75047C41.9843 8.75047 42.1999 8.71714 42.316 8.63381C42.4487 8.55047 42.5151 8.43381 42.5151 8.25047C42.5151 8.08381 42.4487 7.93381 42.316 7.83381C42.1833 7.71714 41.9179 7.58381 41.553 7.43381C41.1051 7.25048 40.7899 7.03382 40.6075 6.80049C40.425 6.56715 40.3255 6.26716 40.3255 5.90049C40.3255 5.43383 40.5079 5.0505 40.8729 4.7505C41.2378 4.4505 41.7188 4.3005 42.2994 4.3005C42.4819 4.3005 42.681 4.31717 42.8966 4.36717C43.1122 4.4005 43.3113 4.46717 43.4606 4.51717V5.66716C43.2947 5.56716 43.1122 5.46716 42.8966 5.38383C42.681 5.3005 42.4653 5.26716 42.2663 5.26716C42.034 5.26716 41.8516 5.31716 41.7354 5.4005C41.6193 5.51716 41.553 5.63383 41.553 5.80049ZM44.2734 7.10048C44.2734 6.25049 44.5056 5.56716 44.9867 5.06716C45.4677 4.56717 46.1313 4.31717 46.9938 4.31717C47.7901 4.31717 48.4204 4.5505 48.8683 5.03383C49.3162 5.51716 49.5484 6.16716 49.5484 6.98382C49.5484 7.81714 49.3162 8.48381 48.8351 8.9838C48.3541 9.4838 47.7071 9.7338 46.8777 9.7338C46.0815 9.7338 45.4512 9.50047 44.9867 9.0338C44.5222 8.55047 44.2734 7.90048 44.2734 7.10048ZM45.5341 7.05048C45.5341 7.58381 45.6502 8.00048 45.899 8.28381C46.1479 8.56714 46.4962 8.71714 46.9441 8.71714C47.3919 8.71714 47.7237 8.56714 47.9559 8.28381C48.1882 8.00048 48.3043 7.58381 48.3043 7.01715C48.3043 6.46715 48.1882 6.05049 47.9394 5.76716C47.7071 5.48383 47.3754 5.3505 46.9441 5.3505C46.4962 5.3505 46.1644 5.50049 45.9156 5.80049C45.6668 6.08382 45.5341 6.50049 45.5341 7.05048ZM53.5627 5.43383H51.7546V9.60046H50.5271V5.43383H49.6645V4.43384H50.5271V3.71717C50.5271 3.16718 50.7095 2.73385 51.0579 2.38385C51.4062 2.03385 51.8541 1.86719 52.4015 1.86719C52.5508 1.86719 52.6835 1.86719 52.7996 1.88385C52.9158 1.90052 53.0153 1.91719 53.0982 1.95052V3.00051C53.065 2.98385 52.9821 2.95051 52.8826 2.91718C52.7831 2.88385 52.6669 2.86718 52.5342 2.86718C52.2854 2.86718 52.0864 2.95051 51.9537 3.10051C51.8209 3.26718 51.7546 3.50051 51.7546 3.80051V4.41717H53.5627V3.25051L54.7736 2.88385V4.41717H56.0011V5.41716H54.7736V7.83381C54.7736 8.15048 54.8234 8.38381 54.9395 8.50047C55.0556 8.63381 55.2381 8.70047 55.4869 8.70047C55.5532 8.70047 55.6362 8.6838 55.7357 8.65047C55.8352 8.61714 55.9182 8.58381 56.0011 8.53381V9.5338C55.9182 9.5838 55.8021 9.61713 55.6196 9.65047C55.4371 9.6838 55.2713 9.70046 55.0888 9.70046C54.5746 9.70046 54.193 9.56713 53.9442 9.2838C53.6954 9.01714 53.5627 8.60047 53.5627 8.05048V5.43383Z" fill="#333333" />
                <path d="M5.6731 0H0V5.69996H5.6731V0Z" fill="#333333" />
                <path d="M11.9426 0H6.26953V5.69996H11.9426V0Z" fill="#333333" />
                <path d="M5.6731 6.29883H0V11.9988H5.6731V6.29883Z" fill="#333333" />
                <path d="M11.9426 6.29883H6.26953V11.9988H11.9426V6.29883Z" fill="#333333" />
              </svg></a>
            </div>
    );
};
export default FooterNav;