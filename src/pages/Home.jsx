import { Link } from 'react-router-dom'
import { router } from '../router/index.jsx'

const Home = () => {
  return (
    <nav style={{ width: "60%", margin: "auto" }}>
      <h2>Home</h2>
      <ul>
        {
          router.filter(r => r.title !== '首页').map(r => {
            return (
              <li key={r.path}>
                <Link to={`/${r.path}`}>{r.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Home
