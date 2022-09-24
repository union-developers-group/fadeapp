import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Dialog } from '@headlessui/react'

import { Input } from 'components/Input'
import { Button } from 'components/Button'

import {
  FormModalContainer,
  FormModalHeader,
  FormModalCloseButton,
  FormModalCloseIcon,
  FormModalTitle,
  FormModalInputContainer,
  FormModalText,
  FormModalTextLink,
  FormModalSubmitButton,
} from './styles'

export const FormModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  function onClose() {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel className={FormModalContainer}>
        <header className={FormModalHeader}>
          <h3 className={FormModalTitle}>Cadastre-se</h3>
          <button className={FormModalCloseButton} onClick={onClose}>
            <Icon
              className={FormModalCloseIcon}
              aria-label="Fechar chat"
              icon="ci:close-big"
            />
          </button>
        </header>

        <div className={FormModalInputContainer}>
          <Input label="Nome" name="name" type="text" />
          <Input label="Email" name="email" type="email" />
        </div>

        <p className={FormModalText}>
          Enviaremos um email para confirmar o seu endereço . <br />
          Leia a{' '}
          <a
            className={FormModalTextLink}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Política de Privacidade.
          </a>
        </p>
        <Button className={FormModalSubmitButton} size="large">
          Continuar
        </Button>
      </Dialog.Panel>
    </Dialog>
  )
}
