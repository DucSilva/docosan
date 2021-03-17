import styled from 'styled-components';

export const DropdownWrapperStyled = styled.ul`
    visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
    position: absolute;
    top: ${(props) => props.top ? `${props.top}` : '40px'};
    left: ${(props) => props.left ? `${props.left}` : '0px'};
    z-index: 9999;
    width: 200px;
    height: auto;
    background-color: white;
    border: none;
    padding: 10px 0px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 1px #535051;
    display: block;
    list-style-type: disc;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
`;

export const LiWrapperStyled = styled.li`
    list-style: none;
    padding: 5px;
    cursor: pointer;
    &:hover{
        background-color: #4AC0A4;
        color: white;
    }
`;