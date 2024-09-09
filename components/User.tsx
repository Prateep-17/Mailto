import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

interface UserProps {
  item: { id: string; name: string };
  onPress: (id: string) => void;
}

const User = ({ item, onPress }: UserProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.button}>{item.name}</Text>
      <Pressable onPress={() => onPress(item.id)}>
        <View style={styles.icon}>
          <Entypo name="mail" size={24} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    width: '40%',
    borderRadius: 10,
    backgroundColor: 'lightblue',
    textAlign: 'center',
  },
  icon: {
    flex: 1,
    paddingTop: 15,
    verticalAlign: 'middle',
    alignItems: 'center',
  },
});

export default User;