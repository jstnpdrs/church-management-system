import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Baptism(props) {
    useEffect(() => {
        const table = $("#baptismTable").DataTable({
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
                    Baptism
                </h2>
            }
        >
            <Head title="Baptism" />

            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="w-full p-4 bg-white">
                        <div className="flex items-center justify-between pb-5">
                            <h1 className="text-2xl">Register of Baptism</h1>
                            <button
                                onClick={() => Inertia.visit("baptism/create")}
                                className="px-4 py-2 text-white bg-slate-700"
                            >
                                + Add
                            </button>
                        </div>
                        <table id="baptismTable" className="text-xs">
                            <thead className="text-[11px]">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Birthday</th>
                                    <th>Place of Birth</th>
                                    <th>Parents</th>
                                    <th>Legitimitas</th>
                                    <th>Minister</th>
                                    <th data-priority="1">Date of Baptism</th>
                                    <th data-priority="1">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.baptisms?.map((baptism, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="hover:cursor-pointer hover:bg-slate-200 even:bg-slate-50"
                                            onClick={() =>
                                                Inertia.visit(
                                                    `baptism/${baptism.id}`
                                                )
                                            }
                                        >
                                            <td>{baptism.id}</td>
                                            <td>{baptism.name}</td>
                                            <td>
                                                {new Date(
                                                    baptism.dob
                                                ).toDateString()}
                                            </td>
                                            <td>{baptism.pob}</td>
                                            <td>{baptism.parents}</td>
                                            <td>{baptism.legitimitas}</td>
                                            <td>{baptism.minister}</td>
                                            <td>
                                                {new Date(
                                                    baptism.baptism_date
                                                ).toDateString()}
                                            </td>
                                            <td>{baptism.status}</td>
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
