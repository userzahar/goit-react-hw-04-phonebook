import { Button } from "components/Button/Button";
import { LI } from "./ListItem";
import { ListStyled } from "./StyledContactList";
import PropTypes from "prop-types";
export function ContactList({ filterList, deleteItem }) {
        return <ListStyled>
            {filterList().map((contact) => (
                <LI key={contact.id} contact={contact}>
                    <Button text="Delete" clickHeandler={()=>deleteItem(contact.id)}/>
                </LI>)
                )}
            </ListStyled>
}
    
ContactList.propTypes = {
    filterList: PropTypes.func,
    deleteItem: PropTypes.func,
}