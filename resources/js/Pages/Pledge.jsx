import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Pledge(props) {
    useEffect(() => {
        const table = $("#pledgeTable").DataTable({
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
                    Pledge
                </h2>
            }
        >
            <Head title="Pledge" />

            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="w-full p-4 bg-white">
                        <div className="flex items-center justify-between pb-5">
                            <h1 className="text-2xl">Register of Pledge</h1>
                            <button
                                onClick={() => Inertia.visit("pledge/create")}
                                className="px-4 py-2 text-white bg-slate-700"
                            >
                                + Add
                            </button>
                        </div>
                        <table id="pledgeTable" className="text-xs">
                            <thead className="text-[11px]">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Birthday</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Civil Status</th>
                                    <th>Marriage</th>
                                    <th>Wife/Husband</th>
                                    <th>Age</th>
                                    <th>Birthday</th>
                                    <th>Beneficiaries</th>
                                    <th data-priority="1">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.pledges?.map((pledge, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="hover:cursor-pointer hover:bg-slate-200 even:bg-slate-50"
                                            onClick={() =>
                                                Inertia.visit(
                                                    `pledge/${pledge.id}`
                                                )
                                            }
                                        >
                                            <td>{pledge.id}</td>
                                            <td>{pledge.name}</td>
                                            <td>
                                                {new Date(
                                                    pledge.dob
                                                ).toDateString()}
                                            </td>
                                            <td>{pledge.age}</td>
                                            <td>{pledge.gender}</td>
                                            <td>{pledge.civil_status}</td>
                                            <td>{pledge.marriage}</td>
                                            <td>{pledge.wife_husband}</td>
                                            <td>{pledge.wife_husband_age}</td>
                                            <td>{pledge.wife_husband_dob}</td>
                                            <td>{pledge.beneficiaries}</td>
                                            <td>{pledge.status}</td>
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
