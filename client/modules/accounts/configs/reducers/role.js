const defaultState = { ROLE_STATE: "User" };
const roleReducers = (state = defaultState, action) => {
	switch(action.type) {
		case 'ROLE_USER':
			return {
				...state,
				ROLE_STATE: action.role
			}
		case 'ROLE_VENDOR':
			return {
				...state,
				ROLE_STATE: action.role
			}
		default:
			return state;
	}
}
export default roleReducers;