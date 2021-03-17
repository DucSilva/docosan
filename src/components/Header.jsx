import React from 'react';
import { HeaderTitle, SortWrapperStyled, TextStyled, SortItemStyled } from '../stylesheets/Header';
import Dropdown from './Dropdown';
import { SORT_BY, FILTER_LANGUAGE } from '../utils/ENUM';
import { useDispatch, useSelector } from 'react-redux';
import { sortByDistanceRating, sortByLanguage, clearLanguage } from '../actions/index';

const Header = (props) => {
    const dispatch = useDispatch();
    const [isSort, setIsSort] = React.useState(false);
    const [isLanguage, setIsLanguage] = React.useState(false);

    const radioRtDistance = useSelector((state) => state?.radioRtDistance) || 0;
    const radioLanguage = useSelector((state) => state?.radioLanguage) || 0;

    const handleClickSort = () => {
        setIsSort(pSort => !pSort);
    }

    const handleChangeLanguage = () => {
        setIsLanguage(pLanguage => !pLanguage);
    }

    const handleClickRatingDistance = (value) => {
        dispatch(sortByDistanceRating(value))

    }

    const handleClickLanguage = (value) => {
        dispatch(sortByLanguage(value))
    }

    const handleClearSort = (e) => {
        e.stopPropagation();
        dispatch(clearLanguage());
    }

    const renderLanguage = () => {
        switch (radioLanguage) {
            case 0: {
                return (
                    <div>
                        Ngôn ngữ
                    </div>
                )
            }

            case 1: {
                return (
                    <div className="distance">
                        Tiếng việt <span onClick={(e) => handleClearSort(e)}>x</span>
                    </div>
                )
            }

            case 2: {
                return (
                    <div className="distance">
                        English <span onClick={(e) => handleClearSort(e)}>x</span>
                    </div>
                )
            }

            case 3: {
                return (
                    <div className="distance">
                        Francaise <span onClick={(e) => handleClearSort(e)}>x</span>
                    </div>
                )
            }

            default: {
                return (
                    <div>
                        Ngôn ngữ
                    </div>
                )
            }
        }
    }

    return (
        <>
            <HeaderTitle>
                Danh sách các bác sĩ
            </HeaderTitle>
            <SortWrapperStyled>
                <TextStyled width20>
                    Sắp xếp theo
                </TextStyled>
                <SortItemStyled onClick={() => handleClickSort()} isSort={isSort}>
                    <div className="distance">
                        {radioRtDistance === 0 ? 'Khoảng cách' : 'Đánh giá'}
                    </div>
                    <Dropdown visible={isSort} data={SORT_BY} onClick={(e) => handleClickRatingDistance(e)} value={radioRtDistance} />
                </SortItemStyled>
                <TextStyled isFilter width20>
                    Lọc kết quả
                </TextStyled>

                <SortItemStyled onClick={() => handleChangeLanguage()} isLanguage={isLanguage}>
                    {renderLanguage()}
                    <Dropdown visible={isLanguage} data={FILTER_LANGUAGE} onClick={(e) => handleClickLanguage(e)} value={radioLanguage} />
                </SortItemStyled>
            </SortWrapperStyled>
        </>
    )
}

export default Header;