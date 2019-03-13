import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {


  // const display = (box) =>{
  //   if(box.length===0){
  //     return (<span></span>);
  //   }
  //   let res=[]
  //   for(let i=0;i<box.length;i++){
  //     res.push(<div className='bounding-box' key={i} style={{top:box[i].top_row,right:box[i].right_col,bottom:box[i].bottom_row,left:box[i].left_col}}></div>)
  //   }
  //   return res;
  // }
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
          box.map(box=>{
            return <div className='bounding-box' key={box.top_row} style={{top:box.top_row,right:box.right_col,bottom:box.bottom_row,left:box.left_col}}></div>
          })
        }
      </div>
    </div>
  );
}

export default FaceRecognition;