import React, {Component} from "react";
import './more-less-app.css';

class MoreLessApp extends Component{
    constructor(){
        super();
this.state={displayInfo:false,
initials:"JS",
title:"Read More Less App"};
this.handleOnShowMore=this.handleOnShowMore.bind(this);
this.handleOnShowLess=this.handleOnShowLess.bind(this);
    }


handleOnShowMore(){
this.setState(
    {displayInfo:true}
)
}
handleOnShowLess(){
    this.setState(
        {displayInfo:false}
    )

}   
render(){
        const {initials,title,displayInfo}=this.state;
        return(
          <>
            <div className="app-container">
                <div className="app-head">
                    <h1><span className="initials">{initials}</span>
                    <span className="title">{title}</span></h1>
                </div>
                <div className="app-body">
           <p>Full Stack (MERN,MEAN,Spring)</p>
           <p>React Js,Angular Js,Vue Js</p>
          {
          
            displayInfo ? (
                <>
                <p>Technologies training in tamil</p>
                <p>React Js training in tamil</p>
<button onClick={this.handleOnShowLess}>Show Less</button>
</>
            ):(
<button onClick={this.handleOnShowMore}>Show More</button>

            )
         
          }
                </div>
            </div>
         </>  
        );
    }
}

export default MoreLessApp;