const defaultState = { USER_STATE: null };
const userReducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'CREATE_USER':
			return {
				...state,
				USER_STATE: action.success
			}
		case 'CREATE_USER_ERROR':
			return {
				...state,
				USER_STATE: action.error
			}
		case 'USER_LOGGED_IN':
			return {
				...state,
				USER_STATE: action.success
			};
		case 'USER_LOGGED_IN_ERROR':
			return {
				...state,
				USER_STATE: action.error
			};
		case 'SEAL_LOGGED_IN':
			return {
				...state,
				USER_STATE: action.success
			};
		case 'CLEAR_ERROR':
			return {
				...state,
				USER_STATE: null
			}
		default:
			return state;
	}
}
export default userReducer;