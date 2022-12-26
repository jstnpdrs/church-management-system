import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";

export default function PledgeCreate(props) {
    // useEffect(() => {
    //     console.log(props);
    // }, []);
    const {
        data: formData,
        setData: setFormData,
        errors,
        reset,
    } = useForm({
        name: "",
        dob: "",
        age: "",
        gender: "",
        civil_status: "",
        marriage: "",
        wife_husband: "",
        wife_husband_age: "",
        wife_husband_dob: "",
        beneficiaries: "",
        status: "Pending",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/pledge", formData, {
            onSuccess: (res) => {
                // setPledges(res.props.pledges);
                // Inertia.reload({ only: ["pledges"] });
                // modalClose();
                // Inertia.visit("pledge");
                // reset();
                console.log(res);
                toast.success("Record added");
            },
        });
    }
    function handleOnchange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create Pledge
                    </h2>
                </div>
            }
        >
            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full my-2">
                        <button
                            onClick={() => Inertia.visit("/pledge")}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            {"< Back"}
                        </button>
                    </div>
                    <div className="w-full p-4 bg-white">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col justify-between h-full "
                        >
                            <div className="h-full m-5">
                                <div className="h-full">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="w-full"
                                        >
                                            Name
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoFocus
                                                autoComplete="off"
                                                placeholder="Enter name"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dob" className="w-full">
                                            Date of Birth
                                            <input
                                                type="date"
                                                name="dob"
                                                value={formData.dob}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoComplete="off"
                                                placeholder="Enter date of birth"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="age" className="w-full">
                                            Age
                                            <input
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoComplete="off"
                                                placeholder="Enter age"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="gender"
                                            className="w-full"
                                        >
                                            Gender
                                            <select
                                                className="w-full"
                                                name="gender"
                                                id="gender"
                                                onChange={handleOnchange}
                                                value={formData.gender}
                                            >
                                                <option value="Male">
                                                    Male
                                                </option>
                                                <option value="Female">
                                                    Female
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="civil_status"
                                            className="w-full"
                                        >
                                            Civil Status
                                            <select
                                                className="w-full"
                                                name="civil_status"
                                                id="civil_status"
                                                onChange={handleOnchange}
                                                value={formData.civil_status}
                                            >
                                                <option value="Single">
                                                    Single
                                                </option>
                                                <option value="Married">
                                                    Married
                                                </option>
                                                <option value="Divorced">
                                                    Divorced
                                                </option>
                                                <option value="Separated">
                                                    Separated
                                                </option>
                                                <option value="Widowed">
                                                    Widowed
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="marriage"
                                            className="w-full"
                                        >
                                            Marriage
                                            <select
                                                className="w-full"
                                                name="marriage"
                                                id="marriage"
                                                onChange={handleOnchange}
                                                value={formData.marriage}
                                            >
                                                <option value="Church">
                                                    Church
                                                </option>
                                                <option value="Civil">
                                                    Civil
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="wife_husband"
                                            className="w-full"
                                        >
                                            Wife/Husband
                                            <input
                                                type="text"
                                                name="wife_husband"
                                                value={formData.wife_husband}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoFocus
                                                autoComplete="off"
                                                placeholder="Enter name"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="wife_husband_age"
                                            className="w-full"
                                        >
                                            Age
                                            <input
                                                type="number"
                                                name="wife_husband_age"
                                                value={
                                                    formData.wife_husband_age
                                                }
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoFocus
                                                autoComplete="off"
                                                placeholder="Enter age"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="wife_husband_dob"
                                            className="w-full"
                                        >
                                            Date of Birth
                                            <input
                                                type="date"
                                                name="wife_husband_dob"
                                                value={
                                                    formData.wife_husband_dob
                                                }
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoComplete="off"
                                                placeholder="Enter date of birth"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="beneficiaries"
                                            className="w-full"
                                        >
                                            Beneficiaries
                                            <textarea
                                                placeholder="Enter Beneficiaries"
                                                className="w-full"
                                                name="beneficiaries"
                                                id="beneficiaries"
                                                cols="30"
                                                rows="2"
                                                onChange={handleOnchange}
                                                value={formData.beneficiaries}
                                            ></textarea>
                                        </label>
                                    </div>
                                    {props?.auth?.user?.role != "staff" && (
                                        <div className="mb-3">
                                            <label
                                                htmlFor="legitimitas"
                                                className="w-full"
                                            >
                                                Status
                                                <select
                                                    className="w-full"
                                                    name="status"
                                                    id="status"
                                                    onChange={handleOnchange}
                                                    value={formData.status}
                                                >
                                                    <option value="Pending">
                                                        Pending
                                                    </option>
                                                    <option value="Approved">
                                                        Approved
                                                    </option>
                                                </select>
                                            </label>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full space-x-2 border-t border-gray-400 rounded-b">
                                <button
                                    type="submit"
                                    className="w-full p-4 text-white bg-slate-800"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
