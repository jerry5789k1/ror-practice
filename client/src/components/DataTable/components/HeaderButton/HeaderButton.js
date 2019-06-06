import React from 'react';
import './HeaderButton.scss';
const HeaderButton = ({code, content,clicked}) => {
    const handleClick = () => {
        clicked(code)
    }
    return (
        <div className="data_column" onClick={()=> handleClick()}>{content}</div>
    );
}

export default HeaderButton

