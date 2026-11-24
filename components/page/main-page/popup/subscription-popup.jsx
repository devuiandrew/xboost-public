"use client";
import { IoIosClose } from "react-icons/io";

import { useNavigationContext } from "../../../../context/context-api";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function SubscriptionPopup({ translation }) {
  const { showModal, setShowModal } = useNavigationContext();
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(null);
  const [exist, setExist] = useState(null);

  const t = useTranslations("mainPage.popup");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: the subscription backend is not connected yet
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-6 py-4 rounded-t">
                  <h3 className="text-xl sm:text-2xl leading-tight font-bold tracking-tight text-gray-800 uppercase">{t("header")}</h3>
                  <button className=" top-7 right-4 " onClick={() => setShowModal(false)}>
                    <IoIosClose className=" text-gray-500 text-4xl hover:text-green-500 active:text-green-600 hover:shadow-inner hover:border-green-500 rounded-lg flex items-center " />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <h3 className=" text-gray-500 text-md sm:text-lg leading-relaxed">
                    {t("textDescription")}
                    <span className="text-lg sm:text-xl text-green-400">{t("getBestCases")}</span>
                  </h3>
                </div>
                {/*footer*/}
                <form className="border-solid border-slate-200 rounded-b grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-12 gap-4 px-6 py-4">
                  <div className="relative sm:col-span-8">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none ">
                      <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      value={email}
                      className={`bg-gray-50 border   text-sm rounded-lg ${
                        valid === null
                          ? "focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-boost-dark"
                          : valid
                          ? "focus:ring-green-500 focus:border-green-500 border-green-500 text-green-500"
                          : "focus:ring-red-500 focus:border-red-500 border-red-500 text-red-500"
                      }  block w-full pl-10 p-2.5 focus:outline-none  focus:ring-1`}
                      placeholder="name@mail.com"
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="sm:col-span-4 ">
                    <button
                      className="w-full h-full bg-green-500 text-white active:bg-green-600 font-bold uppercase
                    text-sm rounded-md shadow-sm hover:shadow-lg "
                      type="button"
                      // onClick={() => setShowModal(false)}
                      onClick={handleSubmit}
                    >
                      {t("subcribeBtn")}
                    </button>
                  </div>
                </form>
                {/* Show user State of their email */}
                <div className="px-6 flex-auto">
                  {valid === null ? null : valid ? (
                    exist ? (
                      <p className="mb-4 text-sm text-green-600 dark:text-green-500">{t("alert.emailAlreadySubscribe")}</p>
                    ) : (
                      <p className="mb-4 text-sm text-green-600 dark:text-green-500">
                        <span className="font-medium"> {t("alert.subscribeEmail.excellent")}</span> {t("alert.subscribeEmail.text")}
                      </p>
                    )
                  ) : (
                    <p className="mb-4 text-md text-red-600 dark:text-red-500">
                      <span className="font-medium"> {t("alert.somethingWrongWithEmail.ops")}</span> {t("alert.somethingWrongWithEmail.text")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
