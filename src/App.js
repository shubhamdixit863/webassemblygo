import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [state,setState]=useState();

  useEffect(()=>{
    console.log(window.go)
    WebAssembly.instantiateStreaming(fetch("json.wasm"), window.go.importObject).then((result) => {
      window.go.run(result.instance);
  });
    
  },[])
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
