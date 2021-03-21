import styled, { css } from 'styled-components';

export const HeaderTitle = styled.h1`
    color: #333333;
    margin-block-start: 10px;
    margin-block-end: 10px;
`;

export const SortWrapperStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const TextStyled = styled.h4`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
    width: ${({ width20 }) => (width20 && '20%')};
    text-align: ${({ isFilter }) => (isFilter && 'end')};
    margin-right: ${({ isFilter }) => (isFilter && '10px')};
`;

export const SortItemStyled = styled.div`
    display: ${(props) => (props.isSort || props.isLanguage) ? 'block' : 'flex'};
    justify-content: center;
    align-items: center;
    position: relative;
    > div {
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid #333333;
        cursor: pointer;
        ${(props) =>
        (props.isSort || props.isLanguage) &&
        css`
              display: flex;
              justify-content: center;
            
            `};
    }
    .distance{
        background-color: #4AC0A4;
        color: white;
        border: none;
    }
`