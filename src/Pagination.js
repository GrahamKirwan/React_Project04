import React from 'react'

export default function Pagination(props) {

    const prevButtonHandler = () => {
        props.prevButtonClicked();
    }
    const nextButtonHandler = () => {
        props.nextButtonClicked();
    }



    return (
        <>
            {props.count !== 0 ? <button onClick={prevButtonHandler}>Previous</button> : ''}
            {<button onClick={nextButtonHandler}>Next</button>}
        </>
    )
}
