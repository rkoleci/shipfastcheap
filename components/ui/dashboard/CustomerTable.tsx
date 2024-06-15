import { CustomerRow } from "@/types_db";


export default function CustomersTable({ data }: { data: Array<CustomerRow> }) {

    return (
        <div className="overflow-x-auto">
            <table className="table table-md bg-base-200 text-accent-main/80">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>User</th>
                        <th>Stripe Customer ID</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map((item: CustomerRow, index: number) => (
                        <tr className="bg-base-100">
                            <th>{index + 1}</th>
                            <td>{item.id}</td>
                            <td>{item.users?.full_name}</td>
                            <td>{item.stripe_customer_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}