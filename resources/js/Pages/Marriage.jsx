import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Marriage(props) {
    useEffect(() => {
        const table = $("#marriageTable").DataTable({
            stateSave: true,
            colReorder: true,
            lengthMenu: [
                [10, 25, 50, 100, -1],
                [10, 25, 50, 100, "All"],
            ],
            responsive: {
                details: false,
            },
            info: true,
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -1 },
            ],
            dom: "Bfrtip",
            // buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
            buttons: ["pageLength", "colvis", "excel", "print"],
        });
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Marriage
                </h2>
            }
        >
            <Head title="Marriage" />

            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="w-full p-4 bg-white">
                        <div className="flex items-center justify-between pb-5">
                            <h1 className="text-2xl">Register of Marriage</h1>
                            <button
                                onClick={() => Inertia.visit("marriage/create")}
                                className="px-4 py-2 text-white bg-slate-700"
                            >
                                + Add
                            </button>
                        </div>
                        <table id="marriageTable" className="text-xs">
                            <thead className="text-[11px]">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Age</th>
                                    <th>Civil Status</th>
                                    <th>Parents</th>
                                    <th>Witnesses</th>
                                    <th>Priest</th>
                                    <th>Marriage Address</th>
                                    <th data-priority="1">Date of Marriage</th>
                                    <th data-priority="1">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.marriages?.map((marriage, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="hover:cursor-pointer hover:bg-slate-200 even:bg-slate-50"
                                            onClick={() =>
                                                Inertia.visit(
                                                    `marriage/${marriage.id}`
                                                )
                                            }
                                        >
                                            <td>{i}</td>
                                            <td>{marriage.name}</td>
                                            <td>{marriage.address}</td>
                                            <td>{marriage.age}</td>
                                            <td>{marriage.civil_status}</td>
                                            <td>{marriage.parents}</td>
                                            <td>{marriage.witnesses}</td>
                                            <td>{marriage.priest}</td>
                                            <td>{marriage.marriage_address}</td>
                                            <td>
                                                {new Date(
                                                    marriage.marriage_date
                                                ).toDateString()}
                                            </td>
                                            <td>{marriage.status}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
