import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
// import DataTable from "react-data-table-component";
import { Inertia } from "@inertiajs/inertia";
// import "https://cdn.datatables.net/v/dt/dt-1.13.1/datatables.min.css";
// import "https://cdn.datatables.net/v/dt/dt-1.13.1/datatables.min.js";
// import "datatables.net-dt";
// import jQuery from "jquery";
export default function Confirmation(props) {
    // const $ = jQuery;
    useEffect(() => {
        const table = $("#confirmationTable").DataTable({
            stateSave: true,
            colReorder: true,
            lengthMenu: [
                [10, 25, 50, 100, -1],
                [10, 25, 50, 100, "All"],
            ],
            responsive: {
                details: false,
            },
            // scrollX: true,
            // autoWidth: true,
            info: true,
            // pageLength: 5,
            columnDefs: [
                { responsivePriority: 1, targets: 0 },
                { responsivePriority: 2, targets: -1 },
            ],
            dom: "Bfrtip",
            // buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
            buttons: ["pageLength", "colvis", "pdf", "print"],
        });
    }, []);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const years = [
        ...new Set(
            props?.confirmations
                ?.map((b) => new Date(b.confirmation_date).getFullYear())
                .sort(function (a, b) {
                    return b - a;
                })
        ),
    ];

    const [filters, setFilters] = useState({
        monthFilter: "",
        yearFilter: "",
    });

    function onFilterChange(e) {
        setFilters((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const filteredData = props?.confirmations?.filter((confirmation) => {
        if (filters.monthFilter && filters.yearFilter) {
            return (
                months[new Date(confirmation.confirmation_date).getMonth()] ===
                    filters.monthFilter &&
                new Date(confirmation.confirmation_date).getFullYear() ===
                    parseInt(filters.yearFilter)
            );
        }
        if (!filters.monthFilter && !filters.yearFilter) {
            return true;
        }
        return (
            months[new Date(confirmation.confirmation_date).getMonth()] ===
                filters.monthFilter ||
            new Date(confirmation.confirmation_date).getFullYear() ===
                parseInt(filters.yearFilter)
        );
    });
    const columns = [
        {
            name: "No.",
            selector: (row, index) => {
                // const index = props?.confirmations?.findIndex((object) => {
                //     return object.id === row.id;
                // });
                return index + 1;
            },

            sortable: true,
            width: "70px",
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Birthday",
            selector: (row) => row.dob,
            sortable: true,
        },
        {
            name: "Place of Birth",
            selector: (row) => row.pob,
            sortable: true,
        },
        {
            name: "Parents",
            selector: (row) => <pre className="font-sans">{row.parents}</pre>,
            sortable: true,
        },
        // {
        //     name: "Legitimitas",
        //     selector: (row) => row.legitimitas,
        //     sortable: true,
        // },
        {
            name: "Minister",
            selector: (row) => row.minister,
            sortable: true,
        },
        {
            name: "Date of Confirmation",
            selector: (row) => row.confirmation_date,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
    ];

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Confirmation
                </h2>
            }
        >
            {/* <div className="p-5">

            </div> */}
            <Head title="Confirmation" />

            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* <div className="flex justify-between w-full my-2">

                        <div className="space-x-2">
                            <select
                                name="yearFilter"
                                id="yearFilter"
                                onChange={onFilterChange}
                                // defaultValue={new Date().getFullYear()}
                            >
                                <option
                                    key="default"
                                    value=""
                                    className="p-5 m-4"
                                >
                                    Select Year
                                </option>
                                {years?.map((year, i) => (
                                    <option
                                        key={i}
                                        value={year}
                                        className="h-12"
                                    >
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="monthFilter"
                                id="monthFilter"
                                onChange={onFilterChange}
                            >
                                <option value="" className="p-5 m-4">
                                    Select Month
                                </option>
                                {months?.map((month) => (
                                    <option
                                        key={month}
                                        value={month}
                                        className="h-12"
                                    >
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={() => Inertia.visit("confirmation/create")}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            + Add
                        </button>
                    </div> */}
                    <div className="w-full p-4 bg-white">
                        {/* <DataTable
                            title="Register of Confirmation"
                            columns={columns}
                            data={filteredData || props?.confirmations}
                            responsive
                            pagination
                            fixedHeader
                            pointerOnHover
                            highlightOnHover
                            paginationPerPage={20}
                            paginationRowsPerPageOptions={[20, 30, 40, 50, 100]}
                            // defaultSortAsc={false}
                            onRowClicked={
                                (row) =>
                                    Inertia.visit(`confirmation/${+row.id}`)
                                // toast.success(row.name + " clicked!")
                            }
                        /> */}
                        <div className="flex items-center justify-between pb-5">
                            <h1 className="text-2xl">
                                Register of Confirmation
                            </h1>
                            <button
                                onClick={() =>
                                    Inertia.visit("confirmation/create")
                                }
                                className="px-4 py-2 text-white bg-slate-700"
                            >
                                + Add
                            </button>
                        </div>
                        <table id="confirmationTable" className="text-xs">
                            <thead className="text-[11px]">
                                <tr>
                                    <th>no</th>
                                    <th>name</th>
                                    <th>bd</th>
                                    <th>pob</th>
                                    <th>parents</th>
                                    <th>minister</th>
                                    <th data-priority="1">doc</th>
                                    <th data-priority="1">status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.confirmations?.map((c, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="hover:cursor-pointer hover:bg-slate-200 even:bg-slate-100"
                                            onClick={() =>
                                                Inertia.visit(
                                                    `confirmation/${c.id}`
                                                )
                                            }
                                        >
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                            <td>
                                                {new Date(c.dob).toDateString()}
                                            </td>
                                            <td>{c.pob}</td>
                                            <td>{c.parents}</td>
                                            <td>{c.minister}</td>
                                            <td>
                                                {new Date(
                                                    c.confirmation_date
                                                ).toDateString()}
                                            </td>
                                            <td>{c.status}</td>
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
