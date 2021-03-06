import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestApi } from 'actions/api';

class home extends React.Component {
  componentDidMount() {
    this.props.actions.requestApi({
      method: 'get',
      path: '/test',
    });
  }
  render() {
    const { apiReady, apiError, apiData } = this.props.api;

    return (
      <div>
        {!apiReady && <p>Loading data...</p>}
        {apiError && <p>Loading data ERROR.</p>}
        <p>{apiReady && apiData.message}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    requestApi,
  }, dispatch),
});

// connect App with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
