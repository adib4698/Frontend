import { store } from "../helpers/store";

export function authHeader() {
  let authentication = store.getState().authentication;
  if (authentication && authentication.jwtToken) {
    return { Authorization: authentication.jwtToken };
  } else {
    return {};
  }
}
