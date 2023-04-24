import React from 'react';
import Image from 'react-image-resizer';
import img from './images'

function Cur() {

    return (
      <div>
        <Image
          img src={img} alt="cur" class="center"
          // height={100}
          // width={100}
          style={{width: 400, height: 400,borderRadius: 400/ 2}}
        />
      </div>
    );

}

export default Cur;