import { Button } from "components/Button/Button";
import { LabelStyled } from "components/Filter/FilterStyled";
import { nanoid } from "nanoid";
import { InputStyled } from "./StyledInput";
const { Component } = require("react");

export class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    inputId = nanoid();
    inputIdNew = nanoid();
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let cteateContact = this.props.createContacts({
            name: this.state.name,
            number: this.state.number
        })
        if (cteateContact === undefined) {
            this.reset();
        }
    }
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <LabelStyled htmlFor={this.inputId}>Name</LabelStyled>
            <InputStyled
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={this.state.name}
                id={this.inputId}
            />

            <LabelStyled htmlFor={this.inputIdNew}>Number</LabelStyled>
            <InputStyled
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={this.state.number}
                id={this.inputIdNew}
            />
            <Button text="Add Contact" />
        </form>

    }
}