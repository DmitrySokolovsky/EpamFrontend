import { TOGGLE_FORM, VALUE_CHANGE } from "../actions/form-action.types";

const logger = store => next => action => {
    console.log("Тип события" + action.type);
    console.log(action.payload);
    return next(action);
};

export default logger;
