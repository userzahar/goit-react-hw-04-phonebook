import { InputStyled } from "components/Form/StyledInput";
import { LabelStyled } from "./FilterStyled";
import PropTypes from "prop-types";
export function Filter ({handleChange}) {
        return <>
            <LabelStyled htmlFor="filter">Find Contacts By Name </LabelStyled>
            <InputStyled type="text" id="filter" name="filter" onChange={handleChange} />
        </>
}

Filter.propTypes = {
    handleChange:PropTypes.func,
}
