import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Text, Pressable, Linking } from 'react-native';


export default function TabTwoScreen() {
  const sendMail = () => {
    return Linking.openURL('mailto://prateepthe7@gmail.com&subject=abcdefg&body=body')

  }
  return (
    <Pressable style={styles.button} onPress={sendMail}>
      <Text>Send Email</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button:{
    backgroundColor:'blue'
  }
});
