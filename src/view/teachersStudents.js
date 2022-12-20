import { Component } from 'react';
import "../App.css"
import MapComponent from './mapComponent';
// import DelButton from '../componentListNPM/componentForms/deleteButton';
// import RunButton from '../componentListNPM/componentForms/runButton';
// import ParentFormComponent from '../componentListNPM/parentFormComponent';


export default class TeachersStudents extends Component {
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
      <div><h1>teacher students</h1>
      <MapComponent app={app} name="student" filter={{search:this.state._id, attribute:"collection"}}  cells={[{img:"picURL"}, ["firstName", "lastName"], "_id", "delete", ]} linkOptions={{path:["/student/"], cells:[0,1,2]}} />


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

