import React,{Component} from 'react';
import{ Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Poem extends Component{
render(){
  return(
    <View style={styles.container}>
    <Text style={styles.titleText}>Mickey the Monkey</Text>
    <Image style={styles.imageIcon} source={{
    uri:"https://thumbs.dreamstime.com/z/baby-monkey-tree-19434566.jpg",
    }}/>
    <Text>             </Text>
    <Text style={styles.text}>Look its Mickey the Monkey</Text>
    <Text style={styles.text}>He jumps in his cage</Text>
    <Text style={styles.text}>Why doesn't he go out for work</Text>
    <Text style={styles.text}>And earn a decent wage?</Text>
    <Text>             </Text>
    <Text>             </Text>
    <Text style={styles.text}>How can Mickey say silly things</Text>
    <Text style={styles.text}>Is he a son of himself</Text>
    <Text style={styles.text}>Image Mickey travelling on</Text>
    <Text style={styles.text}>The Morden Edgware line!</Text>
    <Text>             </Text>
    <Text>             </Text>
    <Text style={styles.text}>But what about the people</Text>
    <Text style={styles.text}>They have an allocation</Text>
    <Text style={styles.text}>Don't travel during every hour</Text>
    <Text style={styles.text}>It says on every station</Text>
    <Text>             </Text>
    <Text>             </Text>
    <Text style={styles.text}>My Gosh, you're right, my boy</Text>
    <Text style={styles.text}>I have never thought about that</Text>
    <Text style={styles.text}>And so they left the monkey house</Text>
    <Text style={styles.text}>While an elephant raised his hat</Text>
    <TouchableOpacity style={styles.button} onPress={()=>{
      this.props.navigation.navigate("Quiz1");
    }}>
    <Text style={styles.buttonText}>Start Quiz</Text>
    </TouchableOpacity>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'orange'
  },
  text:{
    color:'black',
    fontSize: 20,
    alignSelf:'center',
    justifyContent:'center',
    marginTop: 10,
  },
  titleText:{
    color:'brown',
    fontSize: 30,
    alignSelf:'center',
    justifyContent:'center',
    marginTop: 5,
  },
  button:{
    backgroundColor:"yellow",
    width: 100,
    height: 30,
    borderRadius: 5,
    marginTop: 40,
    alignSelf: "center"
  },
  buttonText:{
    color:"black",
    alignSelf:"center",
    fontSize: 20,
  },
  imageIcon:{
    width: 300,
    height: 200,
    alignSelf:'center',
    marginTop: 10,
  }
})