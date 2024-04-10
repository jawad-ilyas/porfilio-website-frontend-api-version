import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert';
import { ShowWorkData } from '../../Api/FetchWork.api.js';
import Model from '../../Components/Model/Model.jsx';

function ShowWork() {


    const [showData, setShowData] = useState()
    const [isloading, setIsloading] = useState(true)
    const [showModel, setShowModel] = useState(false)
    const [updateData, setUpdateData] = useState({});

    // console.log("showData into showWork.jsx",showData)
    // handle delete

    const deleteSweetAlert = (key) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    handleDelete(key)
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    const handleDelete = (key) => {
        console.log(key)


        axios.post("http://localhost:8080/api/v1/work/deleteWork", {
            _id: key
        }).then((response) => {
            console.log(response.data.data)
            setShowData(response.data.data)
            setIsloading(false)
        }).catch((error) => {
            console.log("error into delete")
        })
    }
    const handleUpdate = (key, name, description, avatar) => {

        setUpdateData({ name, key, description, avatar })



        setShowModel(true)
       
    }




    useEffect(() => {
        ; ((async () => {
            const { data, loading } = await ShowWorkData();
            console.log(data)
            setIsloading(loading)
            setShowData(data)
        })())

    }, [])

    return (
        <div className='relative'>
            {showModel && <Model modelValue={true} name={updateData.name} description={updateData.description} avatar={updateData.avatar}

                _id={updateData.key}

            />}

            {
                isloading == true ? <div class="border border-blue-300 shadow rounded-md p-4  w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>

                        </div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>

                        </div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>

                        </div>
                    </div>
                </div> : showData?.length != 0 ? showData?.map((item, index) => (
                    <div key={index} className=' grid items-center my-2 grid-cols-4 border border-gray-300 p-2'>
                        <div><img src={item.avatar} className='size-20 object-contain rounded-md'></img></div>
                        <div>
                            <p className='text-center font-bold'>Name </p>
                            <p className='text-center'>{item.name}</p>
                        </div>
                        <div>
                            <p className='text-center font-bold'>Description </p>
                            <p className='text-center truncate'>{item.description}</p>
                        </div>
                        <div>
                            <p className='text-center cursor-pointer bg-red-100 py-1 rounded-md' onClick={() => deleteSweetAlert(item?._id)}>Delete </p>
                            <p className='text-center cursor-pointer mt-2 bg-green-100 py-1 rounded-md ' onClick={() => handleUpdate(item?._id, item.name, item.description, item.avatar)}>Update</p>
                        </div>

                    </div>
                )) : <div> No Data is present</div>

            }
        </div>
    )
}

export { ShowWork }