import React from 'react';

const User = React.createClass({
  render() {
    return (
      <div>
        User

        {this.props.children}
      </div>
    );
  }
});

export default User;
