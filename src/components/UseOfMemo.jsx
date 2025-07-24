import React,{memo} from 'react'

const Greet = memo(function ({name}) {
    console.log("rerendered with ", name);
    return (
        <div className="counter-child">
            Hello {name}
        </div>
    )
})

function UseOfMemo() {
  return (
    <div>
        <div className="counter-parent">
            <Greet name="Harshil"/>
            <Greet name="Rakesh"/>
            <Greet name="Vijay"/>
            <Greet name="Jayent"/>
            <Greet name="Shekhar"/>
        </div>
    </div>
  )
}
 
export default UseOfMemo;