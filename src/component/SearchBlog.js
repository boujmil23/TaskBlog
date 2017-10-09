import React, { Component } from 'react';
import { View } from 'react-native';
import { Item, Input, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchBlog } from '../actions/TaskAction';
import { scale, scaleVertical } from '../constants/scale';


// **********************************validation**********************
const validate = values => {
const error = {};
error.siteID = '';
 console.log(error);
var re = new RegExp('^[0-9]+$');

var ema = values.siteID;
console.log(ema)
  console.log(re.test(ema));
if (values.siteID === undefined){
  //error.siteID = 'empty';
  ema = '';
}
if (!values.siteID) {
    error.siteID = 'Enter a blog ID';
  }
  if(!re.test(ema)) {
    error.siteID = 'Invalid number'
  }
if (ema.length < 5 && ema !== '' && re.test(ema)) {
  error.siteID = 'Min 5 digit';
}
if (ema.length >= 5 && ema.length <= 7 && (parseInt(ema, 10) % 5 == 0)) {
  error.siteID = 'Should not be divisible by 5';

}

if (ema.length > 7) {
  error.siteID = 'Max 7 digit';
}

return error;
};
//************************ Class  Search Blog ********************
class SearchBlog extends Component {
  constructor(props) {
   super(props);
   this.renderInput = this.renderInput.bind(this);
 }
 //****************** Button Search Blog **************************
  buttonPress() {
    console.log(this.props.form.test.syncErrors.siteID);
    if (this.props.form.test.syncErrors.siteID === "" ) {
           console.log(this.props.form.test.values.siteID);
          const siteID = parseInt(this.props.form.test.values.siteID, 10)
          console.log(siteID);
           this.props.fetchBlog({ siteID });
    }
  }
  //******************* Component Input with validation *****************************
  renderInput({ input, meta: { touched, error, warning } }) {
  var hasError = false;
  if (error !== undefined) {
    hasError = true;
  }
     return (
       <Item style={{ margin: scale(10), backgroundColor: '#9C9C9C', height: scaleVertical(50) }} error={hasError}>
            <Input
             style={{ fontSize: scale(25), color: '#fff', alignSelf: 'center' }}
        keyboardType='numeric'
             {...input}
            />
            {hasError ? <Text style={{ color: 'red', paddingRight: scale(7) }}>{error}</Text> : <Text />}
        </Item>
                );
}

//****************************** MAin ********************************
  render() {
    return (
      <View style={{ backgroundColor: '#eafcf9', padding: scale(10) }}>
        <Field name="siteID" component={this.renderInput} />
        <Button style={{ width: scale(130), alignSelf: 'center' }} block rounded primary onPress={this.buttonPress.bind(this)}>
               <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>Search blog</Text>
        </Button>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.form,

   };
};
export default reduxForm({
  form: 'test',
  fields: 'siteID',
  validate
})(connect(mapStateToProps, { fetchBlog })(SearchBlog));
