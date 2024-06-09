import { WaitlistRow } from "@/types_db";


export default function WaitListTable({ data }: { data: Array<WaitlistRow> }) {

    return (
        <div className="overflow-x-auto">
            <table className="table table-md bg-base-200 text-accent-main/80">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: WaitlistRow, index: number) => (
                        <tr className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{new Date(item.created_at).toLocaleDateString('en-US')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}