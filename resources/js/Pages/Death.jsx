import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Death(props) {
    useEffect(() => {
        const table = $("#deathTable").DataTable({
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
                    Death
                </h2>
            }
        >
            <Head title="Death" />

            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="w-full p-4 bg-white">
                        <div className="flex items-center justify-between pb-5">
                            <h1 className="text-2xl">Register of Death</h1>
                            <button
                                onClick={() => Inertia.visit("death/create")}
                                className="px-4 py-2 text-white bg-slate-700"
                            >
                                + Add
                            </button>
                        </div>
                        <table id="deathTable" className="text-xs">
                            <thead className="text-[11px]">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Birthday</th>
                                    <th>Age</th>
                                    <th>Address</th>
                                    <th>Parents/Spouse</th>
                                    <th>Cemetery</th>
                                    <th>Date of Death</th>
                                    <th data-priority="1">Burial Date</th>
                                    <th data-priority="1">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.deaths?.map((death, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="hover:cursor-pointer hover:bg-slate-200 even:bg-slate-50"
                                            onClick={() =>
                                                Inertia.visit(
                                                    `death/${death.id}`
                                                )
                                            }
                                        >
                                            <td>{death.id}</td>
                                            <td>{death.name}</td>
                                            <td>
                                                {new Date(
                                                    death.dob
                                                ).toDateString()}
                                            </td>
                                            <td>{death.age}</td>
                                            <td>{death.address}</td>
                                            <td>{death.parents_spouse}</td>
                                            <td>{death.cemetery}</td>
                                            <td>
                                                {new Date(
                                                    death.death_date
                                                ).toDateString()}
                                            </td>
                                            <td>
                                                {new Date(
                                                    death.burial_date
                                                ).toDateString()}
                                            </td>
                                            <td>{death.status}</td>
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
