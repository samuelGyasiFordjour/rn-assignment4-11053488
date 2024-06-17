import { Text, View, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import FeaturedJobs from './components/FeaturedJobs';
import PopularJobs from './components/PopularJobs';

export default function HomeScreen({ route }) {
  const { userName, userEmail } = route.params;
  const [searchQuery, setSearchQuery] = useState('');


  const fJobData = [
    { id: '1', fjicon: require('./assets/fb2.png'), fjtitle: 'Software Engineering', fjsubTitle: 'Facebook', amount1: '$12.99', backgroundColor: '#5386E4', backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana' },
    { id: '2', fjicon: require('./assets/google.png'), fjtitle: 'Cybersecurity', fjsubTitle: 'Google', amount1: '$45.00', backgroundColor: '#04284A', backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana' },
    { id: '3', fjicon: require('./assets/Instagram.png'), fjtitle: 'Data Science ', fjsubTitle: 'Instagram', amount1: '$8.75', backgroundColor: '#00796b', backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana' },
    { id: '4', fjicon: require('./assets/whatsapp.jpg'), fjtitle: 'Artificial Intelligence (AI)', fjsubTitle: 'WhatsApp', amount1: '$149.99', backgroundColor: '#5d4037',backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana'  },
    { id: '5', fjicon: require('./assets/YouTube.png'), fjtitle: 'Mobile App', fjsubTitle: 'YouTube', amount1: '$23.50', backgroundColor: '#7b1fa2', backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana' },
    { id: '6', fjicon: require('./assets/Pinterest.png'), fjtitle: 'Computer Networks', fjsubTitle: 'Pinterest', amount1: '$59.99', backgroundColor: '#303f9f', backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana' },
    { id: '7', fjicon: require('./assets/snap.jpg'), fjtitle: 'Computer Graphics', fjsubTitle: 'Snapchat', amount1: '$5.20', backgroundColor: '#0288d1', backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana' },
    { id: '8', fjicon: require('./assets/tictok.jpg'), fjtitle: 'Theory of Computation', fjsubTitle: 'TikTok', amount1: '$199.00', backgroundColor: '#c2185b', backgroundImage: require('./assets/Group.png'), location1: 'Accra, Ghana' },
  ];

  const pJob = [
    { id: '1', icon: require('./assets/job1.png'), title: 'Jr Executive', subTile: 'Burger King',  amount: '$125.99', location: 'Florida' },
    { id: '2', icon: require('./assets/job2.png'), title: 'Analyst', subTile: 'Auditor',  amount: '$150.00', location: 'Los Angeles, US' },
    { id: '3', icon: require('./assets/fb2.png'), title: 'Manager', subTile: 'Broker',  amount: '$199.99', location: 'New York, US' },
    { id: '4', icon: require('./assets/google.png'), title: 'Engineer', subTile: 'Editor',  amount: '$225.50', location: 'Chicago, US' },
    { id: '5', icon: require('./assets/job1.png'), title: 'Designer', subTile: 'Marketer',  amount: '$300.00', location: 'Houston, US' },
    { id: '6', icon: require('./assets/job2.png'), title: 'Developer', subTile: 'Planner',  amount: '$450.75', location: 'Miami, US' },
    { id: '7', icon: require('./assets/fb2.png'), title: 'Consultant', subTile: 'Recruiter',  amount: '$500.00', location: 'Seattle, US' },
    { id: '8', icon: require('./assets/google.png'), title: 'Director', subTile: 'Scientist',  amount: '$625.99', location: 'Boston, US' },
    { id: '9', icon: require('./assets/whatsapp.jpg'), title: 'Advisor', subTile: 'Trainer',  amount: '$750.00', location: 'Denver, US' },
    { id: '10', icon: require('./assets/tictok.jpg'), title: 'Technician', subTile: 'Writer', amount: '$899.99', location: 'San Francisco, US' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
          <Text style={styles.title}>{userName}</Text>
          <Text style={styles.email}>{userEmail}</Text>
          </View>
          <TouchableOpacity>
          <Image source={require("./assets/profile.png")} style={styles.profileImage} />
          </TouchableOpacity>
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

        <View style={styles.jobCat}>
          <Text style={styles.jobs}>Featured Jobs</Text>
          <Text style={styles.seemore}>See all</Text>
        </View>

        <FlatList
          data={fJobData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <FeaturedJobs
              fjicon={item.fjicon}
              fjtitle={item.fjtitle}
              fjsubTitle={item.fjsubTitle}
              amount1={item.amount1}
              location1={item.location1}
              backgroundColor={item.backgroundColor}
            />
          )}
          keyExtractor={item => item.id}
        />


        <View style={styles.jobCat}>
            <Text style={styles.jobs}>Popular Jobs</Text>
            <Text style={styles.seemore}>See all</Text>
        </View>  
        
        <FlatList
          data={pJob}
          renderItem={({ item }) => (
            <PopularJobs
              historyIcon={item.icon}
              title={item.title}
              subTile={item.subTile}
              amount={item.amount}
              location={item.location}
            />
          )}
          keyExtractor={item => item.id}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAFAFD',
    paddingTop: 40,
    
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
  jobCat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    margin: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  seemore: {
    alignItems: 'center',
    color: '#95969D',
  },
  jobs: {
    color: '#0D0D26',
    fontSize: 18,
    fontWeight: '700',
    
  },
});
