import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App/App'
import i18n from './i18n'

// normalize and basic styles for application
import 'normalize.css'
import './index.css'
import './sourses/styles/styles.scss'

import 'react-toastify/dist/ReactToastify.css'
import "yet-another-react-lightbox/dist/styles.css";


// import 'antd/dist/antd.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
