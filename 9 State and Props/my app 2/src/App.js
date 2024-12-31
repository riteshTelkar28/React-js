import React, { useRef } from 'react';

function App() {

    // Creating a ref object using useRef hook
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value =
            "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    };
    return (
        <>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} /> {/*By setting ref={focusPoint} on the <textarea>, you associate the focusPoint ref with this specific DOM element.*/}
        </>
    );
};

export default App;