/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import { HighlightItemProps } from '..'

import {
  highlightContainerStyle,
  imageContainerStyle,
  imageStyle,
  textContainerStyle,
  textStyle,
  titleStyle,
} from '../styles'

export const HighlightItemTemplate = (HighlightItem: HighlightItemProps) => {
  const { id, title, text, image } = HighlightItem
  return (
    <motion.div
      key={id}
      className={highlightContainerStyle}
      data-testid="highlight-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <div className={textContainerStyle}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={textStyle}>{text}</p>
      </div>
      <div className={imageContainerStyle}>
        <img className={imageStyle} src={image} alt={title} />
      </div>
    </motion.div>
  )
}
