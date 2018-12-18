import React, {
  Component
}
from 'react';
import {
  View, Text, StyleSheet
}
from 'react-native';
import {Icon} from 'native-base';

class AddMediaTab extends Component {

static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" 
      style={{ color: tintColor }} />
      )
  }

  render() {
    return ( 
      <View style={styles.container}>
      <Text>AddMedia</Text> 
      </View >
    );
  }
}
export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
