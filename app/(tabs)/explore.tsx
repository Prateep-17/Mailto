import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, Pressable, Linking, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {
  const emails = ["prateepthe7@gmail.com","jenny@gmail.com","ram@gmail.com","kumar@gmail.com","geetha@gmail.com","alice@gmail.com"];
  const subject = "MailTo-Check";
const body = "Hi, This is a mail check.";
  const sendMail = () => {
    // return Linking.openURL(`mailto:${emails}cc=&subject=abcdefg&body=body`)
    try{
      console.log("Linkkkk",Linking.canOpenURL(`mailto:prateepthe7@gmail.com`))
      // return Linking.openURL(`mailto:?to=${emails}subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      return Linking.openURL(`mailto:?to=${emails}`);

    }catch(e){
      console.log(e)
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.wrap}>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-1</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-2</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-3</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-4</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-5</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-6</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-7</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-8</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-8</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.titleContainer} >
        <Text style={styles.button}>User-9</Text>
        <Pressable onPress={sendMail}>
          <View style={styles.icon}>
            <Entypo  name="mail" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      </View>
      
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
  wrap:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    // paddingTop:200,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingBottom:30,
    // justifyContent:'space-between',
  },
  button:{
    flexDirection: 'row',
    justifyContent:'space-between',
    padding:10,
    margin:10,
    width:'20%',
    borderRadius:10,
    backgroundColor:'lightblue',
    textAlign:'center',
  },
  icon:{
    flex:1,
    // padding:10,
    paddingTop:15,
    verticalAlign:'middle',
    alignItems:'center',
  }
});