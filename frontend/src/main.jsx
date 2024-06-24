import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StationDetails from './Components/StationDetails.jsx'
import Widget from './Components/Widget.jsx'
import MetroNavigator from './Components/MetroNavigator.jsx'
import MetroRoutePlanner from './Components/MetroRoutePlanner.jsx'
import New from './Components/New.jsx'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StationDetails /> */}
    {/* <MetroNavigator /> */}
    {/* <MetroRoutePlanner /> */}
    {/* <Widget /> */}
    <New />
  </React.StrictMode>,
)
