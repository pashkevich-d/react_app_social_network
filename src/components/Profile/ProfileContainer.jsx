import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  getUserProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5499;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile.profile,
  status: state.profile.status
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  //withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);

// posts={props.profile.posts} newPostText={props.profile.newPostText} dispatch={props.dispatch}
