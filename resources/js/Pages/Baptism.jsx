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
                    Baptism
                </h2>
            }
        >
            <Head title="Baptism" />

            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full my-2">
                        <input
                            type="month"
                            name="baptismDate"
                            id="baptismDate"
                            onChange={(e) => console.log(e.target.value)}
                            defaultValue={"2022-10"}
                        />
                        <button className="px-4 py-2 text-white bg-slate-700">
                            + Add
                        </button>
                    </div>
                    {/* <div className="grid w-full grid-cols-3 p-4 mb-2 text-lg font-bold text-gray-500 bg-white rounded shadow">
                        <p>Name</p>
                        <p>Address</p>
                        <p>Date</p>
                    </div>
                    <div className="grid w-full grid-cols-3 p-4 mb-2 bg-white rounded shadow hover:bg-gray-200 hover:cursor-pointer">
                        <p>Justine</p>
                        <p>Dongon East, Numancia, Aklan</p>
                        <p>October 20, 2022</p>
                    </div> */}
                    <div className="w-full p-4 bg-white">
                        <table className="w-full">
                            <thead className="border-b border-gray-400">
                                <tr>
                                    <th className="pb-2 text-left">Name</th>
                                    <th className="pb-2 text-left">Address</th>
                                    <th className="pb-2 text-left">Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="py-3 my-3 border-b border-gray-200">
                                    <td>Justine Pedrosa</td>
                                    <td>Dongon East, Numancia, Aklan</td>
                                    <td>October 20, 2022</td>
                                    <td className="flex space-x-4">
                                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                    </td>
                                </tr>
                                <tr className="py-3 my-3 border-b border-gray-200">
                                    <td>Justine Pedrosa</td>
                                    <td>Dongon East, Numancia, Aklan</td>
                                    <td>October 20, 2022</td>
                                    <td className="flex space-x-4">
                                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                    </td>
                                </tr>
                                <tr className="py-3 my-3 border-b border-gray-200">
                                    <td>Justine Pedrosa</td>
                                    <td>Dongon East, Numancia, Aklan</td>
                                    <td>October 20, 2022</td>
                                    <td className="flex space-x-4">
                                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
