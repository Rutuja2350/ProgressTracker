import './App.scss'
import SideNavbar from './components/navbar/SideNav';

function App() {
  return (
    <>
      <SideNavbar
      li={[
        ["Dashboard", "images/dashboard.svg"],
        ["Time Tracker", "images/clock.svg"],
        ["Get Motivated", "images/motivation.svg"],
        ["My Profile", "images/profile.svg"]
      ]}
    />
    </>
  )
}

export default App
