import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";

export default function BaptismShow(props) {
    useEffect(() => {
        console.log(props?.baptism);
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Baptism
                    </h2>
                    {/* <button
                        className="px-2 py-1 text-white bg-slate-700"
                        onClick={() => Inertia.visit("/baptism")}
                    >
                        {"< Back"}
                    </button> */}
                </div>
            }
        >
            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full my-2">
                        <button
                            onClick={() => Inertia.visit("/baptism")}
                            // onClick={() => Inertia.visit("/baptism")}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            {"< Back"}
                        </button>
                        <div className="space-x-2">
                            <button
                                onClick={() =>
                                    toast.warning("Under Development")
                                }
                                // onClick={() => Inertia.visit("/baptism")}
                                className="px-4 py-2 text-white bg-green-700"
                            >
                                View Certificate
                            </button>
                            <button
                                onClick={() =>
                                    toast.warning("Under Development")
                                }
                                // onClick={() => Inertia.visit("/baptism")}
                                className="px-4 py-2 text-white bg-blue-700"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() =>
                                    toast.warning("Under Development")
                                }
                                className="px-4 py-2 text-white bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="grid w-full grid-cols-2 p-4 bg-white">
                        {/* <p>{JSON.stringify(props.baptism)}</p> */}
                        <p>name :</p>
                        <p>{props.baptism.name}</p>
                        <p>birthday :</p>
                        <p>{props.baptism.birthday}</p>
                        <p>pob :</p>
                        <p>{props.baptism.pob}</p>
                        <p>dob :</p>
                        <p>{props.baptism.dob}</p>
                        <p>parents :</p>
                        <p>{props.baptism.parents}</p>
                        <p>legitimitas :</p>
                        <p>{props.baptism.legitimitas}</p>
                        <p>godparents :</p>
                        <p>{props.baptism.godparents}</p>
                        <p>sponsors :</p>
                        <p>{props.baptism.sponsors}</p>
                        <p>minister :</p>
                        <p>{props.baptism.minister}</p>

                        <p>baptism-date :</p>
                        <p>{props.baptism["baptism-date"]}</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
