import { useState } from 'react';
import './App.css';



function App() {
  //statenin kendisi , değiştirilecek state
  const [item1, setName1] = useState("")
  const [item2, setName2] = useState("")
  const [item3, setName3] = useState("")

  const [entries, setEntries] = useState([])

  const [change, setChange] = useState("")

  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)

  const handleClear = () => {
    setEntries("")
  }
  const handleCreate = (event) => {
    event.preventDefault();
    setError1(false)
    setError2(false)
    setError3(false)

    if (item1 && item2 && item3) {
      setChange(`${item1}\n ${item2}\n ${item3}`);
      setEntries([...entries, { item1, item2, item3 }]);
      setName1("");
      setName2("");
      setName3("");
    } else {
      !item1 && setError1(true)
      !item2 && setError2(true)
      !item3 && setError3(true)
    }
  }
  return (
    <div className="App">
      <header className='header'>
        <h2 className='text'>Hoş Geldin Ebu Bekir Sıddık</h2>
      </header>

      <form action=''>
        <input
          type="text"
          placeholder='Item 1'
          onChange={(event) => setName1(event.target.value)}
          value={item1}
        />
        {error1 && (<p className='error'>Görmüyor musun Boş!</p>)}
        <input
          type="text"
          placeholder='Item 2'
          onChange={(event) => setName2(event.target.value)}
          value={item2}
        />
        {error2 && (<p className='error'>Görmüyor musun Boş!</p>)}

        <input
          type="text"
          placeholder='Item 3'
          onChange={(event) => setName3(event.target.value)}
          value={item3}
        />
        {error3 && (<p className='error'>Görmüyor musun Boş!</p>)}

        <input
          type="submit"
          value="Bas Dünyan Degişsin"
          onClick={handleCreate}
        />
        <button onClick={handleClear}>Dünyayi Sil</button>

      </form>

      <h1 ><span className='asd'> İtem'leriniz.</span></h1>
      {change && (
        entries.map(entry =>

          < ul >
            <li>{`${entry.item1}\n ${entry.item2}\n${entry.item3}`}</li>
          </ul>
        )
      )
      }

    </div >
  );
}

export default App;

