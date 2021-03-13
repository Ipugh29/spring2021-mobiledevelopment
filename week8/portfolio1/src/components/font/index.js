import React from 'react';

class Font extends React.Component {

    render() {

        const style = {
            fontFamily: "Papyrus",
            backgroundColor: "#f0c060",
            color: "white",
            fontSize: "20px"
        };
        return (
            <p style={style}>Increasing the size to 20 pixels, changing the backgroundColor and the font family to Papyrus!</p>

        );
    }

}

export default Font;