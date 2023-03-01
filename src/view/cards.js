import { Component } from 'react';
import "../App.css"
import CardPractice from './CardPrac';


export default class CardsPrac extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
 


  render() {
    let app = this.props.app;


    return (
      <div style={{display:"flex", flexDirection:"column"}}><h1>Cards</h1>

      <div style={{display:"flex", flexDirection:"row"}}>
        <CardPractice app={app} theme="default" type= "smallestCardColorTab"/>
      </div>


      </div>

    )
  }
}

