import React,{Component} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Quiz1 from "../screens/Quiz1"

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
  render(){
    return(
      <Drawer.Navigator
     drawerContentOptions={{
       activeTintColor:"#008080",
       inactiveTintColor:"white",
       itemStyle: {marginVertical:5},
     }} 
     >
     <Drawer.Screen
     name="Quiz1"
     component={Quiz1}
     option={{unmountOnBlur: true}}
     />
     </Drawer.Navigator>
    )
  }
}