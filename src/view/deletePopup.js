import React, { Component } from "react";

//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class DeletePopup extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;
        this.state = {
           objForDelete: this.props.objForDelete
        }

    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
                this.props.handleClose();
            
        }
    }
            
        
    

    render() {

        let app = this.props.app;
        let state = app.state;
        let styles = state.styles;
        let dispatch=app.dispatch;
        return (<div>
            
                                <div className="popup-box" style={{ zIndex: "1010" }}>
                <div ref={this.wrapperRef} style={{ zIndex: "1011", height:"fit-content", width:"fit-content" }}>
                    
                <div style={ ///EXIT BUTTON
                                styles.buttons.buttonX
                            } onClick={this.props.handleClose}> X </div>
                <div style={ ///EXIT BUTTON
                                styles.buttons.buttonX
                            } onClick={this.props.handleClose}> Are you sure you want to delete this? </div>
                   
                   
                        <div 
                        style={{ marginTop: "20px", flexDirection:"row", display:'flex', alignContent:"center", justifyContent:"center"  }}>
                        <div  
                        onClick={dispatch.bind(this, {popupSwitch:"", operation:"run"})}
                        style={{ 
                            ...styles.buttons.buttonFollowing
                            }}>Cancel</div>
                    
                   <div
                        onClick={dispatch.bind(this, {popupSwitch:"", operation:"cleanPrepareRun", object:this.state.objForDelete, operate:"del",objForDelete:undefined})}
                        style={{ background: "#F56060", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", borderRadius: "16px",  alignItems:"center"}}>Delete
                        </div>
                    </div>
                    

                </div>
                
            </div>

            </div>)
    }
};
export default DeletePopup;