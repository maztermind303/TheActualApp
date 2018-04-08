import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class App extends Component {
  state = { screen: 'Home' }

  render() {
    return(
      <View>
        <Card>
          <Button />
          <Text style={styles.headerStyle}> NHSN </Text>
        </Card>
        <Card>
          <HomePage />
        </Card>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    margin: 20,
    padding: 10,
    fontSize: 10
  },
};

export default App;
