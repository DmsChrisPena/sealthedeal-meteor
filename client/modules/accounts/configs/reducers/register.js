const defaultState = { USER_STATE: null };
const accountsReducers = (state = defaultState, action) => {
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
		case 'CLEAR_ERROR':
			return {
				...state,
				USER_STATE: null
			}
		default:
			return state;
	}
}
export default accountsReducers;