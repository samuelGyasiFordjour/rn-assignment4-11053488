import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FeaturedJobs = ({ fjicon, fjtitle, fjsubTitle, amount1, location1, backgroundColor, backgroundImage }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={[styles.cardContainer,{ backgroundImage }]}>
        <View style={styles.topRow}>
          <View style={styles.imageContainer1}>
            <Image source={fjicon} style={styles.fjicon} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.fjtitle}>{fjtitle}</Text>
            <Text style={styles.fjsubTitle}>{fjsubTitle}</Text>
          </View>
        </View>

         <View style={styles.bottomRow}>
          <Text style={styles.amount1}>{amount1}</Text>
          <Text style={styles.location1}>{location1}</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 24,
    padding: 3,
    width: 280,  
    height: 186, 
    justifyContent: 'space-between',
    marginHorizontal: 10,
    position: 'relative', 
    
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer1: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  fjicon: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flexDirection: 'column',
  },
  fjtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  fjsubTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
  amount1: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
  },
  location1: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FeaturedJobs;
