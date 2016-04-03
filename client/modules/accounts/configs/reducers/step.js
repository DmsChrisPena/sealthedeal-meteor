const defaultState = { STEP_STATE: 'step1' };
const stepReducers = (state = defaultState, action) => {
	switch(action.type) {
		case 'STEP1':
			return {
				...state,
				STEP_STATE: action.step,
				stepInfo: action.stepInfo
			}
		case 'USER_STEP2':
			return {
				...state,
				STEP_STATE: action.step,
				stepInfo: action.stepInfo
			}
		case 'USER_STEP2_GEOLOCATED':
			return {
				...state,
				STEP_STATE: action.step,
				stepInfo: action.stepInfo,
				locationInfo: action.locationInfo
			}
		case 'VENDOR_STEP2':
			return {
				...state,
				STEP_STATE: action.step,
				stepInfo: action.stepInfo
			}
		case 'VENDOR_STEP2_LOCATED':
			return {
				...state,
				STEP_STATE: action.step,
				stepInfo: action.stepInfo,
				businessLocation: action.businessLocation
			}
		case 'PREVIOUS_STEP':
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