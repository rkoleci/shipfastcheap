import PricingUICTA from '../ui/PricingCTA';

export const revalidate = 0

interface Props {
    extraClasses?: string
}

export default async function PricingCTA({ extraClasses }: Props) {

    return (
        <PricingUICTA
            extraClasses={extraClasses}
        />
    )
}