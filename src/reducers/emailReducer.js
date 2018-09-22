const initialize = {
  emailList: []
}

const emailReducer = ( state=initialState, action) => {
  switch(action.type) {
    case 'FETCHING_EMAIL_IS_SUCCEEDED':
      return state;
    case emailActions.fetchingEmailIsFailed:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default emailReducer;
