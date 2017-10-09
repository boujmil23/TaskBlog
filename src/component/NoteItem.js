import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { deleteNote } from '../actions/TaskAction';
import { scale, scaleVertical } from '../constants/scale';


class NoteItem extends Component {
  onButtonDelete() {
    const noteID = this.props.note.id;


    this.props.deleteNote({ noteID });
  }
render() {
  return (

        <View style={{ height: scaleVertical(60), justifyContent: 'space-between', paddingLeft: scale(20), flexDirection: 'row', alignItems: 'center', backgroundColor: '#b3ecff' }}>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={require('../constants/assets/icons/item.png')}
                style={{ width: scale(30), height: scaleVertical(30), alignSelf: 'stretch' }}
               />
            <Text style={{ fontSize: scale(20), paddingLeft: scale(3), fontWeight: 'bold', color: '#669999' }}>
                {this.props.note.title}
              </Text>
          </View>
          <TouchableOpacity
          onPress={() => Alert.alert(
               'Warning',
               'Delete note?',
               [
                 { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                 { text: 'OK', onPress: this.onButtonDelete.bind(this) },
               ]
             )}
          >
          <View style={{ justifyContent: 'center', height: scaleVertical(60), width: scale(50) }}>
            <Image
              source={require('../constants/assets/icons/x-button.png')}
              style={{ width: scale(30), height: scaleVertical(30) }}
            />
          </View>
          </TouchableOpacity>
        </View>


  );
}
}

const mapStateToProps = (state) => {
  return {
      Task: state.Task
  };
};
export default connect(mapStateToProps, {
  deleteNote
})(NoteItem);
