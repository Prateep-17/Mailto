import User from '@/components/User';
import { StyleSheet, Text, Pressable, Linking, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {

  const userData = [
    { id: '1', name: 'User-1' },
    { id: '2', name: 'User-2' },
    { id: '3', name: 'User-3' },
    { id: '4', name: 'User-4' },
    { id: '5', name: 'User-5' },
    { id: '6', name: 'User-6' },
    { id: '7', name: 'User-7' },
    { id: '8', name: 'User-8' },
    { id: '9', name: 'User-9' },
    { id: '10', name: 'User-10' },

  ];
  
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
      <FlatList
        data={userData}
        renderItem={({ item }) => <User item={item} onPress={sendMail} />}
        keyExtractor={item => item.id}
      />
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