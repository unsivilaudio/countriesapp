import { useDispatch, useSelector } from 'react-redux';
import { countriesActions } from '../store/slices/countries';

const Sidebar = () => {
    const dispatch = useDispatch();
    const selectedCountries = useSelector(
        (state: any) => state.countries.selectedIds
    );

    const existsCountryInFavorite = (countryName: string) =>
        selectedCountries.includes(countryName);

    return (
        <>
            {' '}
            Sidebar
            {selectedCountries.length > 0 && (
                <ul>
                    {selectedCountries.map((name: string, i: number) => {
                        return (
                            <li key={i}>
                                {existsCountryInFavorite(name) && (
                                    <button
                                        onClick={() => {
                                            console.log(`ADD TO FAV: ${name}`);
                                            dispatch({
                                                type: 'REMOVE_COUNTRIES_CHECKED',
                                                payload: {
                                                    country: name,
                                                    isChecked: true,
                                                },
                                            });

                                            dispatch(
                                                countriesActions.removeCountriesChecked(
                                                    {
                                                        country: name,
                                                        isChecked: false,
                                                    }
                                                )
                                            );
                                            // }
                                        }}>
                                        X
                                    </button>
                                )}

                                <span>{name}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default Sidebar;
