import React from "react";

const Toast = () => {
  return (
    <div
      className="pointer-events-auto relative   bg-red-400 mx-auto mb-4 hidden w-96 max-w-full lg:-mb-[135px] rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
      id="static-example"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-te-autohide="false"
      data-te-toast-init=""
      data-te-toast-show=""
    >
      <div className="flex items-center justify-between rounded-t-lg  border-b-2 border-danger-200 bg-danger-500 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700">
        <p className="flex items-center font-bold text-danger-700">
          <span className="mr-2 h-4 w-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Danger
        </p>
        <div className="flex items-center ">
          <p className="text-xs text-danger-700 font-bold">1 sec ago</p>
          <button
            type="button"
            className=" box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-toast-dismiss=""
            aria-label="Close"
          >
            <span className=" bg-black ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="break-words text-white rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 font-bold">
        You've Been Hacked!&#128520; Succesfull, Thanks For Your cooperation{" "}
        <br />{" "}
        <span className="flex justify-center text-lg text-yellow-300">
          &#128518;&#128514;Moye Moye Moye
        </span>
      </div>
    </div>
  );
};

export default Toast;
