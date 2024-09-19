// @ts-ignore
import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SupportPage = () => {
  const [name, setName] = useState<string>("");
  const [lName, setlName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [ticket, setTicket] = useState<string>("");

  const submit = async (event: any) => {
    event.preventDefault();
    setSubmitted(true);
    const random = (Math.floor(Math.random() * 10000) + 1).toString();
    setTicket(random);
  };

  const check = () => {
    return name && lName && email && topic;
  };

  return (
    <>
      <div
        className="justify-start items-start flex border-b-2
      border-white border-opacity-20 m-2"
      >
        <h1
          className=" my-1
             underline-offset-8 text-5xs md:text-3xl p-2"
        >
          Support Ticket Form
        </h1>
      </div>

      <div className="p-1 flex">
        {!submitted ? (
          <form onSubmit={submit} className="">
            <div>
              <div className="flex flex-col items-start justify-start">
                <p>
                  Name<span className="text-orange-500">*</span>
                </p>
                <div className="relative flex-1">
                  <label className="text-sm">
                    <input
                      className="input-box focus:border-orange-500
                         focus:shadow-outline
                         focus:outline-none 
                         w-20 md:w-40"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <span
                      className="absolute left-5 mt-2
                    bottom-0 text-xs hidden md:block"
                    >
                      First Name
                    </span>
                  </label>

                  <label className="">
                    <input
                      className="input-box focus:border-orange-500
                         focus:shadow-outline
                         focus:outline-none
                         w-20 md:w-40"
                      type="text"
                      name="lname"
                      value={lName}
                      onChange={(e) => setlName(e.target.value)}
                      required
                    />
                    <span
                      className="absolute mt-2 right-20 bottom-0
                     text-xs hidden md:block"
                    >
                      Last Name
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <p>
                  Email <span className="text-orange-500 mr-1">*</span>
                </p>
                <div>
                  <label className="text-sm w-10/12">
                    <input
                      className="
                            input-box   focus:border-orange-500
                            focus:shadow-outline
                            focus:outline-none
                            w-full"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-start flex-grow">
                <p className="mb-1">
                  Topic <span className="text-orange-500">*</span>
                </p>

                <div
                  className="w-full h-30 ml-5 border border-dotted bg-black
              "
                >
                  <h3 className="text-xs md:text-sm m-3 flex">
                    What can we help you today?
                  </h3>

                  <div className="flex flex-col items-start ml-3 mb-2">
                    <label className="text-xs md:text-sm">
                      <input
                        className=" cursor-pointer
                   border-r-orange-600 checked:bg-orange-500 mb-2"
                        type="radio"
                        name="topic"
                        value="General"
                        checked={topic === "General"}
                        onChange={() => setTopic("General")}
                        required
                      />
                      General
                    </label>

                    <label className="text-xs md:text-sm">
                      <input
                        className=""
                        type="radio"
                        name="topic"
                        value="Bug"
                        checked={topic === "Bug"}
                        onChange={() => setTopic("Bug")}
                        required
                      />
                      Bug
                    </label>
                  </div>
                </div>
              </div>

              <div onSubmit={submit} className="flex justify-end mt-5">
                <button
                  className={`p-2 md:p-5 rounded-full ${
                    check() ? "bg-orange-500" : "bg-gray-500"
                  }`}
                  type="submit"
                  disabled={!check()}
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h1 className="text-xl md:text-3xl text-orange-500">
              Thank you for sending us your report, we will
              track the problem now
            </h1>
            <p className="text-xl md:text-3xl">
              <span className="opacity-75">ticket number:</span> {ticket}
            </p>
            <Link
              to={"/"}
              className="border m-10 p-5 rounded-lg bg-orange-500 font-bold
            "
            >
              Go back
            </Link>
          </div>
        )}

        {!submitted && (
          <div className="order-3">
            <p className="flex ml-10">
              Description{" "}
              <span className="text-orange-500 text-xs">Optional</span>
            </p>
            <label className="">
              <textarea
                className="input-box   focus:border-orange-500
                                 focus:shadow-outline
                                 focus:outline-none ml-10
                                 w-full h-69/100"
                placeholder="Description Report"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default SupportPage;
