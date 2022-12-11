import { Icon } from '@iconify/react'
import { useState } from 'react'

import { ChatbootModal } from 'components/Chatboot/ChatbootModal'

import { analyticsEvent } from 'services/googleAnalytics'

import {
  ChatbootIconStyle,
  ChatbootButtonStyle,
  ChatbootLabelStyle,
} from './styles'


export const ChatbootButton = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenModal() {
    setIsOpenModal((prevState) => !prevState)

    analyticsEvent('form_start','chatboot', 'Form Chatboot')
  }

  return (
    <>
      <button className={ChatbootButtonStyle} onClick={handleOpenModal}>
        <span className={ChatbootLabelStyle}>Chat</span>
        <Icon
          icon="iconoir:chat-bubble"
          aria-label="Abrir chat"
          className={ChatbootIconStyle}
        />
      </button>

      {isOpenModal && <ChatbootModal />}
    </>
  )
}
