import PropTypes from 'prop-types';
import { ContactElement } from "../ContactElement/ContactElement";
import s from './ContactList.module.css'
export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={s.list}>
            {contacts.map(({id, name, number}) => {
                return (
                    <li className={ s.item} key={id}>
                        <ContactElement
                            name={name}
                            number={number}
                            id={id}
                            onDeleteContact={onDeleteContact}
                        />
                    </li>
                )  
            })}
            
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    )
}