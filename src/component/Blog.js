import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import BlockNote from './BlockNote';
import { scale, scaleVertical } from '../constants/scale';

class Blog extends Component {
renderBlockNote() {
  if (this.props.Task.loadingDelete) {
    return (
      <View
        style={{
          paddingVertical: scaleVertical(20),
          borderTopWidth: scale(1),
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size='large' />
      </View>
    );
  }
  return (
    <View style={{ paddingTop: scaleVertical(30) }}>
        <BlockNote />
    </View>
  )
}

render() {
  return (
    <View style={{ backgroundColor: '#fff', padding: scale(15) }}>
         <View>
             <Text style={{ fontSize: scale(25), alignSelf: 'center', fontWeight: 'bold', color: '#000' }}>
                    {this.props.Task.blog.title}
              </Text>
             <Text style={{ alignSelf: 'flex-end', fontSize: scale(17), paddingTop: scaleVertical(10), fontFamily: 'italic' }}>
                {this.props.Task.blog.blogger}
            </Text>
          </View>
          {this.renderBlockNote()}
      </View>
  );
}
}

const mapStateToProps = (state) => {
  return {
      Task: state.Task
  };
};
export default connect(mapStateToProps, null)(Blog);
