import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Dialog } from '@headlessui/react'

import { Logo } from 'components/Shared/Logo'

import { botMessages, personMessages } from './mock'

import { BotMessageTemplate } from './templates/BotMessageTemplate'
import { PersonMessageTemplate } from './templates/PersonMessageTemplate'

import {
  ChatbootModalContainer,
  ChatbootModalSendButton,
  ChatbootModalHeaderLogo,
  ChatbootModalSendIcon,
  ChatbootModalMain,
  ChatbootModalTextarea,
  ChatbootModalHeader,
  ChatbootModalCloseButton,
  ChatbootModalCloseIcon,
} from './styles'

export interface ChatMessage {
  messageId: number
  message: string
}

export const ChatbootModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  function onClose() {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel className={ChatbootModalContainer}>
        <header className={ChatbootModalHeader}>
          <div className={ChatbootModalHeaderLogo}>
            <Logo width={101} height={21} colorText="dark" />
          </div>
          <button className={ChatbootModalCloseButton} onClick={onClose}>
            <Icon
              className={ChatbootModalCloseIcon}
              aria-label="Fechar chat"
              icon="ci:close-big"
            />
          </button>
        </header>
        <div className={ChatbootModalMain}>
          {botMessages.map(BotMessageTemplate)}
          {personMessages.map(PersonMessageTemplate)}
        </div>
        <footer>
          <form>
            <textarea
              className={ChatbootModalTextarea}
              placeholder="Digite a sua mensagem aqui"
            />
            <button type="submit" className={ChatbootModalSendButton}>
              <Icon
                className={ChatbootModalSendIcon}
                icon="ic:baseline-send"
                aria-label="Enviar mensagem"
              />
            </button>
          </form>
        </footer>
      </Dialog.Panel>
    </Dialog>
  )
}
