import { SubscriptionRow } from "@/types_db";


export default function SubscriptionsTable({ data }: { data: Array<SubscriptionRow> }) {

    return (
        <div className="overflow-x-auto">
            <table className="table table-md bg-base-200 text-accent-main/80">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>User name</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Cancel at period end</th>
                        <th>Created</th>
                        <th>Current period start</th>
                        <th>Current period end</th>
                        <th>Ended at</th>
                        <th>Cancel at</th>
                        <th>Trial start</th>
                        <th>Trial end</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: SubscriptionRow, index: number) => {

                        const value = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: item?.prices?.currency || 'usd',
                            minimumFractionDigits: 0
                        }).format((item?.prices?.unit_amount || 0) / 100);

                        return (
                        
                            <tr className="bg-base-100">
                                <th>{index + 1}</th>
                                <td>{item.id}</td>
                                <td>{item.users.full_name}</td>
                                <td>{item.status}</td>
                                <td>{value}</td>
                                <td>{item.quantity}</td>
                                <td>{item.cancel_at_period_end}</td>
                                <td>{item.created && new Date(item.created).toLocaleDateString('en-US')}</td>
                                <td>{item.current_period_start && new Date(item.current_period_start).toLocaleDateString('en-US')}</td>
                                <td>{item.current_period_end && new Date(item.current_period_end).toLocaleDateString('en-US')}</td>
                                <td>{item.ended_at && new Date(item.ended_at).toLocaleDateString('en-US')}</td>
                                <td>{item.cancel_at && new Date(item.cancel_at).toLocaleDateString('en-US')}</td>
                                <td>{item.trial_start && new Date(item.trial_start).toLocaleDateString('en-US')}</td>
                                <td>{item.trial_end && new Date(item.trial_end).toLocaleDateString('en-US')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}