import React from 'react'

export default function HoverButton({ name }) {
    return (
        <button data-text="Awesome" className="button-hover">
            <span className="actual-text">&nbsp;{name}&nbsp;</span>
            <span className="nav-hover-text" aria-hidden="true">
                &nbsp;{name}&nbsp;
            </span>
        </button>

    )
}
