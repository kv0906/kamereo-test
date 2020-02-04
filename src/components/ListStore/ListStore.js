import React, { Component } from 'react';
// import { isEmpty } from 'lodash';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { handleListStoreFetch } from '../../App/AppAction';

import ListStoreItem from './ListStoreItem'

import './styles.scss'

class ListStore extends Component {


  componentDidMount() {
    this.props.handleListStoreFetch();
  }

  render() {
    if (this.props.listStore === null) {
      return null;
    }
    const { listStore } = this.props;
    return (
      <div className="list-store-wrapper">
        {listStore.map((item) => {
          return (
            <ListStoreItem data={item}/>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listStore: state.app.listStore,
  loading: state.app.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleListStoreFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListStore));
