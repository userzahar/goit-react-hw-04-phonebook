import { ButtonStyled } from "./ButtonStyled"
import PropTypes from "prop-types";
export function Button({ text, clickHeandler }) {
    return <ButtonStyled onClick={clickHeandler}>{text}</ButtonStyled>
}

Button.propTypes = {
  text: PropTypes.string,
    clickHeandler: PropTypes.func,
};