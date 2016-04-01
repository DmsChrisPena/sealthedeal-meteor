const defaultState = { STEP_STATE: 'step1' };
const stepReducers = (state = defaultState, action) => {
	switch(action.type) {
		case 'STEP1':
			return {
				...state,
				STEP_STATE: action.step
			}
		case 'USER_STEP2':
			return {
				...state,
				STEP_STATE: action.step,
				stepInfo: action.stepInfo
			}
		case 'VENDOR_STEP2':
			return {
				...state,
				STEP_STATE: action.step,
				stepInfo: action.stepInfo
			}
		default:
			return state;
	}
}
export default stepReducers;