import PropTypes from 'prop-types';
import s from './ContactElement.module.css';

export const ContactElement = ({ name, number, id, onDeleteContact }) => {
    return (
        <>
            <p className={s.contact}>{name}: <span className={s.tel}>{number}</span></p>
            <button
                type="button"
                className={s.btn}
                onClick={()=>onDeleteContact(id)}
            >
                Delete
            </button>
        </>
    )
}

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};