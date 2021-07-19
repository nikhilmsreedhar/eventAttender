import React from 'react';
import {View, StyleSheet, Text, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const BUFFER = (Dimensions.get('window').width) * 0.2
const HBUFFER = (Dimensions.get('window').height) * 0.25

const EventCard = ({
  title, 
  description,
  date,
  startTime,
  endTime,
  attendees,
}) => {
  return (
    <View style={styles.containerCardItem}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{date}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>{startTime}</Text>
        <Text> - </Text>
        <Text>{endTime}</Text>
      </View>
      <Text style={styles.info}>{attendees}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCardItem: {
    height: SCREEN_HEIGHT - HBUFFER,
    width: SCREEN_WIDTH - BUFFER,
    paddingVertical: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 }
  }, 
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 20,
    margin: 10,
  },
  info: {
    margin: 10,
  }
});
  
export default EventCard;