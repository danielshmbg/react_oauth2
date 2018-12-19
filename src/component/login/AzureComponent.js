import React from 'react';
import createReactClass from 'create-react-class';
import Azure  from '../auth/Azure';
// import cookie from 'react-cookies'

let AzureComponent = createReactClass({
  getInitialState: function () {
    return {
      "data": {
        "id": "", "name": "", "email": "", "gender": "", "location": { "id": "", "name": "" }
      }
    };
  },

  azure: function (err, res) {
    if (!err) {
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  },

  render: function () {
    return <div>
      <Azure
        url={'http://localhost:3000'}
        clientId={'298a5a83-79b5-4904-aa92-fcb9ebd26273'}
        clientSecret={'qaDnl5vdusj7/xfr0SIXAZ4iVPCE4xcfrHqI0MjCwv0='}
        redirectUri={'http://localhost:3000'}
        scope={['openid']}
        response_type={'id_token'}
        width={300}
        height={300}
        callback={this.azure}
        style={{ color: 'green' }}
      >
        Login With Google From component
  </Azure>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
});

export default AzureComponent;