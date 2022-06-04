import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Menu from './components/Navbar';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Menu />
       <Container>
         <Routes>
         <Route index path="/" element={<UserList />}/>
         <Route path="/user/new" element={<UserForm />}/>
         <Route path="/user/:id/edit" element={<UserForm />}/>
       </Routes>
       </Container>
     </BrowserRouter>
    </div>
  );
}

export default App;
