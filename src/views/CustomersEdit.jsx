import axios from 'axios';
import { useState, useEffect, createRef } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/CustomerEdit.css'

export default function CustomersEdit() {

    const [customers, setCustomers] = useState([])
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [age, setAge] = useState()
    const [emails, setEmails] = useState()
    const [country, setCountry] = useState()
    const [favoritecolor, setFavoritecolor] = useState()
    const [job, setJob] = useState()
    const [salary, setSalary] = useState()
    const { id } = useParams()

    const employee_idRef = createRef()
    const first_nameRef = createRef()
    const last_nameRef = createRef()
    const ageRef = createRef()
    const emailRef= createRef()
    const countryRef = createRef()
    const favoritecolorRef = createRef()
    const jobRef = createRef()
    const salaryRef = createRef()



    useEffect(() => {
        EditCustomers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const EditCustomers = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/customers/edit/{customers_employee_id}?customers_id=${id}`);
            setCustomers(response.data);
            setFirstname(response.data.first_name)
            setLastname(response.data.last_name)
            setAge(response.data.age)
            setEmails(response.data.email)
            setCountry(response.data.country)
            setFavoritecolor(response.data.favorite_color)
            setJob(response.data.job_title)
            setSalary(response.data.salary)
        } catch (error) {
            console.error(error);
        }
    }

    const onSubmit = async () => {

        const payload = {
            employee_id: employee_idRef.current.value,
            first_name: first_nameRef.current.value,
            last_name: last_nameRef.current.value,
            age: parseInt(ageRef.current.value),
            email: emailRef.current.value,
            country: countryRef.current.value,
            favorite_color: favoritecolorRef.current.value,
            job_title: jobRef.current.value,
            salary: parseInt(salaryRef.current.value)
        }
        console.log(payload)
        if (confirm("Please check data \n" + "First Name : " + firstname + "\nLast Name : " + lastname + "\nAge : " + age + "Email : " + emails + "\nCountry : " + country + "\nFavorit color : " + favoritecolor + "\nJob : " + job + "\nSalary : " + salary)) {
            try {
                const response_update = await axios.put(`http://localhost:8000/api/customers/${customers._id}`, payload)
                return response_update
            }
            catch (e) {
                console.log(e)
            }
        } else {
            console.log("no")
        }
    }

    return (
        <div>
            <div className="centered-container">
                <div className="h-70 w-40 d-flex flex-column box-shadow">
                    <form onSubmit={onSubmit} >
                        <div className="p-2 back-color">
                            <h3>Update Information</h3>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Employee ID</h4>
                            <input type="text" value={customers.employee_id} placeholder='Employee ID' disabled="enable" ref={employee_idRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>First Name</h4>
                            <input type="text" placeholder='First Name' value={firstname} onChange={(e) => {
                                setFirstname(e.target.value)
                            }} ref={first_nameRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Last Name</h4>
                            <input type="text" name="" id="" placeholder='Last Name' value={lastname} onChange={(e) => {
                                setLastname(e.target.value)
                            }} ref={last_nameRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Age</h4>
                            <input type="number" name="" id="" placeholder='Age' value={age} onChange={(e) => {
                                setAge(e.target.value)
                            }} ref={ageRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Email</h4>
                            <input type="email" name="" id="" placeholder='Email' value={emails} onChange={(e) => {
                                setEmails(e.target.value)
                            }} ref={emailRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Country</h4>
                            <input type="text" name="" id="" placeholder='Country' value={country} onChange={(e) => {
                                setCountry(e.target.value)
                            }} ref={countryRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Favorite color</h4>
                            <input type="text" name="" id="" placeholder='Favorite color' value={favoritecolor} onChange={(e) => {
                                setFavoritecolor(e.target.value)
                            }} ref={favoritecolorRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Job</h4>
                            <input type="text" name="" id="" placeholder='Job' value={job} onChange={(e) => {
                                setJob(e.target.value)
                            }} ref={jobRef}/>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Salary</h4>
                            <input type="number" name="" id="" placeholder='Salary' value={salary} onChange={(e) => {
                                setSalary(e.target.value)
                            }} ref={salaryRef}/>
                        </div>
                        <div className="update-button">
                            <button className="button">Update Data</button>
                            
                        </div>

                    </form>
                    <div className='update-button back-to-page'>
                        <a href="/customer" style={{cursor: 'pointer'}}><button className="button" >back to customer</button></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
