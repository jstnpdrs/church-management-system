import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";

export default function BaptismCreate(props) {
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
        pob: "",
        dob: "",
        "baptism-date": "",
        parents: "Mother: " + "\r\n" + "Father: ",
        legitimitas: "",
        godparents: "",
        sponsors: "",
        minister: "",
        status: "Pending",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/baptism", formData, {
            onSuccess: (res) => {
                // setBaptisms(res.props.baptisms);
                // Inertia.reload({ only: ["baptisms"] });
                // modalClose();
                // Inertia.visit("baptism");
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
                                            />
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
