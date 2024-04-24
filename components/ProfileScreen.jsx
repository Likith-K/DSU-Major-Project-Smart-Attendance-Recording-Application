import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={require('C:/Users/Likith K/Documents/Projectattend/assets/Profile-icon.png')}
        style={styles.profilePicture}
      />
      
      {/* ID */}
      <Text style={styles.text}>ID: ABC123</Text>
      
      {/* Name */}
      <Text style={styles.text}>Name: John Doe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 75, // to make it circular, adjust size accordingly
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
