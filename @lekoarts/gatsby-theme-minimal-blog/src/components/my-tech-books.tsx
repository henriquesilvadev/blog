/** @jsx jsx*/
import { jsx } from 'theme-ui'

const MyTechBooks = () => {

  return (    
    <section className="sideBar" sx={{ 
      height: '500px', /* Full-height: remove this if you want "auto" height */
      width: '160px', /* Set the width of the sidebar */
      position: 'block', /* Fixed Sidebar (stay in place on scroll) */
      zIndex: 1, /* Stay on top */
      top: 20, /* Stay at the top */
      left: 10,
      backgroundColor: '#fff', /* Black */
      overFlowX: 'hidden', /* Disable horizontal scroll */
      paddingTop: '20px',
      border: '1px solid', 
    }}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </section>
  )
}

export default MyTechBooks