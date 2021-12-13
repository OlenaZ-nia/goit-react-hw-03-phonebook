import PropTypes from 'prop-types';
import s from './SearchFilter.module.css';

const SearchFilter = ({value, onChange}) => {
    return (
            <label className={s.label}> Find contacts by name
            <input
                className={s.searchInput}
                type="text"
                name="query"
                value={value}
                autoComplete="off"
                placeholder="Search contact"
                onChange={onChange}
            />
            </label>
        );
}
export default SearchFilter

SearchFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}