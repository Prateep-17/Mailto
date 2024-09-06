import { StyleSheet, Text, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {
  const emails = ["prateepthe7@gmail.com"]
  const sendMail = () => {
    console.log("android "+JSON.stringify(Linking.canOpenURL(`mailto:${emails}`)));
    Linking.canOpenURL(`mailto:${emails}`).then(async ()=>{
      try {
        return await Linking.openURL(`mailto:${emails}`);
      } catch (error) {
        console.log(error);
      }
    })

  }
  return (
    <SafeAreaView>
      <Pressable style={styles.button} onPress={sendMail}>
        <Text>Send Email</Text>
      </Pressable>
    </SafeAreaView>
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
    padding:10,
    margin:10,
    borderRadius:10,
    backgroundColor:'lightblue',
    textAlign:'center'
  }
});
