import React from 'react';
import { Circle, Line } from 'rc-progress';

const ProgressBar = ({ percent }) => {
  return (
    <>
      <div style={{ margin: 20 }}>
        <div style={{ fontSize: '19px' }}>Porcentagem: {percent}%</div>
        <Line
          percent={percent}
          strokeColor="#D9D9D9"
          strokeWidth={3}
          trailColor='#4682B4'
          trailWidth={3}
          strokeLinecap='round'
          gapDegree={0}
          gapPosition='top'
        />
      </div>
      <center>
        <div style={{ margin: 20, height: 200, width: 200 }}>
          <Circle
            percent={percent}
            strokeColor="#D9D9D9"
            strokeWidth={5}
            trailColor='#4682B4'
            trailWidth={5}
            strokeLinecap='round'
          />
        </div>
      </center>
    </>
  );
}

export default ProgressBar;
