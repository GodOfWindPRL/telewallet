import { createGlobalStyle } from "styled-components";
import configColor from "./configColor";
export const GlobalStyle = createGlobalStyle`
//disabled recapcha
.grecaptcha-badge{
  display: none !important;
}
//toast
  .Toastify__toast-container {
    -webkit-transform: translate3d(0,0,1px);
      transform: translate3d(0,0,1px);
  }
  //container
  .Toastify__toast {
    border-radius: 10px;
    border: 1px solid ${configColor.gray5};
    padding:12px 12px 12px 12px;
    &.small-toast{
      width: 200px;
    }
  }
  .Toastify__toast-theme--light {

}
  //progress
  .Toastify__progress-bar {
    /* display: none; */
    bottom: 20px;
    opacity: 1;
    left: 20px;
    width: calc(100% - 40px);
    height: 4px;
    /* :before{
      content:'';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 4px;
      z-index: var(--toastify-z-index);
      opacity: 0.7;
      transform-origin: left;
      background-color: #ccc;
      z-index: -1;
    } */
  }
  //button
  .Toastify__close-button {
    opacity: 1;
    position: absolute;
    right: 15px;
    top:15px;
  }
  .Toastify__close-button--default {
  }
  .Toastify__close-button > svg {
    color: ${configColor.gray4};
    width: 18px;
    height: 18px;
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
  }
  //icon
  /** Used to position the icon **/
.Toastify__toast-icon {
  display: none;
}
//end-toast
  :root{
     
    --toastify-color-light: ${configColor.gray2};
    --toastify-color-dark: #121212;
    --toastify-color-info: #3498db;
    --toastify-color-success: ${configColor.primary1};
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: #e74c3c;
    --toastify-color-transparent: rgba(255, 255, 255, 0.7);

    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);

    --toastify-toast-width: 330px;
    --toastify-toast-background: ${configColor.white};
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: sans-serif;
    --toastify-z-index: 9999;

    --toastify-text-color-light: ${configColor.white};
    --toastify-text-color-dark: #fff;

    //Used only for colored theme
    --toastify-text-color-info: #fff;
    --toastify-text-color-success: #fff;
    --toastify-text-color-warning: #fff;
    --toastify-text-color-error: #fff;

    --toastify-spinner-color: ${configColor.white};
    --toastify-spinner-color-empty-area: #e0e0e0;

    // Used when no type is provided
    // toast("**hello**")
    --toastify-color-progress-light: linear-gradient(
      to right,
      #4cd964,
      #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55
    );
    // Used when no type is provided
    --toastify-color-progress-dark: #bb86fc;
    --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error);
  
  }
  :root{
    font-size:13px;
  }
  body {
    font-size:13px;
    line-height:1.17;
    font-family: 'Heebo-400';
  }
  .scrollbar {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
            width: 4px !important;
            height: 4px !important;
            margin-top:10px;
        }
        &::-webkit-scrollbar-track {
            background: ${configColor.gray2} !important;
            border-radius: 6px !important;
        }
        &::-webkit-scrollbar-thumb {
            background: ${configColor.primary2} !important;
            border-radius: 6px !important;
        }
  }
  .container {
    width: 100%;
    padding: 0 40px;
    max-width: 1440px;
  }
  /*  */
  .page-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 12px;
    z-index: 0;
    .pc-item {
      min-width: 32px;
      height: 20px;
      margin: 0 6px;
      display: flex;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 90%;
        height: 100%;
        left: 5%;
        top: 0;
        transform: skewX(-20deg);
        background: ${configColor.gray3};
        border-radius: 4px;
      }
      > a {
        z-index: 1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 6px;
      }
      &:hover {
        color: ${configColor.primary2};
      }
    }
    .pc-item-active {
      > a {
        color: black;
      }
      &::before {
        background: ${configColor.primary2};
      }
      &:hover {
        color: ${configColor.white};
      }
    }
    .pc-prev {
      margin-left: auto;
      &:hover {
        svg {
          fill: white;
        }
      }
    }
    .pc-next {
      margin-right: auto;
      &:hover {
        svg {
          fill: white;
        }
      }
    }
  }
/*  */
  .color-primary {
    color: ${configColor.primary1};
  }
`;
