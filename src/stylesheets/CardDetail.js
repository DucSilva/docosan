import styled from 'styled-components';

export const CardDetailWrapperStyled = styled.div`
    display: flex;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 1px #535051;
    margin-bottom: 20px;
`;

export const ImageWrapperStyled = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;

export const InfoWrapperStyled = styled.div`
    display: block;
    margin-left: 10px;
    flex: 1;
`;

export const NameStyled = styled.h4`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const StarStyled = styled.div`
    display: flex;
    > div {
        > span {
            margin-right: 2px;
        }
        .checked{
            color: orange;
        }
        .total-patient {
            font-size: 15px;
            margin-left: 10px;
        }
    }
`;

export const SpecialtyStyled = styled.h5`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const ClinicName = styled.h5`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-top: 20px;
`;

export const ClinicAddress = styled.h5`
    color: #333333;
    margin-block-start: 0px;
    margin-block-end: 0px;
`;