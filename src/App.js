import "./App.css";
import { useEffect, useRef, useState } from "react";
import Liste from "./components/list/Liste";
import axios from "axios";
import config from "./config/config";
import Create from "./components/create/Create";

function App() {
  const [data, setData] = useState([]);
  const [input,setInput] = useState('')
  const isShowInitialize = useRef(false); // arbitré
  const inputEl = useRef(null);
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(data);
    axios.get(config.baseUrl + 'api/listes').then(res => {
      console.log('res0',res);
      setData(res.data)
    })
  }, []);
  // watch if input change valeur
  useEffect(() => {
    if (isShowInitialize.current) {
      console.log("change valeur ");
    } else {
      isShowInitialize.current = false;
    }
  }, [input]);

  function LoopComponent() {
    return data.map((elemnt, index) => {
      return (
        <Liste
          index={index}
          elemnt={elemnt}
          removeInListe={removeInListe}
          key={index}
          modifierListe={modifierListe}
        />
      );
    });
  }
  function modifierListe(elemnt) {
    console.log('modif');
    let i = data.findIndex(el => el.id == elemnt.id)
    console.log('index',i);
    if (i > -1) {
      data[i] = elemnt
      console.log('data',data);
      setData([...data])
    }
  }
  function removeInListe(index,elemnt) {
    axios.delete(config.baseUrl + 'api/listes/delete/' + elemnt.id).then(res => {
      if (res.data.succes) {
        setData(data.filter((dat, i) => i !== index));
      }
    })
  }
  function ajouter(form,closeModal) {
    console.log("ezeze",form);
    axios.post(config.baseUrl + 'api/listes/create',form).then(res => {
      console.log("res",res);
      if (res.data.succes) {
        closeModal.current.click()
        setData([...data,res.data.succes])
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header container">
        <button onClick={() => setShow(true)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Ajouter
        </button>
         <Create ajouter={ajouter}/> 
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Addres</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            <LoopComponent/>
              
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
