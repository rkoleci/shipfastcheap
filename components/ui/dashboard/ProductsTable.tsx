import { ProductRow } from "@/types_db";
import Link from "next/link";


export default function ProductsTable({ data }: { data: Array<ProductRow> }) {

    return (
        <div className="overflow-x-auto">
            <table className="table table-md bg-base-200 text-accent-main/80">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Active</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: ProductRow, index: number) => (
                        <tr className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{item.id}</td>
                            <td>{item.active ? 'True':'False'}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                {item.image && <Link href={item.image} target="_blank">{item.image?.substring(0, 12)}</Link>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}