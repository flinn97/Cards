import { Component } from 'react';
import "../App.css"
import DelButton from '../componentListNPM/componentForms/deleteButton';
import RunButton from '../componentListNPM/componentForms/runButton';
import ParentFormComponent from '../componentListNPM/parentFormComponent';
import { Link } from 'react-router-dom';


export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.cellMap =this.cellMap.bind(this);
    this.cellMap2 = this.cellMap2.bind(this);

    this.state = {
      containerStyle: {
        default: this.props.cStyle? {...this.props.cStyle}: {display:'flex', flexDirection:"column"},
        row: {display:'flex', flexDirection:"row"},
        wrapRow:{ display:'flex', flexDirection:"row", flexWrap:"wrap"},
        wrapColumn:{ display:'flex', flexDirection:"column", flexWrap:"wrap"},
      },
      sectionStyle:{
        default: this.props.sStyle? {...this.props.sStyle}: {display:'flex', flexDirection:"row"},
        column: {display:'flex', flexDirection:"column"},
        wrapRow:{ display:'flex', flexDirection:"row", flexWrap:"wrap"},
        wrapColumn:{ display:'flex', flexDirection:"column", flexWrap:"wrap"},
        
      },
      cellStyle:{
        default: this.props.cStyle? {...this.props.cStyle}: {display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"5px"},

      },
      imgStyle:{
        default: this.props.iStyle?{...this.props.iStyle} : {width:'10vw', height:"10vw", borderRadius:"50%"}
      },
      theme:{
        horizontal:{
          containerStyle:{
            display:'flex', flexDirection:"column"
          },
          sectionStyle:{
            display:'flex', flexDirection:"row"
          },
          cellStyle:{
            display:"flex", justifyContent:"center", alignItems:"center", marginLeft:"5px"
          },
          imgStyle:{
            default: this.props.iStyle?{...this.props.iStyle} : {width:'10vw', height:"10vw", borderRadius:"50%"}
          },
        },
       
      }


    }
  }
  cellMap2(item, index, arr) {
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    let inputTypes=["text", "textArea", "richEditor"];
    return <div style={this.props.sectionStyle? this.state.sectionStyle[this.props.sectionStyle]: this.props.theme? this.state[this.props.theme].sectionStyle: this.state.sectionStyle.default } key={index}> 
    {arr.map((c, index)=><div style={this.props.cellStyle?this.state.cellStyle[this.props.cellStyle]: this.props.theme? this.state[this.props.theme].cellStyle : this.state.cellStyle.default}> 
      
      
      {/* IS CELL JUST AN ATTRIBUTE */}
      {((Object.prototype.toString.call(c) === "[object String]" ||c.json) && c!=="delete" && c!=="edit") && (<div style={{...c.style}} 
      onClick={this.props.innerFunctions?.cells.includes(index)&&(
      ()=>{
        this.props.innerFunctions.functions[this.props.innerFunctions?.cells.indexOf(index)](item);
      })
      }>
         {this.props.innerlinkOptions?.cells?.includes(index)?(
          <Link to={this.props.innerlinkOptions?.path[this.props.innerlinkOptions.cells.indexOf(index)]? this.props.innerlinkOptions.path[this.props.innerlinkOptions.cells.indexOf(index)]: this.props.innerlinkOptions.path[this.props.innerlinkOptions.path.length-1]+ item.getJson()._id}>
      <div style={{color:c.style?.color, fontSize:c.style?.fontSize}}>{item.getJson()[c]}</div></Link>):(<div style={{color:c.style?.color, fontSize:c.style?.fontSize}}>{item.getJson()[c]}</div>)}</div>
      )}


      {/* IS CELL A SPECIAL WORD */}
      {(c==="delete") &&(
      <div style={{...this.props.delOptions?.style}} onClick={this.props.delOptions?.func? this.props.delOptions.func: ()=>{componentList.getOperationsFactory().cleanPrepareRun({del:item})}}>
       {this.props.linkOptions?.cells?.includes(index)?(
       <Link to={this.props.innerlinkOptions?.path[this.props.innerlinkOptions.cells.indexOf(index)]? this.props.innerlinkOptions.path[this.props.innerlinkOptions.cells.indexOf(index)]: this.props.innerlinkOptions.path[this.props.innerlinkOptions.path.length-1]+ item.getJson()._id}>
        {this.props.delOptions?.picURL?(<img style={{...this.state.delStyle}} src={this.props.delOptions.picURL}/>):(<>{this.props.delOptions?.name? this.props.delOptions.name:c}</>)}
       </Link>):(
         <>{this.props.delOptions?.picURL?(<img style={{...this.state.delStyle}}  src={this.props.delOptions.picURL}/>):(<>{this.props.delOptions?.name? this.props.delOptions.name:c}</>)}</>
        )}
        
        </div>
        )}

        {c==="edit"&&(
      <div style={{...this.props.editOptions?.style}} onClick={this.props.editOptions?.func&& this.props.editOptions.func}>
       {this.props.innerlinkOptions?.cells?.includes(index)?(
       <Link to={this.props.innerlinkOptions?.path[this.props.innerlinkOptions.cells.indexOf(index)]? this.props.innerlinkOptions.path[this.props.innerlinkOptions.cells.indexOf(index)]: this.props.innerlinkOptions.path[this.props.innerlinkOptions.path.length-1]+ item.getJson()._id}>
        {this.props.editOptions?.picURL?(<img style={{...this.state.editStyle}}  src={this.props.editOptions.picURL}/>):(<>{this.props.editOptions?.name? this.props.editOptions.name:c}</>)}
       </Link>):(
         <>{this.props.editOptions?.picURL?(<img  style={{...this.state.editStyle}}  src={this.props.editOptions.picURL}/>):(<>{this.props.editOptions?.name? this.props.editOptions.name:c}</>)}</>
        )}
        
        </div>
        )}

      {/* IS CELL AN IMG */}
      {c.img && (<div style={{...c.style}} onClick={this.props.innerFunctions?.cells.includes(index)&&(
      ()=>{
        this.props.innerFunctions.functions[this.props.innerFunctions?.cells.indexOf(index)](item);
      })}>
        {this.props.innerlinkOptions?.cells?.includes(index)?(
          <Link to={this.props.innerlinkOptions?.path[this.props.innerlinkOptions.cells.indexOf(index)]? this.props.innerlinkOptions.path[this.props.innerlinkOptions.cells.indexOf(index)]: this.props.innerlinkOptions.path[this.props.innerlinkOptions.path.length-1]+ item.getJson()._id}>
    
      <img style={c.imgStyle? c.imgStyle: this.props.theme? this.state[this.props.theme].imgStyle: this.state.imgStyle.default} src={item.getJson()[c.img]} /></Link>):(<img style={c.imgStyle? c.imgStyle: this.props.theme? this.state[this.props.theme].imgStyle: this.state.imgStyle.default} src={item.getJson()[c.img]} />)} </div>
      )}


      {/* IS CELL A CUSTOM REACT CLASS */}
      {c.custom && (<div onClick={this.props.innerFunctions?.cells.includes(index)&&(
      ()=>{
        this.props.innerFunctions.functions[this.props.innerFunctions?.cells.indexOf(index)](item);
      })}>
       {this.props.innerlinkOptions?.cells?.includes(index)?(
        <Link to={this.props.innerlinkOptions?.path[this.props.innerlinkOptions.cells.indexOf(index)]? this.props.innerlinkOptions.path[this.props.innerlinkOptions.cells.indexOf(index)]: this.props.innerlinkOptions.path[this.props.innerlinkOptions.path.length-1]+ item.getJson()._id}>
  <c.custom props={{...c.props}} obj={item} style={{...c.style}}/></Link>):(<c.custom props={{...c.props}} obj={item} style={{...c.style}}/>)}</div>)}

      {/* IS CELL AN INPUTTYPE */}
      {inputTypes.includes(Object.keys(c)[0]) &&(
      <div style={{...c.style}} onClick={this.props.innerFunctions?.cells.includes(index)&&(
        ()=>{
          this.props.innerFunctions.functions[this.props.innerFunctions?.cells.indexOf(index)](item);
        })}>
      {this.props.innerlinkOptions?.cells?.includes(index)?(
        <Link to={this.props.innerlinkOptions?.path[this.props.innerlinkOptions.cells.indexOf(index)]? this.props.innerlinkOptions.path[this.props.innerlinkOptions.cells.indexOf(index)]: this.props.innerlinkOptions.path[this.props.innerlinkOptions.path.length-1]+ item.getJson()._id}>
  <ParentFormComponent type={[Object.keys(c)[0]]} obj = {item} name={c[Object.keys(c)[0]]}/></Link>):(<ParentFormComponent type={[Object.keys(c)[0]]} obj = {item} name={c[Object.keys(c)[0]]}/>)}
  </div>)}
  {/* IS CELL A LIST OF CELLS */}
  {Array.isArray(c) &&(<div style={{...this.props.innerCell?.style}} onClick={this.props.innerFunctions?.cells.includes(index)&&(
      ()=>{
        this.props.innerFunctions.functions[this.props.innerFunctions?.cells.indexOf(index)](item);
      })}>
          <> 
          {this.props.innerlinkOptions?.cells?.includes(index)?(
            <Link to={this.props.innerlinkOptions?.path[this.props.innerlinkOptions.cells.indexOf(index)]? this.props.innerlinkOptions.path[this.props.innerlinkOptions.cells.indexOf(index)]: this.props.innerlinkOptions.path[this.props.innerlinkOptions.path.length-1]+ item.getJson()._id}>
      
          
            {this.cellMap2(item, index, c)}
            
        
        </Link>):(<div>
            {this.cellMap2(item, index, c)}
            
        </div>)}
        </>
        </div>)}
  
    </div>)}
    </div>;}




  cellMap(item, index) {
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    let inputTypes=["text", "textArea", "richEditor"];
    return ""}




  render() {
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    let inputTypes=["text", "textArea", "richEditor"];

    let types={
      //InnerMap type
      innerMap:
      <div style={this.props.containerStyle? this.state.containerStyle[this.props.containerStyle]: this.props.theme? this.state[this.props.theme].containerStyle: this.state.containerStyle.default}>
      {componentList?.getList(this.props.name).map((item, index)=>
      {this.cellMap(item, index)}
      )}
      </div>,

      //Default Type
      default:<div style={this.props.containerStyle? this.state.containerStyle[this.props.containerStyle]: this.state.containerStyle.default}>
      {componentList?.getList(this.props.name).map((item, index)=>
      <div style={this.props.sectionStyle? this.state.sectionStyle[this.props.sectionStyle]: this.props.theme? this.state[this.props.theme].sectionStyle: this.state.sectionStyle.default } key={index}> 
    
      {this.props.cells.map((c, index)=><div style={this.props.cellStyle?this.state.cellStyle[this.props.cellStyle]: this.props.theme? this.state[this.props.theme].cellStyle : this.state.cellStyle.default}> 
        
        
        {/* IS CELL JUST AN ATTRIBUTE */}
        {((Object.prototype.toString.call(c) === "[object String]" ||c.json) && c!=="delete" && c!=="edit") && (<div style={{...c.style}} onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })
          }>
           {this.props.linkOptions?.cells?.includes(index)?(
            <Link to={
              this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? 
              this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}
              >
        <div style={{color:c.style?.color, fontSize:c.style?.fontSize}}>{item.getJson()[c]}</div></Link>):(<div style={{color:c.style?.color, fontSize:c.style?.fontSize}}>{item.getJson()[c]}</div>)}</div>
        )}
  
  
        {/* IS CELL A SPECIAL WORD */}
        {(c==="delete") &&(
        <div style={{...this.props.delOptions?.style}} onClick={this.props.delOptions?.func? this.props.delOptions.func: ()=>{componentList.getOperationsFactory().cleanPrepareRun({del:item})}}>
         {this.props.linkOptions?.cells?.includes(index)?(
         <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
          {this.props.delOptions?.picURL?(<img style={{...this.state.delStyle}} src={this.props.delOptions.picURL}/>):(<>{this.props.delOptions?.name? this.props.delOptions.name:c}</>)}
         </Link>):(
           <>{this.props.delOptions?.picURL?(<img style={{...this.state.delStyle}}  src={this.props.delOptions.picURL}/>):(<>{this.props.delOptions?.name? this.props.delOptions.name:c}</>)}</>
          )}
          
          </div>
          )}
  
          {c==="edit"&&(
        <div style={{...this.props.editOptions?.style}} onClick={this.props.editOptions?.func&& this.props.editOptions.func}>
         {this.props.linkOptions?.cells?.includes(index)?(
         <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
          {this.props.editOptions?.picURL?(<img style={{...this.state.editStyle}}  src={this.props.editOptions.picURL}/>):(<>{this.props.editOptions?.name? this.props.editOptions.name:c}</>)}
         </Link>):(
           <>{this.props.editOptions?.picURL?(<img  style={{...this.state.editStyle}}  src={this.props.editOptions.picURL}/>):(<>{this.props.editOptions?.name? this.props.editOptions.name:c}</>)}</>
          )}
          
          </div>
          )}
  
        {/* IS CELL AN IMG */}
        {c.img && (<div style={{...c.style}} onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })}>
          {this.props.linkOptions?.cells?.includes(index)?(
            <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
      
        <img style={c.imgStyle? c.imgStyle: this.props.theme? this.state[this.props.theme].imgStyle: this.state.imgStyle.default} src={item.getJson()[c.img]} /></Link>):(<img style={c.imgStyle? c.imgStyle: this.props.theme? this.state[this.props.theme].imgStyle: this.state.imgStyle.default} src={item.getJson()[c.img]} />)} </div>
        )}
  
  
        {/* IS CELL A CUSTOM REACT CLASS */}
        {c.custom && (<div onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })}>
         {this.props.linkOptions?.cells?.includes(index)?(
          <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
    <c.custom props={{...c.props}} obj={item} style={{...c.style}}/></Link>):(<c.custom props={{...c.props}} obj={item} style={{...c.style}}/>)}</div>)}
  
        {/* IS CELL AN INPUTTYPE */}
        {inputTypes.includes(Object.keys(c)[0]) &&(
        <div style={{...c.style}} onClick={this.props.functions?.cells.includes(index)&&(
          ()=>{
            this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
          })}>
        {this.props.linkOptions?.cells?.includes(index)?(
          <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
    <ParentFormComponent type={[Object.keys(c)[0]]} obj = {item} name={c[Object.keys(c)[0]]}/></Link>):(<ParentFormComponent type={[Object.keys(c)[0]]} obj = {item} name={c[Object.keys(c)[0]]}/>)}
    </div>)}
        {/* IS CELL A LIST OF CELLS */}
        {Array.isArray(c) &&(<div style={{...this.props.innerCell?.style}} onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })}>
          <> 
          {this.props.linkOptions?.cells?.includes(index)?(
            <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
      
          
            {this.cellMap2(item, index, c)}
            
        
        </Link>):(<div>
            {this.cellMap2(item, index, c)}
            
        </div>)}
        </>
        </div>)}
      </div>)}
      </div>
      )}
      </div>,

      // filiterd MAP
      filteredMap: <div style={this.props.containerStyle? this.state.containerStyle[this.props.containerStyle]: this.state.containerStyle.default}>
      {componentList?.getList(this.props.name, this.props.filter?.search, this.props.filter?.attribute).map((item, index)=>
      <div style={this.props.sectionStyle? this.state.sectionStyle[this.props.sectionStyle]: this.props.theme? this.state[this.props.theme].sectionStyle: this.state.sectionStyle.default } key={index}> 
    
      {this.props.cells.map((c, index)=><div style={this.props.cellStyle?this.state.cellStyle[this.props.cellStyle]: this.props.theme? this.state[this.props.theme].cellStyle : this.state.cellStyle.default}> 
        
        
        {/* IS CELL JUST AN ATTRIBUTE */}
        {((Object.prototype.toString.call(c) === "[object String]" ||c.json) && c!=="delete" && c!=="edit") && (<div style={{...c.style}} onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })
          }>
           {this.props.linkOptions?.cells?.includes(index)?(
            <Link to={
              this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? 
              this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}
              >
        <div style={{color:c.style?.color, fontSize:c.style?.fontSize}}>{item.getJson()[c]}</div></Link>):(<div style={{color:c.style?.color, fontSize:c.style?.fontSize}}>{item.getJson()[c]}</div>)}</div>
        )}
  
  
        {/* IS CELL A SPECIAL WORD */}
        {(c==="delete") &&(
        <div style={{...this.props.delOptions?.style}} onClick={this.props.delOptions?.func? this.props.delOptions.func: ()=>{componentList.getOperationsFactory().cleanPrepareRun({del:item})}}>
         {this.props.linkOptions?.cells?.includes(index)?(
         <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
          {this.props.delOptions?.picURL?(<img style={{...this.state.delStyle}} src={this.props.delOptions.picURL}/>):(<>{this.props.delOptions?.name? this.props.delOptions.name:c}</>)}
         </Link>):(
           <>{this.props.delOptions?.picURL?(<img style={{...this.state.delStyle}}  src={this.props.delOptions.picURL}/>):(<>{this.props.delOptions?.name? this.props.delOptions.name:c}</>)}</>
          )}
          
          </div>
          )}
  
          {c==="edit"&&(
        <div style={{...this.props.editOptions?.style}} onClick={this.props.editOptions?.func&& this.props.editOptions.func}>
         {this.props.linkOptions?.cells?.includes(index)?(
         <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
          {this.props.editOptions?.picURL?(<img style={{...this.state.editStyle}}  src={this.props.editOptions.picURL}/>):(<>{this.props.editOptions?.name? this.props.editOptions.name:c}</>)}
         </Link>):(
           <>{this.props.editOptions?.picURL?(<img  style={{...this.state.editStyle}}  src={this.props.editOptions.picURL}/>):(<>{this.props.editOptions?.name? this.props.editOptions.name:c}</>)}</>
          )}
          
          </div>
          )}
  
        {/* IS CELL AN IMG */}
        {c.img && (<div style={{...c.style}} onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })}>
          {this.props.linkOptions?.cells?.includes(index)?(
            <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
      
        <img style={c.imgStyle? c.imgStyle: this.props.theme? this.state[this.props.theme].imgStyle: this.state.imgStyle.default} src={item.getJson()[c.img]} /></Link>):(<img style={c.imgStyle? c.imgStyle: this.props.theme? this.state[this.props.theme].imgStyle: this.state.imgStyle.default} src={item.getJson()[c.img]} />)} </div>
        )}
  
  
        {/* IS CELL A CUSTOM REACT CLASS */}
        {c.custom && (<div onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })}>
         {this.props.linkOptions?.cells?.includes(index)?(
          <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
    <c.custom props={{...c.props}} obj={item} style={{...c.style}}/></Link>):(<c.custom props={{...c.props}} obj={item} style={{...c.style}}/>)}</div>)}
  
        {/* IS CELL AN INPUTTYPE */}
        {inputTypes.includes(Object.keys(c)[0]) &&(
        <div style={{...c.style}} onClick={this.props.functions?.cells.includes(index)&&(
          ()=>{
            this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
          })}>
        {this.props.linkOptions?.cells?.includes(index)?(
          <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
    <ParentFormComponent type={[Object.keys(c)[0]]} obj = {item} name={c[Object.keys(c)[0]]}/></Link>):(<ParentFormComponent type={[Object.keys(c)[0]]} obj = {item} name={c[Object.keys(c)[0]]}/>)}
    </div>)}
        {/* IS CELL A LIST OF CELLS */}
        {Array.isArray(c) &&(<div style={{...this.props.innerCell?.style}} onClick={this.props.functions?.cells.includes(index)&&(
      ()=>{
        this.props.functions.functions[this.props.functions?.cells.indexOf(index)](item);
      })}>
          <> 
          {this.props.linkOptions?.cells?.includes(index)?(
            <Link to={this.props.linkOptions?.path[this.props.linkOptions.cells.indexOf(index)]? this.props.linkOptions.path[this.props.linkOptions.cells.indexOf(index)]: this.props.linkOptions.path[this.props.linkOptions.path.length-1]+ item.getJson()._id}>
      
          
            {this.cellMap2(item, index, c)}
            
        
        </Link>):(<div>
            {this.cellMap2(item, index, c)}
            
        </div>)}
        </>
        </div>)}
      </div>)}
      </div>
      )}
      </div>,
    }

    return (<div style={{width:"100%", height:"100%"}}>
      {/* {this.props.type} */}
      
      {types[this.props.type?this.props.type:this.props.filter?"filteredMap":"default"]}
      </div>
      
      // <div style={{width:"100vw", paddingTop: "10px"}}><>
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

