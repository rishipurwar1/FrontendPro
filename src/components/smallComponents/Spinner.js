import React from 'react'

const Spinner = () => {
    return (
        <div>
            <img className="w-20 absolute top-1/2 left-1/2" src={require("../../assets/icons/loading.svg")} alt="loader"/>
        </div>
    )
}

export default Spinner
