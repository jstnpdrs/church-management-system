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
        name: props?.baptism?.name || "",
        pob: props?.baptism?.pob || "",
        dob: props?.baptism?.dob || "",
        "baptism-date": props?.baptism["baptism-date"] || "",
        parents: props?.baptism?.parents || "Mother: " + "\r\n" + "Father: ",
        legitimitas: props?.baptism?.legitimitas || "",
        godparents: props?.baptism?.godparents || "",
        sponsors: props?.baptism?.sponsors || "",
        minister: props?.baptism?.minister || "",
    });
    const [editEnabled, setEditEnabled] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.put("/baptism/" + props.baptism.id, formData, {
            onSuccess: (res) => {
                // setBaptisms(res.props.baptisms);
                // Inertia.reload({ only: ["baptisms"] });
                // modalClose();
                // Inertia.visit("baptism");
                // reset();
                // console.log(res.props);
                toast.success("Record updated");
            },
        });
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
                        Create Baptism
                    </h2>
                </div>
            }
        >
            <div className="py-12">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between w-full my-2">
                        <button
                            onClick={() => Inertia.visit("/baptism")}
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
                                onClick={toggleEdit}
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
                                    <div className="mb-3">
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
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="godparents"
                                            className="w-full"
                                        >
                                            Godparents
                                            <textarea
                                                placeholder="Enter Godparents"
                                                className="w-full"
                                                name="godparents"
                                                id="godparents"
                                                cols="30"
                                                rows="2"
                                                onChange={handleOnchange}
                                                value={formData.godparents}
                                                disabled={
                                                    editEnabled ? false : true
                                                }
                                            ></textarea>
                                        </label>
                                    </div>
                                    <div className="mb-3">
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
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="baptism-date"
                                            className="w-full"
                                        >
                                            Date of Baptism
                                            <input
                                                type="date"
                                                name="baptism-date"
                                                value={formData["baptism-date"]}
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
