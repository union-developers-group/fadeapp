import { Logo } from 'components/Logo'

import { ChatMessage } from '..'

import {
  ChatbootModalRobotLogo,
  ChatbootModalRobotTextContainer,
} from '../styles'

export const botMessageTemplate = (chatMessage: ChatMessage) => {
  return (
    <p key={chatMessage.messageId} className={ChatbootModalRobotTextContainer}>
      <span className={ChatbootModalRobotLogo}>
        <Logo width={98} height={98} hiddenText={true} />
      </span>
      {chatMessage.message}
    </p>
  )
}