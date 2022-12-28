import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ user, userId, fetchUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  if (!user) {
    return null;
  }
  return <div className="header">{user.name}</div>;
};

//ownProps contains the props that was passed into the UserHeader component
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
