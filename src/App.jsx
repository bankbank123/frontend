import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './views/NotFound';
import CustomersAPI from './views/CustomersAPI';
import CustomerInsert from './views/CustomerInsert';
import CustomersEdit from './views/CustomersEdit';

function App() {

  return (
    <>
    <div>
      <a href="/customer">customer</a>
    </div>
      <Router>
        <Routes>
          <Route exact path='*' element={<NotFound/>}/>
          <Route path='/customer' element={<CustomersAPI/>}/>
          <Route path='/customer/insert' element={<CustomerInsert/>}/>
          <Route path='/customer/edit/:id' element={<CustomersEdit/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App