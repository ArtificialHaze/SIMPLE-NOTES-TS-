export interface INote {
  id: number;
  title: string;
  details: string;
  color: string;
  date: string;
}

export interface ICreateNotes {
  addNotes: (note: INote) => void;
}

export interface INotesProps {
  notes: INote[];
  deleteNote: (id: number) => void;
}

export interface INoteProps {
  note: INote;
  deleteNote: (id: number) => void;
}
