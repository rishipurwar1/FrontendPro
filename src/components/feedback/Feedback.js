import React from 'react'
import { Sidetab } from '@typeform/embed-react'

const Feedback = () => {
    return (
        <Sidetab
            id={process.env.REACT_APP_FEEDBACK_FORM_ID}
            buttonText="Feedback"
            buttonColor="#6826EB"
        />
    )
}

export default Feedback
