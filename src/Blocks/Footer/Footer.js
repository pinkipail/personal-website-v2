// TODO
// заменить div на footer
// анимировать ссылки
// вынести год в переменную
// добавить анимацию
// сделать на всю страницу
import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.title}>
        Связяться <br />
        со мной:
      </div>
      <div className={classes.spliter} />
      <div className={classes.contacts}>
        <div className={classes.contactsItem}>
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 19.9999C32 20.7014 31.8027 21.3517 31.4866 21.9239L21.3829 10.6193L31.377 1.87531C31.7658 2.49228 32 3.21701 32 4.00017V19.9999ZM16 12.6719L29.9066 0.503995C29.3359 0.191587 28.6933 0 28.0001 0H3.99998C3.30591 0 2.66309 0.191587 2.09473 0.503995L16 12.6719ZM19.8771 11.9358L16.6581 14.7541C16.4698 14.9181 16.2353 15 16 15C15.7646 15 15.5301 14.9181 15.3418 14.7541L12.1221 11.9356L1.89061 23.3847C2.50388 23.7695 3.22261 24 3.99991 24H28.0001C28.7773 24 29.4963 23.7695 30.1094 23.3847L19.8771 11.9358ZM0.623102 1.87524C0.234389 2.49221 0 3.21694 0 4.00017V19.9999C0 20.7015 0.196401 21.3518 0.51369 21.924L10.6162 10.6174L0.623102 1.87524Z"
              fill="white"
            />
          </svg>
          <div className={classes.link}>
            info@vasiliy-fedorov.ru
          </div>
        </div>
        <div className={classes.contactsItem}>
          <svg
            width="27"
            height="32"
            viewBox="0 0 27 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0778 24.3784C19.0707 25.0329 19.0637 25.6874 19.0637 26.3418C19.0637 28.1012 19.0567 29.8536 19.0707 31.6129C19.0707 31.8874 19.0215 32 18.7118 32C16.1361 31.9859 13.5604 31.9859 10.9846 32C10.6891 32 10.6117 31.9085 10.6187 31.62C10.6328 30.4729 10.6257 29.3257 10.6187 28.1786C10.6187 28.059 10.7031 27.8831 10.485 27.8408C9.80234 27.9042 9.12674 28.066 8.43003 28.0379C6.07246 27.9464 4.24271 26.9541 3.173 24.8147C2.59593 23.6606 1.92033 22.5838 1.12509 21.5774C0.906925 21.303 0.569125 21.1904 0.315775 20.9652C0.238362 20.8948 0.146874 20.8385 0.0835366 20.7541C-0.0783261 20.5218 -0.000913564 20.3459 0.280587 20.3177C1.58253 20.184 2.65927 20.6133 3.53192 21.5915C3.97528 22.0912 4.24974 22.7034 4.67903 23.2172C5.54465 24.2517 6.64954 24.8147 7.98666 24.9695C8.79598 25.061 9.56307 24.9062 10.3302 24.674C10.485 24.6317 10.5483 24.5332 10.5624 24.3713C10.6117 23.6465 10.7594 22.9427 11.0409 22.2671C11.1676 21.9645 11.3717 21.7112 11.5265 21.4015C10.8017 21.2185 10.0698 21.1622 9.38009 20.9511C7.47292 20.374 5.798 19.431 4.58051 17.8053C3.99639 17.0312 3.58822 16.1656 3.35598 15.2366C3.2293 14.7299 3.08152 14.2232 3.08855 13.6884C3.09559 12.7524 3.05337 11.8094 3.10967 10.8734C3.173 9.69109 3.32783 8.51582 3.75712 7.41093C4.02454 6.7283 4.41161 6.10196 4.96053 5.58822C5.12943 5.42636 5.19277 5.29968 5.08721 5.03225C4.56643 3.64586 4.51717 2.23132 4.96053 0.809747C4.97461 0.767522 4.98165 0.71826 4.98868 0.668997C5.14351 -0.0558669 5.30537 -0.126242 5.99505 0.148221C7.34625 0.676034 8.33854 1.6261 9.18304 2.77321C9.42232 3.09694 9.37305 3.23769 9.88679 2.90693C10.5694 2.4706 11.3647 2.33689 12.1529 2.25244C13.5674 2.10465 14.989 2.14687 16.4035 2.17502C17.4099 2.19614 18.4092 2.32985 19.3593 2.68173C19.5774 2.75914 19.7815 2.87878 19.9715 3.01953C20.1193 3.13213 20.2249 3.13213 20.3656 2.94211C21.0061 2.04131 21.738 1.22496 22.688 0.647884C23.1525 0.366384 23.6311 0.105996 24.1941 0.0426582C24.4263 0.0145082 24.5248 0.0919208 24.5882 0.274896C25.1723 1.88649 25.2567 3.49104 24.5741 5.09559C24.4896 5.29264 24.5178 5.41932 24.6656 5.55303C25.7916 6.60866 26.1997 7.98097 26.4109 9.45885C26.5868 10.7045 26.6361 11.9572 26.6009 13.2098C26.5446 15.4055 25.7986 17.3198 24.18 18.8469C23.2299 19.7407 22.0898 20.3318 20.8653 20.7822C19.9927 21.1059 19.0707 21.1904 18.1559 21.4156C18.2474 21.6337 18.4163 21.7956 18.4585 22.0138L18.5711 22.1756C18.5781 22.2179 18.5992 22.2953 18.5992 22.2953L18.7752 22.6753C18.8104 22.8301 18.8455 22.992 18.8737 23.1468L18.9863 23.4494C18.9863 23.4916 18.9933 23.5339 18.9933 23.5831L19.0707 24.0054C19.0707 24.1039 19.0778 24.2447 19.0778 24.3784Z"
              fill="white"
            />
          </svg>
          <div className={classes.link}>
            github.com/pinkipail
          </div>
        </div>
      </div>
      <div className={classes.version}>
        v0.1.2
      </div>
      <div className={classes.copyright}>
        Copyright {new Date().getFullYear()} by Fedorov Vasiliy. All rights reserved.
      </div>
    </div>
  );
}
