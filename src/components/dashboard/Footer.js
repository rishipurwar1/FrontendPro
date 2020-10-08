import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="ml-64 mt-5 flex items-center justify-between p-3 bg-white shadow-lg">
            <h4 className="text-blue-900"><i className="fas fa-rocket mr-1"></i>CODINGSPACE</h4>
            <small className="text-blue-900">© 2020 CODINGSPACE. All right reserved</small>
            <div className="social flex items-center">
                <small className="text-base pr-2">Follow us on </small>
                <Link to="#" className="text-blue-900 fa-2x"><i class="fab fa-twitter"></i></Link>
                <Link to="#" className="text-blue-900 fa-2x mx-2"><i class="fab fa-facebook"></i></Link>
                <Link to="#" className="text-blue-900 fa-2x"><i class="fab fa-discord"></i></Link>
            </div>
        </footer>
    )
}

export default Footer
