export default function Modal({
    modalVisible,
    children,
    modalClose,
    fullscreen,
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
                        className={`m-auto transition-all ease-in-out duration-1000 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white ${
                            fullscreen
                                ? " h-full w-full"
                                : "max-h-max max-w-max rounded-xl"
                        }`}
                    >
                        <div className="flex flex-col items-center w-full overflow-clip">
                            {children}
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
