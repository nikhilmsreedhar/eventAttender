import React from 'react';
import {View, StyleSheet, Text,Dimensions} from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const EventCard = ({
    title, 
    description,
    date,
    startTime,
    endTime,
    atendees,
}) => {
    return (
      <View style={styles.containerCardItem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text>{date}</Text>
        <Text>{startTime}</Text>
        <Text>{endTime}</Text>
        <Text>-</Text>
        <Text>{atendees}</Text>
      </View>
   );
}
 

  const styles = StyleSheet.create({
    containerCardItem: {
    height: SCREEN_HEIGHT - 160,
    width: SCREEN_WIDTH - 30,
    paddingVertical: 50,
		backgroundColor: 'white',
		borderRadius: 8,
		alignItems: "center",
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
    }
});
  
export default EventCard;