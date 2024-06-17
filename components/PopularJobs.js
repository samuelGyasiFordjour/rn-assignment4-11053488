import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PopularJobs = ({ historyIcon,  }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
       <Image source={historyIcon} style={styles.icon} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTile}>{subTile}</Text>
      </View>
      <View style={styles.infoContain}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.subTile}>{location}</Text>
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
  infoContainer: {
    flex: 1,
  },
  infoContain: {
    flexDirection:'column',
    marginRight: 20,
  },
  title: {
    color: '#0D0D26',
    fontSize: 14,
    fontWeight: '600',
  },
  subTile: {
    color: '#95969D',
    fontSize: 13,
    
  },
  amount: {
    color: '#0D0D26',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
    
  },
  
});

export default PopularJobs;
