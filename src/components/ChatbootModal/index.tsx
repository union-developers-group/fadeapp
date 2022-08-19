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
} from "./styles"
import { Logo } from "components/Logo";
import { Icon } from '@iconify/react';
import { botMessages, personMessages } from "./mock";
import { botMessageTemplate } from "./templates/botMessageTemplate";
import { personMessageTemplate } from "./templates/personMessageTemplate";

export interface ChatMessage {
  messageId: number
  message: string
}

interface ChatbootModalProps {
  onCloseModal: () => void
}

const onSendMessage = () => {
  console.log('Success send message')
}

export const ChatbootModal = ({ onCloseModal }: ChatbootModalProps) => {
  return (
    <div role="chatboot-modal" id="teaste" className={ChatbootModalContainer}>
      <header role="chatboot-modal-header" className={ChatbootModalHeader}>
        <div role="chatboot-modal-header-logo-container" className={ChatbootModalHeaderLogo}>
          <Logo width={101} height={21} />
        </div>
        <button
          className={ChatbootModalCloseButton}
          onClick={onCloseModal}
          role="chatboot-close-button"
        ><Icon className={ChatbootModalCloseIcon} icon="ci:close-big" /></button>
      </header>
      <div role="chatboot-modal-main" className={ChatbootModalMain}>
        {botMessages.map(botMessageTemplate)}
        {personMessages.map(personMessageTemplate)}
      </div>
      <footer role="chatboot-modal-footer">
        <form 
            role='chatboot-modal-form'
            onSubmit={(e)=> {
            e.preventDefault() 
            console.log('Success submit')
          }}>
          <textarea role="chatboot-modal-textarea" className={ChatbootModalTextarea} placeholder="Digite a sua mensagem aqui" />
          <button
            className={ChatbootModalSendButton}
            onClick={onSendMessage}
            role="chatboot-send-button"
            type="submit"
          >
            <Icon className={ChatbootModalSendIcon} icon="ic:baseline-send" />
          </button>
        </form>
      </footer>
    </div>
  )
}
