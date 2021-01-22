import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'red'}}/>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('/assets/dean.jpg')} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'purple'}}/>
        <Text style={styles.name}>Dean (he/him)</Text>
        <Text style={styles.description}>
          I am an undergraduate junior majoring in Computer Science. I love to
          play tennis, go on hikes with my siblings, and watch CS 47 lectures!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#64493D',
    borderBottomRightRadius: 75,
    borderTopLeftRadius: 75,
    flex: 2,
    // padding: 30,
    borderRadius: 10,
    // overflow: 'hidden',
    justifyContent: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: '90%',
  },
  bottomContainer: {
    backgroundColor: '#0A2C47',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    borderTopLeftRadius: 75,
  },
  name: {
    color: '#E6DAC7',
    fontSize: 30,
    paddingBottom: 30,
  },
  description: {
    color: '#E6DAC7',
    fontSize: 16,
    textAlign: 'justify',
  }
});
