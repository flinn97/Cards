import { Component } from 'react';
import "../App.css"
import MapComponent from './mapComponent';


export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    let app = this.props.app

    let dispatch = app.dispatch;
    let state = app.state;
    let componentList=state.componentList;
    let opps = state.opps;
    return (
      <div><h1>Users</h1>
            <MapComponent app={app} name="user" cells={[{img: "picURL"}, "firstName", "lastName", "_id", "email",  "delete" ]} linkOptions={{cells:[0,1,2, 3, 4], path:["/teacherstudents/"]}}/>

      </div>
      // <div style={{width:"100vw", paddingTop: "10px"}}>0
      //     <div onClick= {dispatch.bind(this, { operation: "cleanPrepare", operate: "addcharacter" , myswitch: "upload", uploadKey:"add" })}> Add Character</div>
      //     <div >{list?.map((character, index)=>
          
      //     <div>{character?.getJson().name}<img src={character.getJson().picURL}/></div>
      //     )}</div>
      // </div>
    )
  }
}
