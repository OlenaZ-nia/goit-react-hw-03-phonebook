import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    nameInputId = nanoid();

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    handleClick = () => {
        
     };

    render() {
        const { name, number } = this.state;
       return (
        <form className={s.form} onSubmit={this.handleSubmit}>
            <label className={s.label}> Name
                <input className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                       onChange={this.handleChange}
                       id={this.nameInputId}
                       value={name}
                />
            </label>
            <label className={s.label}> Namber
                <input className={s.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                       onChange={this.handleChange}
                       value={number}
                />
            </label>
            <button type="submit" className={s.btnAddContact}>
                <span className={s.btnText}>Add contact</span>
            </button>
            
        </form>
    )
   } 
}
export default ContactForm

ContactForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
}
