import React, { Component } from 'react';
// Redux
// import { connect } from 'react-redux';
// import { getUser } from '../redux/reducer/user/actions';
// Routes
import routes from '../router/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        { routes }
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   user: state.user
// });

// const mapDispatchToProps = {
//   getUser
// };

// export default connect( mapStateToProps, mapDispatchToProps, null, { pure: false } )( App );
export default App;
