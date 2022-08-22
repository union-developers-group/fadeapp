import { fireEvent, render } from '@testing-library/react'

import { ChatbootButton } from '.'

describe('<ChatbootButton />', () => {
  it('Should render the ChatbootButton', () => {
    const { getByTestId } = render(<ChatbootButton />)
    const chatbootButton = getByTestId('chatboot-button')
    fireEvent.click(chatbootButton)
  })
})
