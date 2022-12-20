import React, { Component } from 'react';
import auth from '../services/auth';
import { ref, } from "firebase/storage";
import { storage,  } from '../firbase.config.js';

export default class Notes extends Component {
    constructor(props){
        super(props);
  
        this.handleSubmission=this.handleSubmission.bind(this);
        this.handleChange=this.handleChange.bind(this);

     
        this.state={
            selectedFile: undefined,
            path: undefined,
            name: "",
            type: "",
            value:this.props.obj? this.props.obj.getJson().note: "",
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
            value:value
        })
    }
   


    async handleSubmission()  {
        //debugger
        let app = this.props.app;
        let state = app.state;
        let dispatch = app.dispatch;
        let component = state.currentComponent;
        let compJson = component?.getJson();
        let opps = component?.getOperationsFactory();
        let key =compJson?.collection? "update": "add";
        await this.props.app.state.componentList.getOperationsFactory().componentDispatch({ [key+"note"]: this.state.note,}) 
           
            
        
        await this.props.app.state.componentList.getOperationsFactory().run();

        this.props.handleClose()
        

    };
   
render(){
        let app = this.props.app;
        let state = app.state;
        let dispatch = app.dispatch;
        let component = state.currentComponent;
        let compJson = component?.getJson();
        
        let styles =state.styles;
        let opps = component?.getOperationsFactory();
        let key =compJson?.collection? "update": "add";
        return(
            <div style= {{background:styles.colors.White1, padding:".5vw", borderRadius:".7vw",
                fontSize: styles.fonts.fontBody, height:"fit-content"}}>

                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                 
                     <div>
                            <label htmlFor="lastName"><div style= {{fontFamily: styles.fonts.fontNormal,
              fontSize: styles.fonts.fontBody}}>Comment:</div></label>
                            <input  style= {{fontFamily: styles.fonts.fontNormal,
              fontSize: styles.fonts.fontBody, height:"fit-content"}} type="text" id="last"  value={this.state.value}  placeholder = {component?.getJson().note} onChange={
                this.handleChange} name={"note"}/>
                        </div>
                        <div style={{...styles.buttons.buttonX}} onClick={this.props.handleClose}>X</div>
                        
                        </div>

                        <div style= {{display: "flex", flexDirection:"flex-end"}}>
                         <div style= {{...styles.buttons.buttonSubmit, }} onClick={this.handleSubmission}>Submit</div>
                     </div>
                 </div>
                 
             )
    }

}