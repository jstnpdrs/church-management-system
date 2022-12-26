import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";
import { useForm } from "@inertiajs/inertia-react";

export default function BaptismShow(props) {
    // useEffect(() => {
    //     console.log(props);
    // }, []);
    const {
        data: formData,
        setData: setFormData,
        errors,
        reset,
    } = useForm({
        name: props?.confirmation?.name || "",
        pob: props?.confirmation?.pob || "",
        dob: props?.confirmation?.dob || "",
        confirmation_date: props?.confirmation?.confirmation_date || "",
        parents:
            props?.confirmation?.parents || "Mother: " + "\r\n" + "Father: ",
        // legitimitas: props?.confirmation?.legitimitas || "",
        // godparents: props?.confirmation?.godparents || "",
        // sponsors: props?.confirmation?.sponsors || "",
        godparents_sponsors: props?.confirmation?.godparents_sponsors || "",
        minister: props?.confirmation?.minister || "",
        status: props?.confirmation?.status || "Pending",
    });
    const [editEnabled, setEditEnabled] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.put("/confirmation/" + props.confirmation.id, formData, {
            onSuccess: (res) => {
                // setBaptisms(res.props.confirmations);
                // Inertia.reload({ only: ["confirmations"] });
                // modalClose();
                // Inertia.visit("confirmation");
                // reset();
                // console.log(res.props);
                toast.success("Record updated");
            },
        });
    }
    function handleDelete(e) {
        if (confirm("Are you sure you want to delete this record?")) {
            Inertia.delete("/confirmation/" + props.confirmation.id, {
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
                        Create Confirmation
                    </h2>
                </div>
            }
        >
            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full my-2">
                        <button
                            onClick={() => Inertia.visit("/confirmation")}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            {"< Back"}
                        </button>
                        <div className="space-x-2">
                            <button
                                onClick={() =>
                                    toast.warning("Under Development")
                                }
                                // onClick={() => Inertia.visit("/confirmation")}
                                className="px-4 py-2 text-white bg-green-700"
                            >
                                View Certificate
                            </button>
                            <button
                                onClick={toggleEdit}
                                // onClick={() => Inertia.visit("/confirmation")}
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
                                        <label htmlFor="pob" className="w-full">
                                            Place of Birth
                                            <input
                                                type="text"
                                                name="pob"
                                                value={formData.pob}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoComplete="on"
                                                list="brgys"
                                                placeholder="Enter place of birth"
                                                required
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            />
                                            <datalist id="brgys">
                                                <option value="Alegria, Buruanga, Aklan">
                                                    Alegria, Buruanga, Aklan
                                                </option>
                                                <option value="Bagongbayan, Buruanga, Aklan">
                                                    Bagongbayan, Buruanga, Aklan
                                                </option>
                                                <option value="Balusbos, Buruanga, Aklan">
                                                    Balusbos, Buruanga, Aklan
                                                </option>
                                                <option value="Bel-is, Buruanga, Aklan">
                                                    Bel-is, Buruanga, Aklan
                                                </option>
                                                <option value="Cabugan, Buruanga, Aklan">
                                                    Cabugan, Buruanga, Aklan
                                                </option>
                                                <option value="El Progreso, Buruanga, Aklan">
                                                    El Progreso, Buruanga, Aklan
                                                </option>
                                                <option value="Habana, Buruanga, Aklan">
                                                    Habana, Buruanga, Aklan
                                                </option>
                                                <option value="Katipunan, Buruanga, Aklan">
                                                    Katipunan, Buruanga, Aklan
                                                </option>
                                                <option value="Mayapay, Buruanga, Aklan">
                                                    Mayapay, Buruanga, Aklan
                                                </option>
                                                <option value="Nazareth, Buruanga, Aklan">
                                                    Nazareth, Buruanga, Aklan
                                                </option>
                                                <option value="Panilongan, Buruanga, Aklan">
                                                    Panilongan, Buruanga, Aklan
                                                </option>
                                                <option value="Poblacion, Buruanga, Aklan">
                                                    Poblacion, Buruanga, Aklan
                                                </option>
                                                <option value="Santander, Buruanga, Aklan">
                                                    Santander, Buruanga, Aklan
                                                </option>
                                                <option value="Tag-osip, Buruanga, Aklan">
                                                    Tag-osip, Buruanga, Aklan
                                                </option>
                                                <option value="Tigum, Buruanga, Aklan">
                                                    Tigum, Buruanga, Aklan
                                                </option>
                                            </datalist>
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
                                        <label
                                            htmlFor="parents"
                                            className="w-full"
                                        >
                                            Parents
                                            <textarea
                                                placeholder="Enter Parents"
                                                className="w-full"
                                                name="parents"
                                                id="parents"
                                                cols="30"
                                                rows="2"
                                                onChange={handleOnchange}
                                                value={formData.parents}
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            ></textarea>
                                        </label>
                                    </div>
                                    {/* <div className="mb-3">
                                        <label
                                            htmlFor="legitimitas"
                                            className="w-full"
                                        >
                                            Legitimitas
                                            <select
                                                className="w-full"
                                                name="legitimitas"
                                                id="legitimitas"
                                                onChange={handleOnchange}
                                                value={formData.legitimitas}
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            >
                                                <option value="Legitimate">
                                                    Legitimate
                                                </option>
                                                <option value="Illegitimate">
                                                    Illegitimate
                                                </option>
                                            </select>
                                        </label>
                                    </div> */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="godparents_sponsors"
                                            className="w-full"
                                        >
                                            Godparents/Sponsors
                                            <textarea
                                                placeholder="Enter Godparents/Sponsors"
                                                className="w-full"
                                                name="godparents_sponsors"
                                                id="godparents_sponsors"
                                                cols="30"
                                                rows="2"
                                                onChange={handleOnchange}
                                                value={
                                                    formData.godparents_sponsors
                                                }
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            ></textarea>
                                        </label>
                                    </div>
                                    {/* <div className="mb-3">
                                        <label
                                            htmlFor="sponsors"
                                            className="w-full"
                                        >
                                            Sponsors
                                            <textarea
                                                placeholder="Enter Sponsors"
                                                className="w-full"
                                                name="sponsors"
                                                id="sponsors"
                                                cols="30"
                                                rows="2"
                                                onChange={handleOnchange}
                                                value={formData.sponsors}
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            ></textarea>
                                        </label>
                                    </div> */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="confirmation_date"
                                            className="w-full"
                                        >
                                            Date of Confirmation
                                            <input
                                                type="date"
                                                name="confirmation_date"
                                                value={
                                                    formData.confirmation_date
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
                                            htmlFor="minister"
                                            className="w-full"
                                        >
                                            Minister
                                            <input
                                                type="text"
                                                name="minister"
                                                value={formData.minister}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                // autoFocus
                                                autoComplete="off"
                                                placeholder="Enter name"
                                                required
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            />
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
                                                    disabled={
                                                        editEnabled
                                                            ? false
                                                            : true
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
                                    )}
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
