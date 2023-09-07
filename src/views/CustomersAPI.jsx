import axios from 'axios';
import { useState, useEffect } from 'react';
import './Css/CustomerAPICSS.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Outlet } from 'react-router-dom';

export default function CustomersAPI() {
  const [customers, setCustomers] = useState([]);
  const [pages, setPages] = useState(1)
  const [firstidData, setFirstidData] = useState(0)
  const [lastidData, setLastidData] = useState(25)
  // const [dataSearch, setDataSearch] = useState()
  const PageSize = Math.ceil((customers.length) / 25)


  useEffect(() => {
    fetchCustomers();
    SelectData(pages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/customers/`);
      setCustomers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const NextPage = () => {
    let page = pages + 1
    if (page >= PageSize) {
      setPages(PageSize)
      return 0
    }
    setPages(page)
  }

  const PreviousPage = () => {
    let page = pages - 1
    if (page <= 0) {
      page = 1
      return page
    }
    setPages(page)
    SelectData(page)
  }

  const SelectData = (page) => {
    console.log(page)
    let Num_Page = (customers.length) / 25
    for (let index = 1; index <= Math.ceil(Num_Page); index++) {
      if (page == index) {
        let first_id = (pages - 1) * 25
        let last_id = pages * 25
        setFirstidData(first_id)
        setLastidData(last_id)
        break
      }
    }
  }

  const onClickDelete = async (customer_id) => {
    if (customer_id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/customers/${customer_id}`);
        fetchCustomers();
      } catch (error) {
        console.error(error);
      }
    }
  }

  const onChangePage = (e) => {
    setPages(e.target.value)
    SelectData(e.target.value)
  }



  return (
    <div>
      
      <h2>Customers</h2>
      <div className="container-button">
        <div className="nav-fill">
          <div className="nav-search-field">
            <label className='search-box'>Search Goods</label>
            <input type="text" id="searchtextbox" autoComplete='off' placeholder='UID000000' className='nav-input-search' tabIndex="0" aria-label='Search Goods' spellCheck="false"  />
          </div>
        </div>

        <div className="d-inline">
          <div className="d-flex">
            <span className="nav-search-submit-text" id='nav-search-submit-text'>
              <button className='nav-search-button'><BiSearch className='nav-search-button-icons' /></button>
            </span>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Country</th>
            <th>Favorite color</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delect</th>
          </tr>
        </thead>
        <tbody>
          {customers.slice(firstidData, lastidData).map((customer) => (
            <tr key={customer.id}>
              <td>{customer.employee_id}</td>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.age}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              <td>{customer.favorite_color}</td>
              <td>{customer.job_title}</td>
              <td>{customer.salary}</td>
              <td><a href={`/customer/edit/${customer.employee_id}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} className='edit'><AiFillEdit /></a></td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <button
                  onClick={() => onClickDelete(customer.employee_id)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    background: 'none', // Remove background color
                    border: 'none', // Remove border
                    cursor: 'pointer',
                  }}
                  className='delete'
                >
                  <AiFillDelete />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <div className='container-button'>
        <button onClick={PreviousPage} className='Previous-button'>Previous Page</button>

        <div className="nav-fill">
          <div className="nav-search-field">
            <label className='search-box'>Page</label>
            <input value={pages} onChange={onChangePage} type="text" id="searchtextbox" autoComplete='off' placeholder='Search Page' className='nav-input' tabIndex="0" aria-label='Search Goods' spellCheck="false" />
            <span className='page-text'> / {PageSize}</span>
          </div>
        </div>

        <button onClick={NextPage} className='Next-button'>Next Page</button>
        <div className="insert-customer">
          <a href="/customer/insert" className='insert-a'><button className='insert-button'>Insert</button></a>
        </div>
      </div>
    </div>
  );
}
