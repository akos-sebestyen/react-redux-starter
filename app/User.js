import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './userReducer';

class BaseUser extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div className="container">
      <h1>User Fetcher</h1>
      <p>User: {this.props.user.name}</p>
      <button onClick={this.props.fetchUser}>Fetch</button>
      {this.props.user.isLoading && <p>Loading User...</p>}
    </div>
  }
}

const User = connect(
  ({user})=>({user}),
  {fetchUser}
)(BaseUser);

export default User;