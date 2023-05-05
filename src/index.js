import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App/App'
import i18n from './i18n'

// normalize and basic styles for application
import 'normalize.css'
import './index.css'
import './sourses/styles/styles.scss'
import 'antd/dist/antd.css'
import 'video-react/dist/video-react.css'
import 'react-toastify/dist/ReactToastify.css'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
