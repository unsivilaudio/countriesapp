import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../store/slices/countries';
import CountryDetails from './CountryDetails';

const CountryItem = ({ country, isSelected }: any) => {
    const dispatch = useDispatch();
    const countryData = useMemo(() => country, [country]);
    const [countryClicked, setCountryClicked] = useState('');
    const [showModal, setShowModal] = useState(false);

    const showModalDetailsHandler = (countryData: string) => {
        setShowModal(true);
        setCountryClicked(countryData);
    };

    const hideModalDetailsHandler = () => {
        setShowModal(false);
        setCountryClicked('');
    };

    console.log('<CountryItem /> RE RENDER');

    return (
        <div>
            <span>{countryData.name.common}</span>
            <button
                style={{ cursor: 'pointer' }}
                onClick={() =>
                    showModalDetailsHandler(countryData.name.common)
                }>
                See Details
            </button>
            {!isSelected && (
                <button
                    onClick={() => {
                        dispatch(
                            countriesActions.addCountriesChecked({
                                country: countryData.name.common,
                                isChecked: true,
                            })
                        );
                    }}>
                    Add Fav
                </button>
            )}
            {isSelected && <span>FAV</span>}
            {countryClicked && showModal && (
                <CountryDetails
                    name={countryClicked}
                    onClose={hideModalDetailsHandler}
                />
            )}
        </div>
    );
};
export default React.memo(CountryItem);
