import { useReducer, useState } from "react";

function notesReducer(notes, action) {
  switch (action.type) {
    case "add": {
      return [
        ...notes,
        {
          id: action.id,
          note: action.note,
        },
      ];
    }
    case "delete": {
      return notes.filter((note) => {
        return note.id !== action.id;
      });
    }
    default:
        throw new Error("不符合的类型")
  }
}
function ReactStateSuper() {
  const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer,[]);

  function handleInputNote(e) {
    setNote(e.target.value);
  }
  function handleAddNote() {
    // setNotes((preNotes) => {
    //   const newNotes = [
    //     ...preNotes,
    //     {
    //       id: notes.length,
    //       note: note,
    //     },
    //   ];
    //   console.log("new", newNotes);
    //   return newNotes;
    // });
    dispatch({
        type: 'add',
        id: notes.length,
        note: note
    })
    setNote("");
  }
  function handleDelete(id) {
    // setNotes(
    //   notes.filter((note) => {
    //     return note.id !== id;
    //   })
    // );
    dispatch({
        type: 'delete',
        id
    })
  }

  return (
    <main>
      <h3>Note 列表</h3>
      <NoteList notes={notes} onDel={handleDelete}></NoteList>
      <input type="text" value={note} onChange={handleInputNote} />
      <button onClick={handleAddNote}>提交</button>
      <NoteCount count={notes.length}></NoteCount>
    </main>
  );
}

function NoteList({ notes, onDel }) {
  function handleDel(id) {
    onDel(id);
  }
  return (
    <>
      {notes.map((note) => (
        <p key={note.id}>
          👤{note.id}--- 😄{note.note} &nbsp;
          <button onClick={() => handleDel(note.id)}>删除</button>{" "}
        </p>
      ))}
    </>
  );
}
function NoteCount({ count }) {
  return (
    <>
      {" "}
      <p> 数量:{count}</p>{" "}
    </>
  );
}

export default ReactStateSuper;
