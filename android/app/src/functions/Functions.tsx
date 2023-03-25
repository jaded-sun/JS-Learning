import React from 'react';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

export const addItemToList = (array: Array<Object>, note: Object) => {
    return [...array, note]
}

export const removeItemFromList = (array: Array<Object>, noteId: Int32) => {
    return array.filter((note, noteIndex) => noteIndex !== noteId)
}

export const editNoteTitleOrContent = (note: Object, propName: string, newValue: string) => {
    return {...note, propName: `${newValue}`}
}

export const switchNoteImportance = (value: Boolean) => {
    return !value
}