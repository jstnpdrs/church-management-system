import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props, users) {
    // const allUsers = async () => {
    //     return await props.users;
    // };
    // console.log(props.users);
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
                    <div className="grid w-full grid-cols-3 p-4 mb-2 text-lg font-bold text-gray-500 bg-white rounded shadow">
                        <p>Name</p>
                        <p>Address</p>
                        <p>Date</p>
                    </div>
                    <div className="grid w-full grid-cols-3 p-4 mb-2 bg-white rounded shadow hover:bg-gray-200 hover:cursor-pointer">
                        <p>Justine</p>
                        <p>Dongon East, Numancia, Aklan</p>
                        <p>October 20, 2022</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
