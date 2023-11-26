import React, { useState } from 'react'

function LetterBlock({letterCharacter, computerGenerated, points, setPoints}) {

  const [userSelected, setUserSelected] = useState(true);
  
  function letterSelected(e){

   if(e.target.innerText === computerGenerated){
    setPoints(points + 1);
    setUserSelected(false);
   }
   
  }

  return (
    <div className={userSelected? "letterBlock" : "letterBlock letterBlockRemove"}>
        <h3 onClick={letterSelected}>{letterCharacter}</h3>
    </div>
  )
}

export default LetterBlock