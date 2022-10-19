import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props, users) {
    // const allUsers = async () => {
    //     return await props.users;
    // };
    console.log(props.users);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {props.users.map((user) => {
                            return (
                                <div
                                    key={user.id}
                                    className="p-6 bg-white border-b border-gray-200"
                                >
                                    Welcome {user.name}!
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className="bg-white shadow-sm sm:rounded-lg">
                        <p>{JSON.stringify(props.users)}</p>
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
