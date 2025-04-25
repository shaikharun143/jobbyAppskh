import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container-route">
      <div className="flex-start-home-contain">
        <h1 className="heading-home">
          {' '}
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="para-home">
          {' '}
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="button-home">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
