import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Container>
         <Routes>
         <Route path="/" element={<UserList />}/>
         <Route path="/user/new" element={<UserForm />}/>
       </Routes>
       </Container>
     </BrowserRouter>
    </div>
  );
}

export default App;
