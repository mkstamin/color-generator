import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './components/SingleColor';

function App() {

  const [color, setColor] = useState('');
const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#746a4f').all(9));


  const handelSubmit = (e)=>{
    e.preventDefault();
    //all(10) here 10 = weight
    try {
      const colors = new Values(color).all(9)
      console.log(colors);
      setList(colors);
    } catch (err) {
      setError(true)
      console.log(err);
    }
    
  }

  return (
  <>  
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handelSubmit}>
        <input 
          type="text" 
          className={`${error ? 'error' : null}`} 
          placeholder="#746a4f"
          onChange={(e)=>setColor(e.target.value)}
        />
        <button type="submit" className="btn">submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color,index)=>{
        return(
          <SingleColor 
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        )
      })}
    </section>
  </>  
  );
}

export default App
