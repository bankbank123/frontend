import axios from "axios"
import { createRef } from "react"
import './Css/CustomerEdit.css'

export default function CustomerInsert() {


    const first_nameRef = createRef()
    const last_nameRef = createRef()
    const ageRef = createRef()
    const emailRef = createRef()
    const countryRef = createRef()
    const favoritecolorRef = createRef()
    const jobRef = createRef()
    const salaryRef = createRef()

    const InsertData = () => {
        const payload = {
            first_name: first_nameRef.current.value,
            last_name: last_nameRef.current.value,
            age: parseInt(ageRef.current.value),
            email: emailRef.current.value,
            country: countryRef.current.value,
            favorite_color: favoritecolorRef.current.value,
            job_title: jobRef.current.value,
            salary: parseInt(salaryRef.current.value)
        }
        if (confirm("Please check data \n" + "First Name : " + payload.first_name + "\nLast Name : " + payload.last_name + "\nAge : " + payload.age + "Email : " + payload.email + "\nCountry : " + payload.country + "\nFavorit color : " + payload.favorite_color + "\nJob : " + payload.job_title + "\nSalary : " + payload.salary)) {
            try {
                const insert_data = axios.post(`http://127.0.0.1:8000/api/customers/`, payload)
                return insert_data
            } catch (e) {
                console.log(e)
            }
        } else {
            return
        }

    }

    return (
        <div>
            <div className="centered-container">
                <div className="h-70 w-40 d-flex flex-column box-shadow">
                    <form onSubmit={InsertData}>
                        <div className="p-2 back-color">
                            <h3>Insert Information</h3>
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>First Name</h4>
                            <input type="text" placeholder='First Name'  ref={first_nameRef} />
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Last Name</h4>
                            <input type="text" name="" id="" placeholder='Last Name'  ref={last_nameRef} />
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Age</h4>
                            <input type="number" name="" id="" placeholder='Age'  ref={ageRef} />
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Email</h4>
                            <input type="email" name="" id="" placeholder='Email'  ref={emailRef} />
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Country</h4>
                            <input type="text" name="" id="" placeholder='Country'  ref={countryRef} />
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Favorite color</h4>
                            <input type="text" name="" id="" placeholder='Favorite color'  ref={favoritecolorRef} />
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Job</h4>
                            <input type="text" name="" id="" placeholder='Job'  ref={jobRef} />
                        </div>
                        <div className="d-flex flex-column m-2 container-text">
                            <h4>Salary</h4>
                            <input type="number" name="" id="" placeholder='Salary'  ref={salaryRef} />
                        </div>
                        <div className="update-button">
                            <button className="button">Insert Data</button>

                        </div>

                    </form>
                    <div className='update-button back-to-page'>
                        <a href="/customer" style={{ cursor: 'pointer' }}><button className="button" >back to customer</button></a>
                    </div>

                </div>
            </div>
        </div>
    )
}
