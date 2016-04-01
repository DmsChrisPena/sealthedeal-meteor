const defaultState = { REGISTER_STATE: null };
const registerReducers = (state = defaultState, action) => {
	switch(action.type) {
		case 'CREATE_USER':
			return {
				...state,
				REGISTER_STATE: action.success
			}
		case 'CREATE_USER_ERROR':
			return {
				...state,
				REGISTER_STATE: action.error
			}
		case 'CLEAR_ERROR':
			return {
				...state,
				REGISTER_STATE: null
			}
		default:
			return state;
	}
}
export default registerReducers;