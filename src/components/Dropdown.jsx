import React from 'react';
import { DropdownWrapperStyled, LiWrapperStyled } from '../stylesheets/Dropdown';

const Dropdown = ({ visible, data, onClick, value }) => {
    const onClickItem = (item) => {
        onClick(item);
    }

    return (
        <DropdownWrapperStyled visible={visible}>
            {data.map(item => {
                return <LiWrapperStyled key={item?.id || 0} value={item?.value || 0} onClick={() => onClickItem(item?.value)}>
                    <input type="radio" checked={ item?.value === value} />
                    <span>{item?.name}</span>
                </LiWrapperStyled>
            })}
        </DropdownWrapperStyled>
    )
}

export default Dropdown;