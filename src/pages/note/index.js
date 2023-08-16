import { useEffect, useState } from "react";
import "./App.css";
import AddNote from "../../components/AddNote";
import NoteList from "../../components/NoteList";
import SearchNote from "../../components/SearchNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  async function getNotes(params) {
    setLoading(true)
    let url = "http://localhost:8080/notes"
    if(params){
      url+=`?${new URLSearchParams({term: params})}`
    }
    const res = await fetch(url);
    const data = await res.json();
    setNotes(data);
    setTimeout(()=>{
      setLoading(false)
    },1000)
  }
  function handleSearch(e){
    setSearchTerm(e.target.value)
    getNotes(e.target.value)
  }
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <main className="container">
      <div>
        <h1>我的笔记本</h1>
        <SearchNote searchTerm={searchTerm} handleChange={handleSearch} />
        {loading ? 'loading...':<NoteList notes={notes} />}
        <AddNote />
      </div>
    </main>
  );
}

export default App;
