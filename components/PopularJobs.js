import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PopularJobs = ({ historyIcon,  }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
       <Image source={historyIcon} style={styles.icon} />
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 7,
    paddingBottom: 10,
    height: 80,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 7,
    
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,   
    height: 70, 
    borderRadius: 10,
    marginRight: 10
  },
  icon: {
    width: 50,
    height: 50, 
  },
  
  
});

export default PopularJobs;
