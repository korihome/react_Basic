import React from "react";

const RandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}

const HOC = (WrappedComponent) => {
    const colorHexa = "#" + RandomColor();
    return (props) => (
        <div style={{ color: colorHexa }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default HOC