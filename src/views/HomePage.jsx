import { Link} from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            HomePage
            <div>
                <Link to="/customer">customer</Link>
            </div>
        </div>
    )
}
