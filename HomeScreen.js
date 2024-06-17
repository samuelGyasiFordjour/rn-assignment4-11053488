import { Text, View, SafeAreaView, ScrollView, Image, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';


export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
          <Text style={styles.title}>Eric Atsu</Text>
          <Text style={styles.email}>eric@gmail.com</Text>
          </View>
          <Image source={require("./assets/profile.png")} style={styles.profileImage} />
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Image source={require('./assets/searchicon.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a job or position"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <Image source={require('./assets/filter.png')} style={styles.filterImage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAFAFD',
    paddingTop: 20,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  title: {
    color: '#0D0D26',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: -0.01,
    textAlign: 'left',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#F2F2F3',
    height: 50,

  },
  searchIcon: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    fontWeight: 'bold',
    border: 'none',
    color: '#95969D',
  },

  filterImage: {
    width: 30,
    height: 30,
    marginLeft: 12,
    borderWidth: 2,
    borderColor: '#FAFAFD',
  },
  email: {
    color: '#95969D',
    fontSize: 18,
  },
  
});
