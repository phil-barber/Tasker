import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';
import TaskerStatusBar from './TaskerStatusBar';

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title='Info'
          color='red'
        />
      )
    }
  };

  render() {
    return (
      <View style={styles.app}>
        <TaskerStatusBar />
        <Toolbar />
        <View style={styles.container}>
          <Button 
            title="touch me baby"
            onPress={() => this.props.navigation.navigate('SecondScreen')}
          />
          <Text>Working with redux!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {

  return { 
  };
}

export default connect(mapStateToProps)(Home);
