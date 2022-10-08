import { Icon } from '@iconify/react'
import { useState } from 'react'

import { ChatbootModal } from 'components/Chatboot/ChatbootModal'

import {
  ChatbootIconStyle,
  ChatbootButtonStyle,
  ChatbootLabelStyle,
} from './styles'

export const ChatbootButton = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenModal() {
    setIsOpenModal((prevState) => !prevState)
  }

  return (
    <div>
      <button className={ChatbootButtonStyle} onClick={handleOpenModal}>
        <span className={ChatbootLabelStyle}>Chat</span>
        <Icon
          icon="iconoir:chat-bubble"
          aria-label="Abrir chat"
          className={ChatbootIconStyle}
        />
      </button>

      {isOpenModal && <ChatbootModal />}
    </div>
  )
}
