import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp() {
  return (
    <div>
      <h1>Custom app | chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: '_blank'
//   },
//   children: 'click for google'
// }

// above reactElement wouldn't work bcz dom object me smjhti h nd apne direct use object de dia joki uske format me nhi h...agr use JSX do toh wo khud object me convert kregi jis format me chaiye use...so we will create another react element ...this another element will inject automatically

const anotherReactElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = " chai or code"

// creating react element according to the format of react...jis type ka object use chaiye wsa denge...
const reactElement = React.createElement(
  "a",
  { href: 'https://google.com', target: "_blank" },
  "click me to visit google",
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // <App />
  // myApp()
  reactElement
)
