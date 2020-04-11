/** @jsx jsx */
import { jsx } from "theme-ui"

const ColorModeToggle = () => {
  return (
      <a sx={{ 
          display: 'inline-block',
          fontWeight: 'normal',
          textAlign: 'center',
          verticalAlign: 'middle',
          userSelect: 'none',
          padding: '0.375rem 0.75rem',
          fontSize: '1rem',
          borderRadius: '0.25rem',
          // backgroundColo: '#00000',
          boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)`,
          backgroundColor: '#000',
          borderWidth: 'initial',
          bordeStyle: 'none',
          borderColor: 'initial',
          borderImage: 'initial',
          transformOrigin: 'center center',
          transformDuration: '300ms',
          transformProperty: 'transform, box-shadow, -webkit-transform',
          color: '#fff',
          width: '210px',
          textDecoration: 'none',
          boxSizing: 'border-box',
          cursor: 'pointer',
          border: `1px solid #0000`,
          lineHeight: `1.5`,                                         
        }
      } href="https://github.com/henriquesilvadev" target="_blank">
        Github
      </a>  
  )
}

export default ColorModeToggle
