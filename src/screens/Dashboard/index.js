import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import Logo from '../../../assets/Logo.png';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
function Dashboard({navigation}) {
  return (
    <SafeAreaProvider style={styles.Div}>
      <ScrollView style={styles.container}>
        <View style={styles.View}>
          <Image source={Logo} style={{flex:0.3,width:'60%',resizeMode:'contain'}} />
          <TouchableOpacity style={styles.Btn} onPress={navigation.navigate("Request")}>
            <Text style={styles.text}>Request Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={navigation.navigate("Map")}>
            <Text style={styles.text}>Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  Div: {
    flex: 1,
    backgroundColor: "#ECF1FA",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#ECF1FA",
  },
  View:{
    width:'100%',
    height:Dimensions.get("screen").height,
   justifyContent:'center',
   alignItems:'center'
  },
  text: {fontSize:16,fontWeight:'700'},
  Btn: {
    width:'90%',
    height:50,marginVertical:10,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgreen',
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
    },
});

export default Dashboard;
