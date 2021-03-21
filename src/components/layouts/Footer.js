import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="mt-auto sm:ml-0 md:ml-20 xl:ml-56 flex xs:flex-col sm:flex-row items-center justify-between py-3 px-4  bg-gray-900 border-t border-gray-800 shadow-lg">
            <h4 className="text-gray-300"><i className="fas fa-rocket mr-1"></i>CODINGSPACE</h4>
            <small className="text-gray-300 xs:py-4 sm:py-0">© 2020 CODINGSPACE. All right reserved</small>
            <div className="social flex items-center justify-center">
                <small className="text-base text-gray-300">Follow us on </small>
                <Link to="#" className="text-gray-300 fa-2x px-2" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
            </div>
        </footer>
    )
}

export default Footer
