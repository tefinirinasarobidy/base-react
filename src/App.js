import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Child from './components/Child';
import Liste from './list/Liste';

function App() {
  const [data,setData] = useState(
    [
      {
        "id": 1,
        "task": "Give dog a bath",
        "complete": true
      }, 
      {
        "id": 2,
        "task": "Do laundry",
        "complete": true
      }, {
        "id": 3,
        "task": "Vacuum floor",
        "complete": false
      }, {
        "id": 4,
        "task": "Feed cat",
        "complete": true
      }, {
        "id": 5,
        "task": "Change light bulbs",
        "complete": false
      }, {
        "id": 6,
        "task": "Go to Store",
        "complete": true
      }, {
        "id": 7,
        "task": "Fill gas tank",
        "complete": true
      }, {
        "id": 8,
        "task": "Change linens",
        "complete": false
      }, {
        "id": 9,
        "task": "Rake leaves",
        "complete": true
      }]
)
  const [input, setInput] = useState("")
  const isShowInitialize = useRef(false) // arbitré
  const inputEl = useRef(null)

  useEffect(() => {
      console.log(data)
    }, [])
  // watch if input change valeur
  useEffect(() => {
    if (isShowInitialize.current) {
      console.log('change valeur ');
    } else {
      isShowInitialize.current = false
    }
  }, [input])
  
  function LoopComponent() {
    return data.map((elemnt, index) => {
      return <Liste 
        index={index}
        elemnt={elemnt} 
        removeInListe= {removeInListe}
        key={index}/>
    })
  }
    
  function removeInListe(index) {
    setData(data.filter((dat,i) => i !== index))
  }
  const declencher = () => {
    console.log('declencher depuis parent')
  }
  function ajouter() {
    console.log(inputEl.current.value);
    setData ([...data,{id: data.length+1,task: inputEl.current.value,complete: true}])
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>{input}</div>
        <div className="input-group">
         <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
        </div>
        <Child declencher={() => declencher()} inp={input}/>
        {/* boucle */}
       <LoopComponent/>
        <input ref={inputEl} type="text" placeholder="ajouter autre liste"/>
       <button onClick={ajouter}> add</button>
      </header>
    </div>
  );
}

export default App;
