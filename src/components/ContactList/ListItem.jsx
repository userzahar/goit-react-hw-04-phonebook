import { ItemStyled } from "./ListItemStyled";
import PropTypes from "prop-types";
export function LI({ contact, children}) {
    const { name, number } = contact;
    return <ItemStyled>
        <p>{name}</p>
        <span>:</span>
        <p>{number}</p>
        {children}
    </ItemStyled>
}

LI.propTypes = {
  contact: PropTypes.object,
    children: PropTypes.element,
};

