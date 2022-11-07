import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";
import Modal from "@/Components/Modal";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";

export default function Baptism(props) {
    const [modalVisible, setModalVisible] = useState(false);
    function modalClose() {
        setModalVisible(false);
    }
    function modalOpen() {
        setModalVisible(true);
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

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
        godparents: "",
        sponsors: "",
        minister: "",
    });
    const [filters, setFilters] = useState({
        monthFilter: "",
        yearFilter: "",
    });
    useEffect(() => {
        console.log(filters);
    }, [filters]);

    function onFilterChange(e) {
        setFilters((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    const [baptisms, setBaptisms] = useState(props.baptisms);
    const filteredData = baptisms.filter((baptism) => {
        return (
            months[new Date(baptism["baptism-date"]).getMonth()] ===
            filters.monthFilter
        );
    });
    const columns = [
        {
            name: "No.",
            selector: (row) => {
                const index = baptisms.findIndex((object) => {
                    return object.id === row.id;
                });
                return index + 1;
            },

            sortable: true,
            width: "70px",
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Birthday",
            selector: (row) => row.dob,
            sortable: true,
        },
        {
            name: "Place of Birth",
            selector: (row) => row.pob,
            sortable: true,
        },
        {
            name: "Parents",
            selector: (row) => <pre>{row.parents}</pre>,
            sortable: true,
        },
        {
            name: "Legitimitas",
            cell: () => "Legitimate",
            sortable: true,
        },
        // {
        //     name: "Godparents",
        //     selector: (row) => <pre>{row.godparents}</pre>,
        //     sortable: true,
        // },
        // {
        //     name: "Sponsors",
        //     selector: (row) => <pre>{row.sponsors}</pre>,
        //     sortable: true,
        // },
        {
            name: "Minister",
            selector: (row) => row.minister,
            sortable: true,
        },
        {
            name: "Date of Baptism",
            selector: (row) => row["baptism-date"],
            sortable: true,
        },
    ];

    function handleOnchange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("baptism", formData, {
            onSuccess: (res) => {
                // setBaptisms(res.props.baptisms);
                Inertia.visit("/baptism");
                reset();
                modalClose();
                toast.success("Record added");
            },
        });
    }

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
                        {/* <input
                            type="text"
                            name="yearFilter"
                            id="yearFilter"
                            onChange={(e) => console.log(e.target.value)}
                            defaultValue={"2022-10"}
                        /> */}
                        <div className="space-x-2">
                            <select
                                name="yearFilter"
                                id="yearFilter"
                                onChange={onFilterChange}
                                defaultValue={new Date().getFullYear()}
                            >
                                <option
                                    key="default"
                                    value=""
                                    className="p-5 m-4"
                                >
                                    Select Year
                                </option>
                                <option
                                    key="2022"
                                    value="2022"
                                    className="h-12"
                                >
                                    2022
                                </option>
                                <option
                                    key="2021"
                                    value="2021"
                                    className="h-12"
                                >
                                    2021
                                </option>
                                <option
                                    key="2020"
                                    value="2020"
                                    className="h-12"
                                >
                                    2020
                                </option>
                                <option
                                    key="2019"
                                    value="2019"
                                    className="h-12"
                                >
                                    2019
                                </option>
                            </select>
                            <select
                                name="monthFilter"
                                id="monthFilter"
                                onChange={onFilterChange}
                            >
                                <option value="" className="p-5 m-4">
                                    Select Month
                                </option>
                                {months.map((month) => (
                                    <option
                                        key={month}
                                        value={month}
                                        className="h-12"
                                    >
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* <input
                            type="month"
                            name="baptismDate"
                            id="baptismDate"
                            onChange={(e) => console.log(e.target.value)}
                            defaultValue={"2022-10"}
                        /> */}
                        {/* <Link href={route("baptism.create")}> */}
                        <button
                            onClick={modalOpen}
                            // onClick={() => Inertia.visit("/baptism")}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            + Add
                        </button>
                        {/* </Link> */}
                    </div>
                    <div className="w-full p-4 bg-white">
                        <DataTable
                            title="Register of Baptism"
                            columns={columns}
                            data={baptisms}
                            responsive
                            pagination
                            fixedHeader
                            pointerOnHover
                            highlightOnHover
                            on
                            // defaultSortAsc={false}
                            onRowClicked={
                                (row) => Inertia.visit(`baptism/${+row.id}`)
                                // toast.success(row.name + " clicked!")
                            }
                        />
                    </div>
                </div>
            </div>
            <Modal
                modalVisible={modalVisible}
                modalClose={modalClose}
                fullscreen={false}
                title="Add Record"
                className="relative"
            >
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-between h-full "
                >
                    <div className="h-full m-5">
                        <div className="h-full">
                            <div className="mb-3">
                                <label htmlFor="name" className="w-full">
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
                                        autoComplete="off"
                                        placeholder="Enter place of birth"
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
                                <label htmlFor="parents" className="w-full">
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
                                <label htmlFor="godparents" className="w-full">
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
                                <label htmlFor="sponsors" className="w-full">
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
                                <label htmlFor="minister" className="w-full">
                                    Minister
                                    <input
                                        type="text"
                                        name="minister"
                                        value={formData.minister}
                                        className="w-full"
                                        onChange={handleOnchange}
                                        autoFocus
                                        autoComplete="off"
                                        placeholder="Enter name"
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 flex items-center justify-center w-full space-x-2 border-t border-gray-400 rounded-b">
                        <button
                            type="submit"
                            className="w-full p-4 text-white bg-slate-800"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
