import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Modal from "@/Components/Modal";

export default function Baptism({ baptisms, auth, errors }) {
    // export default function Baptism(props, baptisms) {
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
    });
    useEffect(() => {
        console.log(baptisms);
    }, []);

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
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
            selector: (row) => row.birthday,
            sortable: true,
        },
        {
            name: "Place of Birth",
            selector: (row) => row.pob,
            sortable: true,
        },
        {
            name: "Parents",
            cell: () => "parents data",
            sortable: true,
        },
        {
            name: "Legitimitas",
            cell: () => "Legitimate",
            sortable: true,
        },
        {
            name: "Godparents",
            cell: () => "godparents data",
            sortable: true,
        },
        {
            name: "Sponsors",
            cell: () => "sponsors data",
            sortable: true,
        },
        {
            name: "Date of Baptism",
            selector: (row) => row.confirmationDate,
            sortable: true,
        },
    ];
    const data = [
        {
            id: 1,
            name: "Athena Ellyse Matorre Pedrosa",
            birthday: "February 24, 2020",
            pob: "DRSTMH, Kalibo, Aklan",
            father: "Justine Pedrosa",
            mother: "Gerielyn Matorre",
            confirmationDate: "February 24, 2021",
            godparents: "",
            sponsors: "",
            minister: "",
        },
        {
            id: 2,
            name: "Athena Ellyse Matorre Pedrosa",
            birthday: "February 24, 2020",
            pob: "DRSTMH, Kalibo, Aklan",
            father: "Justine Pedrosa",
            mother: "Gerielyn Matorre",
            confirmationDate: "February 24, 2021",
            godparents: "",
            sponsors: "",
            minister: "",
        },
        {
            id: 3,
            name: "Athena Ellyse Matorre Pedrosa",
            birthday: "February 24, 2020",
            pob: "DRSTMH, Kalibo, Aklan",
            father: "Justine Pedrosa",
            mother: "Gerielyn Matorre",
            confirmationDate: "February 24, 2021",
            godparents: "",
            sponsors: "",
            minister: "",
        },
    ];
    // const allUsers = async () => {
    //     return await users;
    // };
    // console.log(props);
    async function handleSubmit(e) {
        e.preventDefault();
        await axios.post("baptism", formData).then((res) => {
            console.log(res.data);

            return res;
        });
    }
    function handleOnchange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    function modalClose() {
        setModalVisible(false);
    }
    function modalOpen() {
        setModalVisible(true);
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
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
                        {/* <Link href={route("baptism.create")}> */}
                        <button
                            onClick={modalOpen}
                            className="px-4 py-2 text-white bg-slate-700"
                        >
                            + Add
                        </button>
                        {/* </Link> */}
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
                        <DataTable
                            title="Register of Baptism"
                            columns={columns}
                            data={data}
                            responsive
                            pagination
                            fixedHeader
                            pointerOnHover
                            highlightOnHover
                        />
                    </div>
                </div>
            </div>
            <Modal
                modalVisible={modalVisible}
                modalClose={modalClose}
                fullscreen={false}
            >
                <div className="p-5">
                    <h1>Modal Title</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleOnchange}
                        />
                        <p>{formData.name ?? ""}</p>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
