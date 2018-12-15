import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  /**
   *  componentWillReceiveProps 
   * 
   *  componentWillReceiveProps will be called whenever we are about to receive a new set of props
   *  to rerun for component with.
   *  it gets called with the new set of props that the company is about to be fed 
   *  and it's captured as first argument to the method 
   */
   

  renderRow(employee) {
    return <EmployeeListItem employee={employee.item} />;
  }

  render() {
    return (
      <FlatList 
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; 
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
