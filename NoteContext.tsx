import React, {createContext, ReactNode, useContext, useState} from 'react';

type Note = Readonly<{
  id: string;
  noteTitle: string;
  noteText: string;
  isImportant: boolean;
  isEmpty: boolean;
}>;

type NoteContext = Readonly<{
  notes: Note[];
  addNote(note: Note): void;
  updateNote(node: Note): void;
  deleteNote(note: Note): void;
}>;

type Props = Readonly<{
  children?: ReactNode;
}>;

const NoteContext = createContext<NoteContext | null>(null);

const NoteContextProvider = ({children}: Props) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes(prevNotes => [...prevNotes, note]);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(prevNotes =>
      prevNotes.map(note => (note.id === updatedNote.id ? updatedNote : note)),
    );
  };

  const deleteNote = (noteToDelete: Note) => {
    setNotes(prevNotes =>
      prevNotes.filter(note => note.id !== noteToDelete.id),
    );
  };

  const value = {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

const useNotes = () => useContext(NoteContext);

export {useNotes, NoteContextProvider};
