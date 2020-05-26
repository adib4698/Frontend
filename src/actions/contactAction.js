import { tutorialConstants } from "../constants";
import {contactService} from "../service";
import {history} from "../helpers";

export  const contactAction = {
    addContact
};
function addContact(firstName, lastName, email, phone, comments){

    return (dispatch) => {
        dispatch(request());
        contactService.addContact(firstName, lastName, email, phone, comments).then(
            history.push("/"),
            alert("Contact Sent")
        );

    };
    function request() {
        return { type: tutorialConstants.ADD_TUTORIAL_REQUEST};
    }

}

