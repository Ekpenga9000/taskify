import React from 'react'

const Footer = () => {
  return (
      <footer className='footer'>
          <p className='text-xs'>&copy; 2024 Taskify. All rights reserved.</p>
          <ul className='flex items-center gap-8 text-xs'>
              <li>Terms of Service</li>
              <li>Policy</li>
          </ul>
    </footer>
  )
}

export default Footer