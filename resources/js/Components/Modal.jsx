export default function Modal({
    modalVisible,
    children,
    modalClose,
    fullscreen,
    title,
}) {
    document.onkeydown = (evt) => {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
            isEscape = evt.code === 27;
        }
        if (isEscape) {
            modalClose();
        }
    };
    return (
        <>
            {modalVisible ? (
                <>
                    <div
                        className={`mx-auto my-5 transition-all ease-in-out duration-1000 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white ${
                            fullscreen
                                ? " h-full w-full"
                                : "max-w-max rounded-xl"
                        }`}
                    >
                        <div className="flex flex-col items-center w-full h-full overflow-clip">
                            <div className="sticky top-0 z-20 flex items-start justify-between w-full p-4 bg-white border-b border-gray-400 rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900 min-w-[300px]">
                                    {title}
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={modalClose}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="w-full h-full mb-20 overflow-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={modalClose}
                        className="fixed inset-0 z-40 bg-black opacity-60"
                    ></div>
                </>
            ) : null}
        </>
    );
}
