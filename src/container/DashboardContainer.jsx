import React from 'react';
import EmailList from '../components/EmailList.jsx';
import EmailDetail from '../components/EmailDetail.jsx';
import { get } from '../apis/apiHelper.js';
import { connect } from 'react-redux';
import { fetchEmails } from '../action_creatores/emailActionCreators.js'

class DashboardContainer extends React.Component {
  state = {
    emails: [],
    selectedEmail: { body: 'Click on show to get email details' }
  }

  onSubmit = (evt) => {
    this.setState({ selectedEmail: this.state.emails.find( email => email.id == evt.target.id ) });
  }

  componentDidMount() {
    get("http://d4cb1993.ngrok.io/mails/inbox", "", { Authorization: this.props.token })
      .then(jsonResponse => {
        this.setState({ emails: jsonResponse.data });
      })
      .catch(errorResponse => {
        console.log("2222222222222222", errorResponse);
      });
  }

  render() {
    return (
      <div>
        <div>
          Dashboard
        </div>
        <div>
          <EmailList emails={this.state.emails} onSubmit={this.onSubmit}/>
        </div>
        <div>
          <EmailDetail email={this.state.selectedEmail} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = props => {
  return
}

export default connect(mapStateToProps, { fetchEmails: fetchEmails })(DashboardContainer);
