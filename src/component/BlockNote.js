import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList } from 'react-native';
import NoteItem from './NoteItem';
import { scale, scaleVertical } from '../constants/scale';

class BlockNote extends Component {
  renderEmptyList = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View>
      <Text> you dont have any note </Text>
    </View>
    </View>
  );
}
  renderSeparator = () => {
      return (
        <View
          style={{
            height: scaleVertical(3),
            width: '100%',
            backgroundColor: '#CED0CE',
            marginTop: 5,
            marginBottom: scaleVertical(5)

          }}
        />
      );
    };

render() {
  return (
    <ScrollView>
    <View style={{ backgroundColor: '#fff' }}>
      <FlatList
         data={this.props.Task.notes}
         renderItem={({ item }) =>
       <NoteItem
           note={item}
       />
       }
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.renderSeparator}
        ListEmptyComponent={this.renderEmptyList}
      />
      </View>
    </ScrollView>
  );
}
}

const mapStateToProps = (state) => {
  return {
      Task: state.Task
  };
};
export default connect(mapStateToProps, null)(BlockNote);
