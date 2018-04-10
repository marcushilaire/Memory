import React, {Component} from "react";
import './App.css';
import Cards from './components/Cards'
import heroes from './Cards.json';

class App extends Component {
  state={
    clicked:[],
    score:0,
    bestScore:0,

  };
//update the score
handleScore = () => {
  if(this.state.score===this.state.bestScore){
  this.setState(
    { score: this.state.score + 1 ,
     bestScore: this.state.bestScore + 1 },    
  );    
  }else{
  this.setState({ score: this.state.score + 1 });
  console.log(this.state.score)
  }};
// push to clicked array
updateClicked= (childName)=>{
  this.setState({clicked:[...this.state.clicked, childName]});

  console.log(this.state.clicked)
}
// handleBestScore = (score)=>{
// if(score>this.state.bestScore){
//   this.setState({bestScore: this.state.score})
// } }
// send on click functions to the child and handle the game functionality
handleClick=(childName)=>{
  // this.handleBestScore(this.state.score)
  if (this.state.clicked.includes(childName)){
    this.setState({score: 0,clicked:[]})
    return
  }else{
  this.handleScore();
  this.updateClicked(childName)}
}

  render(){
  return(
  <div className="container">
  <div className="row">
  score:{this.state.score}
  bestScore:{this.state.bestScore}
  name:{this.state.clicked}  
    {heroes.map(arr=>
    <div key={arr.name} className="col-md-2 col-sm-4 col-xs-6">
    {/* <div>hellooooooo</div> */}
    <Cards handleClick={this.handleClick} name={arr.name}/>
    </div>)}
  </div>
</div>
    )
    };
}

export default App;
