import { PriceRow } from "@/types_db";


export default function PricesTable({ data }: { data: Array<PriceRow> }) {

    return (
        <div className="overflow-x-auto">
            <table className="table table-md bg-base-200 text-accent-main/80">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Active</th>
                        <th>Description</th>
                        <th>Unit Amount</th>
                        <th>Currency</th>
                        <th>Type</th>
                        <th>Interval</th>
                        <th>Interval Count</th>
                        <th>Type</th>
                        <th>Type</th>
                        <th>Type</th>
                        <th>Trial Period Days</th>
                        <th>Price ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: PriceRow, index: number) => (
                        <tr className="bg-base-100">
                            <th>{index + 1}</th>
                            <td>{item.id}</td>
                            <td>{item.products?.name}</td>
                            <td>{item.active ? 'True': 'False'}</td>
                            <td>{item.description}</td>

                            <td>{item.unit_amount}</td>
                            <td>{item.currency}</td>
                            <td>{item.type}</td>
                            <td>{item.interval}</td>
                            <td>{item.interval_count}</td>
                            <td>{item.trial_period_days}</td>
                            <td>{item.price_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}