import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";

export default function Dashboard(props) {
    // const allUsers = async () => {
    //     return await props.users;
    // };
    console.log(props);
    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
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
            selector: (row) => row.birthday,
            sortable: true,
        },
        {
            name: "Place of Birth",
            selector: (row) => row.pob,
            sortable: true,
        },
        {
            name: "Parents",
            cell: () => "parents data",
            sortable: true,
        },
        {
            name: "Legitimitas",
            cell: () => "Legitimate",
            sortable: true,
        },
        {
            name: "Godparents",
            cell: () => "godparents data",
            sortable: true,
        },
        {
            name: "Sponsors",
            cell: () => "sponsors data",
            sortable: true,
        },
        {
            name: "Date of Confirmation",
            selector: (row) => row.confirmationDate,
            sortable: true,
        },
    ];
    const data = [
        {
            id: 1,
            name: "name data",
            birthday: "bday",
            pob: "place of birth",
            father: "father",
            mother: "mother",
            confirmationDate: "confirmation date",
            godparents: "",
            sponsors: "",
            minister: "",
        },
        // {
        //     id: 2,
        //     name: "Athena Ellyse Matorre Pedrosa",
        //     birthday: "February 24, 2020",
        //     pob: "DRSTMH, Kalibo, Aklan",
        //     father: "Justine Pedrosa",
        //     mother: "Gerielyn Matorre",
        //     confirmationDate: "February 24, 2021",
        //     godparents: "",
        //     sponsors: "",
        //     minister: "",
        // },
        // {
        //     id: 3,
        //     name: "Athena Ellyse Matorre Pedrosa",
        //     birthday: "February 24, 2020",
        //     pob: "DRSTMH, Kalibo, Aklan",
        //     father: "Justine Pedrosa",
        //     mother: "Gerielyn Matorre",
        //     confirmationDate: "February 24, 2021",
        //     godparents: "",
        //     sponsors: "",
        //     minister: "",
        // },
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
                        <input
                            type="month"
                            name="confirmationDate"
                            id="confirmationDate"
                            onChange={(e) => console.log(e.target.value)}
                            defaultValue={"2022-10"}
                        />
                        <button
                            onClick={() => {
                                return <p>asd</p>;
                            }}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            + Add
                        </button>
                    </div>
                    <div className="w-full p-4 bg-white">
                        <DataTable
                            title="Register of Confirmation"
                            columns={columns}
                            data={data}
                            responsive
                            pagination
                            fixedHeader
                            pointerOnHover
                            highlightOnHover
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
