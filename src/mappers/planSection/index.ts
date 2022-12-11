import { PlanSectionProps } from "types/graphql"

export const planSectionMapper = (planSections: PlanSectionProps[]) => {
  return (
    {
      tryText: planSections[0].tryText,
      plans: planSections[0].plans.map((plan) => ({
        planType: plan.plan,
        price: plan.price,
        image: plan.image.url,
        buttonText: plan.buttonText,
        haveOffer: plan?.promotional,
        equivalentValue: plan?.equivalentValue,
        offer: plan?.promotionalPrice,
      }))
    }
  )
}