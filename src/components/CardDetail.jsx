import React from 'react';
import { CardDetailWrapperStyled, ImageWrapperStyled, InfoWrapperStyled, NameStyled, StarStyled, SpecialtyStyled, ClinicName, ClinicAddress } from '../stylesheets/CardDetail';
import { calculateRating } from '../utils/functUtil';
import { RATING } from '../utils/ENUM';

const CardDetail = (props) => {
    let totalPatient = 30; // because the data doesn't have the total number of patients;
    const { avatar, clinic_address, clinic_name, display_name, rating, specialty } = props;
    const rate = calculateRating(rating)

    const renderStar = () => {
        switch (rate) {
            case RATING.ONE: {
                return (
                    <StarStyled>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div>
                            <span className="total-patient">{totalPatient} bệnh nhân</span>
                        </div>
                    </StarStyled>
                )
            }

            case RATING.TWO: {
                return (
                    <StarStyled>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div>
                            <span className="total-patient" Patient>{totalPatient} bệnh nhân</span>
                        </div>
                    </StarStyled>
                )
            }

            case RATING.THREE: {
                return (
                    <StarStyled>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div>
                            <span className="total-patient">{totalPatient} bệnh nhân</span>
                        </div>
                    </StarStyled>
                )
            }

            case RATING.FOUR: {
                return (
                    <StarStyled>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div>
                            <span className="total-patient">{totalPatient} bệnh nhân</span>
                        </div>
                    </StarStyled>
                )
            }

            case RATING.FIVE: {
                return (
                    <StarStyled>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <div>
                            <span className="total-patient">{totalPatient} bệnh nhân</span>
                        </div>
                    </StarStyled>
                )
            }

            default: return null;
        }
    }

    return (
        <CardDetailWrapperStyled>
            <ImageWrapperStyled src={avatar} />
            <InfoWrapperStyled>
                <NameStyled>
                    {display_name}
                </NameStyled>
                {renderStar()}
                <SpecialtyStyled>
                    {specialty[0]?.name || ''}
                </SpecialtyStyled>
                <ClinicName>
                    {clinic_name}
                </ClinicName>
                <ClinicAddress>
                    {clinic_address}
                </ClinicAddress>
            </InfoWrapperStyled>
        </CardDetailWrapperStyled>
    )
}

export default CardDetail;