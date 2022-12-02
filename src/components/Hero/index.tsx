import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Headline } from 'components/Headline'
import { Button } from 'components/Buttons/Button'
import { FormModal } from 'components/Form/FormModal'

import {
  ButtonContainer,
  ButtonStyle,
  HeroContainer,
  Subtitle,
  TitleContainer,
  Try,
} from './styles'

export interface HeroProps {
  subtitle: string
  headlineTitle: string
  textButton: string
  image: string
  tryText: string
}

export const Hero = ({
  subtitle,
  headlineTitle,
  textButton,
  tryText,
  image,
}: HeroProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function onOpen() {
    setIsOpen(true)
  }

  return (
    <div className={HeroContainer} style={{ backgroundImage: `url(${image})` }}>
      <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={TitleContainer}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Headline as="h1" title={headlineTitle} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className={Subtitle}>{subtitle}</p>
        </motion.div>
        <div className={ButtonContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Button onClick={onOpen} className={ButtonStyle}>
              {textButton}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease: [0, 0.1, 0.2, 1.01],
            }}
          >
            <p className={Try}>{tryText}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
