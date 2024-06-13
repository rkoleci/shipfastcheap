import { UsersRow } from "@/types_db";


export default function UsersTable({ data }: { data: Array<UsersRow> }) {

    return (
        <div className="overflow-x-auto">
            <table className="table table-md bg-base-200 text-accent-main/80">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Fullname</th>
                        <th>Payment Method</th>
                        <th>Billing Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: UsersRow, index: number) => (
                        <tr className="bg-base-100">
                            <th>{index + 1}</th>
                            <td>{item.id}</td>
                            <td>{item.full_name}</td>
                            <td>{item.payment_method?.toString()}</td>
                            <td>{item.payment_method?.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}