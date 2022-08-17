import { render, fireEvent, screen } from '@testing-library/react'
import { ChatbootModal } from '.'

const { getByRole } = screen

describe('<ChatbootModal />', () => {
  it('Should render in the document', () => {
    render(<ChatbootModal onCloseModal={() => 'close'} />)

    const chatbootModal = getByRole('chatboot-modal')

    const chatbootModalHeader = getByRole('chatboot-modal-header')
    const chatbootModalHeaderLogoContainer = getByRole('chatboot-modal-header-logo-container')
    const chatbootModalCloseButton = getByRole('chatboot-close-button')
    const chatbootModalMain = getByRole('chatboot-modal-main')
    const chatbootModalFooter = getByRole('chatboot-modal-footer')
    const chatbootModalForm = getByRole('chatboot-modal-form' )
    const chatbootModalTextarea = getByRole('chatboot-modal-textarea')
    const chatbootModalSendButton = getByRole('chatboot-send-button')
    
    expect(chatbootModal).toBeInTheDocument()

    expect(chatbootModal).toContainElement(chatbootModalHeader)
    expect(chatbootModal).toContainElement(chatbootModalMain)
    expect(chatbootModal).toContainElement(chatbootModalFooter)

    expect(chatbootModalHeader).toContainElement(chatbootModalHeaderLogoContainer)
    expect(chatbootModalHeader).toContainElement(chatbootModalCloseButton)

    expect(chatbootModalHeaderLogoContainer).toContainHTML('img')

    expect(chatbootModalCloseButton).toContainHTML('span')

    expect(chatbootModalMain).toHaveTextContent('Olá, bem vindo ao assistente virtual do Fade App. Comece escolhendo uma opção:')
    expect(chatbootModalMain).toHaveTextContent('Olá, não estou conseguindo achar o app na play store, poderia me ajudar?')

    expect(chatbootModalFooter).toContainElement(chatbootModalForm)
    
    expect(chatbootModalForm).toContainElement(chatbootModalTextarea)
    expect(chatbootModalForm).toContainElement(chatbootModalSendButton)
    
    expect(chatbootModalTextarea).not.toHaveTextContent('content')

    expect(chatbootModalSendButton).toContainHTML('span')
  })
})

  it('Shoud have close on press the button', () => {
    const handleClose = jest.fn()
    render(<ChatbootModal onCloseModal={handleClose} />)
    fireEvent.click(screen.getByRole('chatboot-close-button'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

    it('Shoud have send on press the button', () => {
      render(<ChatbootModal onCloseModal={() => 'close'} />)
      fireEvent.click(screen.getByRole('chatboot-send-button'))
    })

    it('Should match snapshot', () => {
      render(<ChatbootModal onCloseModal={() => 'close'} />)
      const chatbootModal = getByRole('chatboot-modal')

      expect(chatbootModal).toMatchSnapshot()
    })