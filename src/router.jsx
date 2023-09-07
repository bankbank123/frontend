import { createBrowserRouter } from 'react-router-dom'
import CustomersAPI from './views/CustomersAPI'
import NotFound from './views/NotFound'
import CustomersEdit from './views/CustomersEdit'
import CustomerInsert from './views/CustomerInsert'
import HomePage from './views/HomePage'

const router = createBrowserRouter([
    {
        path: "/customer",
        element: <CustomersAPI/>
    },
    {
        path: "/customer/edit/:id",
        element: <CustomersEdit/>
    },
    {
        path: "/customer/insert",
        element: <CustomerInsert/>
    },
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/",
        element: <HomePage/>
    }
])

export default router