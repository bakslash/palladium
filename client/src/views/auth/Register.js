import React from "react";
import { useState } from 'react'
import services from '../../api/services'
import { useHistory } from "react-router-dom";

export default function Register() {

  const [first_name, setFname] = useState()
  const [last_name, setLname] = useState()
  const [facility_name, setFacility] = useState()
  const [county, setCounty] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [month, setMonth] = useState()

  const history = useHistory();

  const handleFname = (e) => {
    setFname(e.target.value)
    console.log(first_name);
  }
  const handleLname = (e) => {
    setLname(e.target.value)
    console.log(last_name);
  }
  const handleFacility = (e) => {
    setFacility(e.target.value)
    console.log(facility_name);
  }
  const handleCounty = (e) => {
    setCounty(e.target.value)
    console.log(county);
  }
  const handleAge = (e) => {
    setAge(e.target.value)
    console.log(age);
  }
  const handleGender = (e) => {
    setGender(e.target.value)
    console.log(gender);
  }
  const handleMonth = (e) => {
    setMonth(e.target.value)
    console.log('yjis', month);
  }
  const handleSubmit = async (e) => {

    const data = { first_name, last_name, county, facility_name, age, gender, month }
    console.log( data);
    const response = await services.register(data)

    history.push("/admin/dashboard");

  }


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">


                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">

                <form className="border border-black">
                  <div className=" mt-6 mb-3 flex flex-row border border-red-500">

                    <input
                      type="text"
                      className=" px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow  w-1/2 border border-black"
                      placeholder="First Name"
                      onChange={handleFname}
                    />

                    <input
                      type="text"
                      className=" px-3 py-3 ml-3 text-blueGray-600 bg-white rounded text-sm shadow w-1/2 "
                      placeholder="Last Name"
                      onChange={handleLname}
                    />

                  </div>

                  <div className="  mt-6 mb-3 flex flex-row border border-red-500">

                    <input
                      type="text"
                      className=" px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow  w-1/2 border border-black"
                      placeholder="County"
                      onChange={handleCounty}
                    />

                    <input
                      type="text"
                      className=" px-3 py-3 ml-3 text-blueGray-600 bg-white rounded text-sm shadow w-1/2 "
                      placeholder="Month"
                      onChange={handleMonth}
                    />

                  </div>

                  <div className=" mt-6 mb-3 flex flex-row ">

                    <input
                      type="text"
                      className=" px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow mr-4 ml-4"
                      placeholder="Gender"
                      onChange={handleGender}
                    />

                    <input
                      type="text"
                      className=" px-3 py-3 ml-3 text-blueGray-600 bg-white rounded text-sm shadow mr-4 ml-4 ml-4"
                      placeholder="Age"
                      onChange={handleAge}
                    />

                    <input
                      type="text"
                      className=" px-3 py-3 ml-3 text-blueGray-600 bg-white rounded text-sm shadow  ml-4"
                      placeholder="Facility Name"
                      onChange={handleFacility}
                    />

                  </div>



                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 "
                      type="button"
                      onClick={handleSubmit}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
