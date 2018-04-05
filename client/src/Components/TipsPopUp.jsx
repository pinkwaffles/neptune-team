import React from 'react';
import TipsList from './TipsList.jsx';

var TipsPopUp = (props) => (
  <div className="popup">
    <div className="popup_inner">
      <button className="btn btn-primary" onClick={props.clickCloseFn}>CLOSE EXPANDED LIST</button>
      <button className="btn btn-primary toprightclass" onClick={props.clickCloseFn}>X</button>
      <h2>Tips Expanded Reader</h2>
      <div className="popup_list_scrolls">
        <TipsList toggleFlaggedTip={props.toggleFlaggedTip} openFlagPopup={props.openFlagPopup} info={props.info}/>
      </div>
    </div>
  </div>
);
 
 
export default TipsPopUp;


