import React from 'react';
import {useNotes} from './NoteContext';
import {assertsNeitherNullNorUndefined} from './util';

// Notes list
const Notes = () => {
  const notesContext = useNotes();

  assertsNeitherNullNorUndefined(notesContext);

  const {notes, addNote, updateNote, deleteNote} = notesContext;

  return (
    <>
      {/* @TODO add Note component */}
      {/* @TODO add ScrollView and List here*/}
      {notes.map(note => (
        <>{note.noteText}</>
      ))}
    </>
  );
};

export default Notes;
