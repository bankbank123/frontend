import './Css/HomePaegCss.css'

export default function HomePage() {
    return (
        <div>
            <h3>HomePage</h3>
            <div className="container-link">
                <a href="/customer" className='link'>Customers table</a>
                <a href="/item" className='link'>Items table</a>
            </div>

        </div>
    )
}
