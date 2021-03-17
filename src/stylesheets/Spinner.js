import styled from 'styled-components';

export const SpinnerContainerStyled = styled.div``;

export const SpinnerStyled = styled.div`
  position: relative;
  &:after {
    content: '';
    -webkit-animation: animation-spin 400ms infinite linear;
    -o-animation: animation-spin 400ms infinite linear;
    animation: animation-spin 400ms infinite linear;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-right-color: #333;
    display: inline-block;
    position: absolute;
    right: 100px;
    top: 100px;
    vertical-align: middle;
  }
  @keyframes animation-spin {
    to {
      transform: rotate(1turn);
    }
  }
`;
