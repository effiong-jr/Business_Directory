import { Jumbotron } from 'react-bootstrap'
import './footer.scss'

const Footer = () => {
  const date = new Date()
  return (
    <Jumbotron className='m-0 footer text-center'>
      <p>Demo Business Directory App</p>
      <p>
        Made by{' '}
        <a href='https://effiong-jr.com' className='text-info'>
          Me
        </a>
      </p>
      <p>&copy;{date.getFullYear()} </p>
    </Jumbotron>
  )
}

export default Footer
