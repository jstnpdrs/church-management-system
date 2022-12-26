import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";
import { useForm } from "@inertiajs/inertia-react";

export default function DeathShow(props) {
    // useEffect(() => {
    //     console.log(props);
    // }, []);
    const {
        data: formData,
        setData: setFormData,
        errors,
        reset,
    } = useForm({
        name: props?.death?.name || "",
        dob: props?.death?.dob || "",
        age: props?.death?.age || "",
        address: props?.death?.address || "",
        parents_spouse:
            props?.death?.parents_spouse || "Mother: " + "\r\n" + "Father: ",
        cemetery: props?.death?.cemetery || "",
        death_date: props?.death?.death_date || "",
        burial_date: props?.death?.burial_date || "",
        status: props?.death?.status || "Pending",
    });
    const [editEnabled, setEditEnabled] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.put("/death/" + props.death.id, formData, {
            onSuccess: (res) => {
                // setDeaths(res.props.deaths);
                // Inertia.reload({ only: ["deaths"] });
                // modalClose();
                // Inertia.visit("death");
                // reset();
                // console.log(res.props);
                toast.success("Record updated");
            },
        });
    }
    function handleDelete(e) {
        if (confirm("Are you sure you want to delete this record?")) {
            Inertia.delete("/death/" + props.death.id, {
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
                        Create Death
                    </h2>
                </div>
            }
        >
            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full my-2">
                        <button
                            onClick={() => Inertia.visit("/death")}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            {"< Back"}
                        </button>
                        <div className="space-x-2">
                            <button
                                onClick={() =>
                                    toast.warning("Under Development")
                                }
                                // onClick={() => Inertia.visit("/death")}
                                className="px-4 py-2 text-white bg-green-700"
                            >
                                View Certificate
                            </button>
                            <button
                                onClick={toggleEdit}
                                // onClick={() => Inertia.visit("/death")}
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
                                        <label
                                            htmlFor="address"
                                            className="w-full"
                                        >
                                            Address
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoComplete="on"
                                                list="brgys"
                                                placeholder="Enter address"
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
                                        <label htmlFor="age" className="w-full">
                                            Age
                                            <input
                                                type="number"
                                                min={0}
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
                                            htmlFor="parents_spouse"
                                            className="w-full"
                                        >
                                            Parents/Spouse
                                            <textarea
                                                placeholder="Enter Parents"
                                                className="w-full"
                                                name="parents_spouse"
                                                id="parents_spouse"
                                                cols="30"
                                                rows="2"
                                                onChange={handleOnchange}
                                                value={formData.parents_spouse}
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            ></textarea>
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="cemetery"
                                            className="w-full"
                                        >
                                            Cemetery
                                            <input
                                                type="text"
                                                name="cemetery"
                                                value={formData.cemetery}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoFocus
                                                autoComplete="off"
                                                placeholder="Enter cemetery"
                                                required
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            />
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="death_date"
                                            className="w-full"
                                        >
                                            Date of Death
                                            <input
                                                type="date"
                                                name="death_date"
                                                value={formData.death_date}
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
                                            htmlFor="burial_date"
                                            className="w-full"
                                        >
                                            Burial Date
                                            <input
                                                type="date"
                                                name="burial_date"
                                                value={formData.burial_date}
                                                className="w-full"
                                                onChange={handleOnchange}
                                                autoComplete="off"
                                                placeholder="Enter burial date"
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
