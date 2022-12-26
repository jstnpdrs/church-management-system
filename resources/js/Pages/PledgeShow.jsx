import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";
import { useForm } from "@inertiajs/inertia-react";

export default function PledgeShow(props) {
    // useEffect(() => {
    //     console.log(props);
    // }, []);
    const {
        data: formData,
        setData: setFormData,
        errors,
        reset,
    } = useForm({
        name: props?.pledge?.name || "",
        dob: props?.pledge?.dob || "",
        age: props?.pledge?.age || "",
        gender: props?.pledge?.gender || "",
        civil_status: props?.pledge?.civil_status || "",
        marriage: props?.pledge?.marriage || "",
        wife_husband: props?.pledge?.wife_husband || "",
        wife_husband_age: props?.pledge?.wife_husband_age || "",
        wife_husband_dob: props?.pledge?.wife_husband_dob || "",
        beneficiaries: props?.pledge?.beneficiaries || "",
        status: props?.pledge?.status || "Pending",
    });
    const [editEnabled, setEditEnabled] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.put("/pledge/" + props.pledge.id, formData, {
            onSuccess: (res) => {
                // setPledges(res.props.pledges);
                // Inertia.reload({ only: ["pledges"] });
                // modalClose();
                // Inertia.visit("pledge");
                // reset();
                // console.log(res.props);
                toast.success("Record updated");
            },
        });
    }
    function handleDelete(e) {
        if (confirm("Are you sure you want to delete this record?")) {
            Inertia.delete("/pledge/" + props.pledge.id, {
                onSuccess: (res) => {
                    toast.success("Record deleted");
                },
            });
        }
    }
    function handleOnchange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    function toggleEdit() {
        setEditEnabled(true);
        toast.success("Edit enabled");
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
                        <div className="space-x-2">
                            <button
                                onClick={() =>
                                    toast.warning("Under Development")
                                }
                                // onClick={() => Inertia.visit("/pledge")}
                                className="px-4 py-2 text-white bg-green-700"
                            >
                                View Certificate
                            </button>
                            <button
                                onClick={toggleEdit}
                                // onClick={() => Inertia.visit("/pledge")}
                                className="px-4 py-2 text-white bg-blue-700"
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 text-white bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="w-full p-4 bg-white">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col justify-between h-full"
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            ></textarea>
                                        </label>
                                    </div>
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
                                                disabled={
                                                    editEnabled ? false : true
                                                }
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
                                </div>
                            </div>
                            {editEnabled && (
                                <div className="flex items-center justify-center w-full space-x-2 rounded-b">
                                    <button
                                        type="submit"
                                        className="w-full p-4 text-white bg-slate-800"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => setEditEnabled(false)}
                                        type="submit"
                                        className="w-full p-4 text-white bg-gray-500"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
