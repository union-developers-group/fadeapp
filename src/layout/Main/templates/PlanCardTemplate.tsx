import { PlanCard, PlanCardProps } from 'components/PlanCard'

export const PlanCardTemplate = (planCard: PlanCardProps) => {
  return (
    <PlanCard
      buttonText={planCard.buttonText}
      image={planCard.image}
      planType={planCard.planType}
      price={planCard.price}
      offer={planCard.offer}
      equivalentValue={planCard.equivalentValue}
      haveOffer={planCard.haveOffer}
      key={planCard.planType}
    />
  )
}
