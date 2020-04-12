/** @jsx jsx*/
import { jsx } from 'theme-ui'

const MyTechBooks = () => {

  return (    
    <nav className="sideBar" sx={{ 
      height: '100%', /* Full-height: remove this if you want "auto" height */
      width: '160px', /* Set the width of the sidebar */
      position: 'flex', /* Fixed Sidebar (stay in place on scroll) */
      zIndex: 1, /* Stay on top */
      top: 0, /* Stay at the top */
      left: 0,
      backgroundColor: '#111', /* Black */
      overFlowX: 'hidden', /* Disable horizontal scroll */
      paddingTop: '20px',
      border: '1px solid', 
    }}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </nav>
  )
}

export default MyTechBooks