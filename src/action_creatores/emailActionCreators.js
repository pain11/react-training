import { get } from '../apis/apiHelper.js';

const fetchingEmailIsSucceeded = (emailList = []) => {
  return {
    type: 'FETCHING_EMAIL_IS_SUCCEEDED',
    payload: {
      emailList
    }
  }
}

const fetchingEmailIsFailed = (errorMsg) => {
  return {
    type: 'FETCHING_EMAIL_IS_FAILED',
    payload: {
      errorMsg
    }
  }
}

export const fetchEmails = () => {
  return dispatch => {
    return get('http://d4cb1993.ngrok.io/mails/inbox', '')
      .then(jsonResponse => {
        dispatch(fetchingEmailIsSucceeded(jsonResponse.data))
      })
      .catch(jsonResponse => {
        dispatch(fetchingEmailIsFailed(jsonResponse.data))
      })
  }
}
