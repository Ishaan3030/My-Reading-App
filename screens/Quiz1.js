import React,{Component} from "react";
import {Text,View,StyleSheet, TouchableOpacity, Alert, AlertButton} from "react-native";
import firebase from "firebase";

export default class Quiz1 extends Component{
  constructor(){
  super();
  this.state ={
      quizScore: [],
      points: 0,
      point: 0,
      buttonColor: "white",
      pressedButtonIndex:"",
      pressedButtonIndex2:"",
      pressedButtonIndex3:"",
      pressedButtonIndex4:"",
      pressedButtonIndex5:"",
  };
  }
  earnPoints = () =>{
    var points: ""
  }

  losePoints = () =>{
    var points: ""
  }
  
  showquizScore = ()=>{
    var answers= [];
    var answerRef = firebase.ref('/points/');
    answerRef.on("value", (data)=>{
      var answerList =data.val();
      for (var answer in answerList){
      if(answerList[answer]['isButtonPressed'] === true){
        answerList[answer]['answerName']=answer;
        answers.push(answerList[answer]);
      }
      }
      answers.sort(function(answer1, answer2, answer3, answer4){
        return answer1.timestamp - answer2.timestamp
      });
      this.setState({answersRank: answer});
      answers = [];
    });
  };
  render(){
    return(
  <View style={styles.container}>
  <Text style={styles.text}>Quiz</Text>
  <Text style={styles.ruleText}> Please answer each question in order to get all points before you click Finish</Text>
  <Text style={styles.text}>1. What does the first stanza of the poem say</Text>
  <TouchableOpacity style={
    this.props.buttonIndex === this.state.pressedButtonIndex
    ? [styles.answerButton, {backgroundColor:"lime"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Correct!')
    this.setState({pressedButtonIndex: this.props.buttonIndex, points: this.state.points + 2})
  }}>
  <Text style={styles.text}>a. Mickey not going out for work</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex === this.state.pressedButtonIndex
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex: this.props.buttonIndex, points:this.state.points - 1})
  }}>
  <Text style={styles.text}>b. Mickey having fun outside</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex === this.state.pressedButtonIndex
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex: this.props.buttonIndex, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>c. Mickey doing his work alone</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex === this.state.pressedButtonIndex
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex: this.props.buttonIndex, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>d. Mickey spending time with his friends</Text>
  </TouchableOpacity>
  <Text>         </Text>
  <Text style={styles.text}>2. What does allocation in the 3rd paragraph mean?</Text>
  <TouchableOpacity style={
    this.props.buttonIndex2 === this.state.pressedButtonIndex2
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex2: this.props.buttonIndex2, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>a. destination</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex2 === this.state.pressedButtonIndex2
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex2: this.props.buttonIndex2, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>b. location</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex2 === this.state.pressedButtonIndex2
    ? [styles.answerButton, {backgroundColor:"lime"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
    } onPress={()=>{
    Alert.alert("Correct!")
    this.setState({pressedButtonIndex2: this.props.buttonIndex2, points: this.state.points + 2})
    this.earnPoints()
  }}>
  <Text style={styles.text}>c. administration</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex2 === this.state.pressedButtonIndex2
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex2: this.props.buttonIndex2, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>d. instruction</Text>
  </TouchableOpacity>
  <Text>         </Text>
  <Text style={styles.text}>3. What does this line "How can Mickey say such silly things" talk about?</Text>
  <TouchableOpacity style={
    this.props.buttonIndex3 === this.state.pressedButtonIndex3
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex3: this.props.buttonIndex3, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>a. Mickey is such a silly monkey</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex3 === this.state.pressedButtonIndex3
    ? [styles.answerButton, {backgroundColor:"lime"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert("Correct!")
    this.setState({pressedButtonIndex3: this.props.buttonIndex3, points: this.state.points + 2})
  }}>
  <Text style={styles.text}>b. The way Mickey talks is so funny</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex3 === this.state.pressedButtonIndex3
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex3: this.props.buttonIndex3, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>c. Mickey is just a monkey</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex3 === this.state.pressedButtonIndex3
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex3: this.props.buttonIndex3, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>d. Mickey likes having fun </Text>
  </TouchableOpacity>
  <Text>         </Text>
  <Text style={styles.text}>4. Why doesn't Mickey go out for work and earn a decent wage</Text>
  <TouchableOpacity style={
    this.props.buttonIndex4 === this.state.pressedButtonIndex4
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex4: this.props.buttonIndex4, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>a. Mickey wants to be alone</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex4 === this.state.pressedButtonIndex4
    ? [styles.answerButton, {backgroundColor:"lime"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Correct!')
    this.setState({pressedButtonIndex4: this.props.buttonIndex4, points: this.state.points + 2})
  }}>
  <Text style={styles.text}>b. Mickey doesn't want to do his work now</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex4 === this.state.pressedButtonIndex4
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex4: this.props.buttonIndex4, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>c. Mickey hates working</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex4 === this.state.pressedButtonIndex4
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex4: this.props.buttonIndex4, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>d. Mickey sometimes likes to play</Text>
  </TouchableOpacity>
  <Text>          </Text>
  <Text style={styles.text}>5. What is the main idea of the poem?</Text>
  <TouchableOpacity style={
    this.props.buttonIndex5 === this.state.pressedButtonIndex5
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex5: this.props.buttonIndex5, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>a. Mickey who spends time alone</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex5 === this.state.pressedButtonIndex5
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex5: this.props.buttonIndex5, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>b. Mickey who is a monkey hanging on a tree.</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex5 === this.state.pressedButtonIndex5
    ? [styles.answerButton, {backgroundColor:"red"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert('Sorry Wrong Answer!')
    this.setState({pressedButtonIndex5: this.props.buttonIndex5, points: this.state.points - 1})
  }}>
  <Text style={styles.text}>c. Mickey who likes to hang out with his friends</Text>
  </TouchableOpacity>
  <TouchableOpacity style={
    this.props.buttonIndex5 === this.state.pressedButtonIndex5
    ? [styles.answerButton, {backgroundColor:"lime"}]
    : [styles.answerButton,{backgroundColor:'cyan'}]
  } onPress={()=>{
    Alert.alert("Correct!")
    this.setState({pressedButtonIndex5: this.props.buttonIndex5, points: this.state.points + 2})
  }}>
  <Text style={styles.text}>d. Mickey who is solving his problems</Text>
  </TouchableOpacity>
  <Text>         </Text>
  <Text style={styles.text}>Points: {this.state.points}</Text>
  <TouchableOpacity style={styles.button} onPress={()=>{
    this.props.navigation.navigate("Result");
  }}>
  <Text style={styles.buttonText}>Finish</Text>
  </TouchableOpacity>
  </View>
  )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"pink"
  },
  text:{
    fontSize:20,
    alignItems:"center",
    justifyContent:"center"
  },
  ruleText:{
    color:'brown',
    fontSize: 15,
    alignItems:'center'
  },
  answerButton:{
    backgroundColor: "cyan",
    borderRadius:5,
  },
  button:{
    backgroundColor:"yellow",
    width: 100,
    height: 30,
    borderRadius: 10, 
    marginTop: 20,
    alignSelf:"center"
  },
  buttonText:{
    fontSize: 20,
    alignSelf: "center",
    justifyContent:"center",
  }
})