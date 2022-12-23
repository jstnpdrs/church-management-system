import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";
import { Inertia } from "@inertiajs/inertia";

export default function Confirmation(props) {
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
            <Head title="Confirmation" />

            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full my-2">
                        {/* <input
                            type="text"
                            name="yearFilter"
                            id="yearFilter"
                            onChange={(e) => console.log(e.target.value)}
                            defaultValue={"2022-10"}
                        /> */}
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
                                {/* <option
                                    key="default"
                                    value=""
                                    className="p-5 m-4"
                                >
                                    Select Year
                                </option>
                                <option
                                    key="2022"
                                    value="2022"
                                    className="h-12"
                                >
                                    2022
                                </option>
                                <option
                                    key="2021"
                                    value="2021"
                                    className="h-12"
                                >
                                    2021
                                </option>
                                <option
                                    key="2020"
                                    value="2020"
                                    className="h-12"
                                >
                                    2020
                                </option>
                                <option
                                    key="2019"
                                    value="2019"
                                    className="h-12"
                                >
                                    2019
                                </option> */}
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
                    </div>
                    <div className="w-full p-4 bg-white">
                        <DataTable
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
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
