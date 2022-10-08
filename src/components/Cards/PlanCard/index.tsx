import { Button } from 'components/Buttons/Button'

import { formatPrice } from 'utils/formatPrice'

import {
  ButtonContainer,
  Container,
  ContentContainer,
  MinorPlanType,
  OfferStyle,
  OfferSubtitleStyle,
  PlanTypeStyle,
  PriceContainer,
  PriceContentContainer,
  PriceStyle,
  RenewStyles,
  SignStyle,
} from './styles'

export interface PlanCardProps {
  planType: 'Semanal' | 'Mensal' | 'Anual'
  price: number
  haveOffer?: boolean
  equivalentValue?: number
  offer?: number
  image: string
  buttonText: string
}

export const PlanCard = ({
  planType,
  price,
  haveOffer,
  offer,
  image,
  buttonText,
  equivalentValue,
}: PlanCardProps) => {
  const isMonthly = planType === 'Mensal'
  return (
    <div
      className={Container}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {haveOffer && (
        <div className={OfferStyle}>
          <span>{offer}%</span>
        </div>
      )}

      <div className={ContentContainer}>
        <div className={PriceContentContainer}>
          <h3 className={PlanTypeStyle}>{planType}</h3>

          <div className={PriceContainer}>
            <span className={SignStyle}>R$</span>
            <p className={PriceStyle}>
              {formatPrice(price)}
              <span className={MinorPlanType}>/{planType}</span>
            </p>
          </div>

          {haveOffer && (
            <p className={OfferSubtitleStyle}>{`(Equivalente a R$ ${formatPrice(
              equivalentValue!,
            )} por ${isMonthly ? 'semana' : 'mês'})`}</p>
          )}
        </div>

        <div className={ButtonContainer}>
          <Button size="small">{buttonText}</Button>
          <p className={RenewStyles}>Renovação automática</p>
        </div>
      </div>
    </div>
  )
}
