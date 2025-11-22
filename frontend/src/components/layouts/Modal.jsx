import React from 'react'

const Modal = ({children, isOpen, onClose, title} ) => {

if(!isOpen) return null

  return <div className="fixe top-0 right-0 left-0 z-50 flelx justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50">
    <div className="">
        {/*Modal content*/}
        <div className="relativr bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/* Modal Header*/}

            <div className="flex items-center justify-between p-5 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text=lg font font-medium text-gray-900 dark:text-white">
                    {title}
                </h3>

                <button
                type="button"
                className="text-gray-400 bg-transparent hover:ng-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-felx jsutify-center item-center dark:hover:bg-gray-600 darl:hover:text-white cursor-pointer"
                onClick={onClose}
                >
                    <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="https://www.w3org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    >

                    <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="m1 1 6 6,0 0 6 6M7 7l6-6M7 7l-6 6"
                     />

                    </svg>
                </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5 spacey-y-4">
                {children}
            </div>
        </div>
    </div>
  </div>

}

export default Modal