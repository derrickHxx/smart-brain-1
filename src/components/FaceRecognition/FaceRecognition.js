import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const result = (box) =>{
  	if(Object.keys(box).length===0){
  		return (<span></span>)
  	}
  	let res = [];
  	// console.log(box)
  	const length = Object.keys(box)[0].length;
  	for(let i=0;i<length;i++){
  		res.push(<div className='bounding-box' key={i} style={{top:box.top_row[i],right:box.right_col[i],bottom:box.bottom_row[i],left:box.left_col[i]}}></div>);
  	}
  	return res;
  }
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {result(box)}
      </div>
    </div>
  );
}

export default FaceRecognition;