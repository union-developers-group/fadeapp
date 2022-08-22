import { Icon } from '@iconify/react';
import { Popover } from '@headlessui/react'
import { ChatbootIconStyle, ChatbootButtonStyle, ChatbootLabelStyle } from './styles'
import { ChatbootModal } from 'components/ChatbootModal';
export const ChatbootButton = () => {

  return (
    <Popover>
      <span className={ChatbootLabelStyle}>Chat</span>
      <Popover.Button data-testid="chatboot-button" className={ChatbootButtonStyle}>
        <Icon icon="iconoir:chat-bubble" className={ChatbootIconStyle} />
      </Popover.Button>
      
      <Popover.Panel>
      {({ close }) => (
          <ChatbootModal onCloseModal={() => close()}/>
      )}
      </Popover.Panel>

    </Popover>
  )
}
