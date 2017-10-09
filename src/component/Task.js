import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ActivityIndicator, View, ScrollView } from 'react-native';
import SearchBlog from './SearchBlog';
import Blog from './Blog';


class Task extends Component {
/******************************************************************/
  //************** Return blog ************************
  /******************************************************************/
  renderBlog() {
    if (this.props.Task.loadingBlog) {
      return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size='large' color='#3399ff' />
      </View>
    );
    }
  console.log('hello');
    if (_.isEmpty(this.props.Task.blog)) {
      return null;
    }

    return (
    <View>
        <Blog />
    </View>
  );
  }
render() {
  return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

          <SearchBlog />
          {this.renderBlog()}

      </ScrollView>

  );
}
}

const mapStateToProps = (state) => {
  return {
      Task: state.Task
  };
};
export default connect(mapStateToProps, null)(Task);
