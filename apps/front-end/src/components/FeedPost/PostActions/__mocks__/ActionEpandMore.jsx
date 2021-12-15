import React from "react"

export default function ActionEpandMore( {expanded , setExpanded}) {
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    return (
      <div data-expanded={`${expanded}`} className="action-expand-more-mock" onClick= {handleExpandClick} >
          
      </div>
    )
}