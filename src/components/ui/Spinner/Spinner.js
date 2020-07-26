import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles'

export default function Spinner() {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}
