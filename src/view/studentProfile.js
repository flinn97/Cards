import { Component } from 'react';
import "../App.css"
import MapComponent from './mapComponent';
// import DelButton from '../componentListNPM/componentForms/deleteButton';
// import RunButton from '../componentListNPM/componentForms/runButton';
// import ParentFormComponent from '../componentListNPM/parentFormComponent';


export default class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id:  window.location.href.split('/')[window.location.href.split('/').length-1]
    }
  }

 


  render() {
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    let student = componentList.getComponent("student", this.state._id);

    return (
      <div><h1>students</h1>
      <h1>hw</h1>
     
      <MapComponent app={app} name="homework" filter={{search:student.getJson()._id, attribute:"owner"}} cells={["title","description", "_id", "delete", ]} />
      <h1>goals</h1>
      <MapComponent app={app} name="goal" filter={{search:student.getJson()._id, attribute:"owner"}} cells={["title","description", "_id", "delete", ]} />
      <h1>badge</h1>
      <MapComponent app={app} name="badge" filter={{search:student.getJson()._id, attribute:"owner"}} cells={["title","description", "_id", "delete", ]} />
      <h1>Notes</h1>
      <MapComponent app={app} name="notes" filter={{search:student.getJson()._id, attribute:"owner"}} cells={["description", "_id", "delete", ]} />
      <h1>chatroom</h1>
      <MapComponent app={app} name="chatroom" filter={{search:student.getJson()._id, attribute:"owner"}} cells={["name", "_id", "delete", ]} />
      <h1>posts</h1>
      <MapComponent app={app} name="post" filter={{search:student.getJson()._id, attribute:"owner"}} cells={["content", "_id", "delete", ]} />


      </div>
      // <div style={{width:"100vw", paddingTop: "10px"}}>
      //     <ParentFormComponent style={{height:"200px", border:"1px solid black"}} type="richEditor" name="html" app={app} prepareOnClick={{operation: "cleanJsonPrepare", operate:"addadventureLog"}} obj={{owner: "123", type:"adventureLog"}} />
      //     <RunButton app={app} />
      //     <div >{list?.map((log, index)=>
          
      //     <div ><div onClick={()=>{
      //       this.setState({
      //         [index+"edit"]:!this.state[index+"edit"]})
      //         dispatch({operate: "update", operation: "cleanPrepare", obj: log})
      //       }
            
          
      //     }>edit</div> <DelButton obj={log}/> {this.state[index+ "edit"]?(  <>       
      //       <ParentFormComponent style={{height:"200px", border:"1px solid black"}} type="richEditor" name="html" app={app}  obj={log} /><RunButton onChange={()=>{this.setState({[index+"edit"]:false})}} app={app} /></> 
      //       ):( <div dangerouslySetInnerHTML={{__html: log.getJson().html}}  />)}</div>
      //     )}</div>
      // </div>
    )
  }
}

