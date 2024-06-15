import PricingUICTA from '../ui/PricingCTA';

export const revalidate = 0

interface Props {
    sessionId: string;
    extraClasses?: string
}

export default async function PricingCTA({ sessionId, extraClasses }: Props) {

    return (
        <PricingUICTA
            sessionId={sessionId}
            extraClasses={extraClasses}
        />
    )
}