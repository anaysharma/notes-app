import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewNote } from './NewNote';
import { Container } from 'react-bootstrap';

export type note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
};

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: tag[];
};

export type tag = {
  id: string;
  label: string;
};

function App() {
  const [notes, setNoted] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<tag[]>('TAGS', []);

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Show</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
