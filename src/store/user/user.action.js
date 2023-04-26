import {createAction} from "../../utils/reducer/reducer.utils";
import {USER_ACTION_TYPE} from "../../contexts/user.context";

const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user))
}