import { useSelector, useDispatch } from 'react-redux';
import useRestCountries from '../hooks/use-restcountries';
import { continentsActions } from '../store/slices/continents';
import { countriesActions } from '../store/slices/countries';
import Countries from './Countries';

const Continents = () => {
    const dispatch = useDispatch();
    const continents = useSelector<any>(
        state => state.continents.names
    ) as string[];
    const selectedContinent = useSelector<any>(
        state => state.continents.selected
    );

    const getContinentNames = (countryData: { [key: string]: any }[]) => {
        let continents: string[] = countryData.map(c => c.region);

        continents = continents.reduce((acc: string[], val: string) => {
            if (!acc.includes(val)) {
                acc.push(val);
            }
            return acc;
        }, []);

        dispatch(continentsActions.setContinents(continents));
        dispatch(countriesActions.setCountryData(countryData));
    };

    const { isLoading, error } = useRestCountries(
        continents,
        getContinentNames
    );

    const continentHandler = (continent: string) => {
        dispatch(continentsActions.selectContinent(continent));
    };

    const resetHandler = () => {
        dispatch(continentsActions.resetContinent());
    };

    return (
        <>
            {isLoading && <p> LOADING...</p>}
            {error && <p> Something went wrong!</p>}

            {!isLoading &&
                !error &&
                !selectedContinent &&
                continents.map((c: any, index: number) => {
                    return (
                        <button
                            key={index}
                            onClick={continentHandler.bind(null, c)}>
                            {c}
                        </button>
                    );
                })}

            {selectedContinent && (
                <Countries
                    selected={selectedContinent}
                    resetHandler={resetHandler}
                />
            )}
        </>
    );
};
export default Continents;
