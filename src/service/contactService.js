import { authHeader } from "../helpers";

export const contactService = {
    addContact
};

function addContact(firstName, lastName, email, phone, comments){

    const requestOptions = {
        method: "GET",
        headers: authHeader()
    };
    return fetch(`${"http://localhost:8080/Contact/addContact/firstName/"+firstName+"/lasName/"+lastName+"/email/"+email+"/phone/"+phone+"/comments/"+comments}`, requestOptions);
}
