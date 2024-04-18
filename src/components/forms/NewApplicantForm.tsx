"use client";
import {useState, useRef, HTMLInputTypeAttribute} from "react";

import { IoWarningOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";

import styles from "./newApplicanttForm.module.css";

import LoaderSVG from "../../../public/icons/SVGComponents/dualRingLoader";
import {FieldError, useForm, UseFormRegisterReturn} from "react-hook-form";
import {cn} from "@/lib/utils";

/**
 * fullName validation allows no space.
 * show which files have been added. validation for file size.
 */

const FormInput = ({
    id,
    placeHolder,
    type = "text",
    required,
    register,
    value,
    error,
    isInvalid,
    isValidating,
}: {
  id: string; // same field as name
  placeHolder: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn<typeof id>;
  value: string | null;
  error: FieldError | undefined;
  isInvalid: boolean;
  isValidating: boolean;
}) => {
  return (
    <div className={`${styles.inputContainer} flex justify-start items-center`}>
      <label
        className={
        cn(
            `${required && styles.requiredInput}`,
            value ? isInvalid ? "bg-[#B41A1A]" : "bg-green-500" : "bg-[#B41A1A]"
        )}
        htmlFor={id}
      />
      <input id={id} type={type} placeholder={placeHolder} {...register} />
      <FormInputCover
        value={value}
        invalid={isInvalid}
        isValidating={isValidating}
      />
    </div>
  );
};

const FormInputCover = ({
  value,
  isValidating,
  invalid,
}: {
  value: string | null;
  isValidating: boolean;
  invalid: boolean;
}) => {
  return (
    <div
      className={`${styles.inputCover} ${value === null ? styles.nullInput : invalid ? styles.inValidInput : styles.validInput}`}
    >
      {!value && !invalid && (
        <FaArrowLeft color="#e6e6e6" width="15px" height="15px" />
      )}
      {value && isValidating && (
        <LoaderSVG
          strokeWidth="4"
          colour="#e6e6e6"
          width="15px" height="15px"
        />
      )}
      {value && !invalid && <IoIosCheckmarkCircleOutline style={{
        width: "23px",
        height: "23px"
      }} className="fill-green-500"/>}
      {invalid && <IoWarningOutline width="15px" height="15px" color="red" />}
    </div>
  );
};

export default function NewApplicantForm() {
  const inputFieldsState = useRef({
    fullName: null,
    companyName: null,
    email: null,
    number: null,
    projectDescription: "null",
    projectFiles: null,
  });

  const {
    register,
    handleSubmit,
    formState,
    getValues,
    getFieldState
  } = useForm({
    mode: "all"
  });

  const [fullName] = useState("fullName");
  const {
    error: fullNameError,
    isValidating: fullNameIsValidating,
    invalid: fullNameIsInvalid
  } = getFieldState(fullName, formState);

  const [companyName] = useState("companyName");
  const {
    error: companyNameError,
    isValidating: companyNameIsValidating,
    invalid: companyNameIsInvalid
  } = getFieldState(companyName, formState);

  const [email] = useState("email");
  const {
    error: emailError,
    isValidating: emailIsValidating,
    invalid: emailIsInvalid
  } = getFieldState(email, formState);

  const [number] = useState("number");
  const {
    error: numberError,
    isValidating: numberIsValidating,
    invalid: numberIsInvalid
  } = getFieldState(number, formState);

  const [description] =
    useState("description");
  const {
    error: descriptionError,
    isValidating: descriptionisValidating,
    invalid: descriptionIsInvalid
  } = getFieldState(description, formState);


  return (
    <section
      className={`${styles.sectionFormContainer} flex justify-center items-center`}
    >
      <div className={`${styles.formWrapper} flex justify-center items-center`}>
        <form
          id="applicantForm"
          className={`${styles.applicantForm} flex flex-col justify-start items-start gap-8`}
        >
          <div className="w-full flex justify-start items-center gap-8">
            <FormInput
              id={fullName}
              placeHolder="Full name..."
              register={register(fullName, {
                pattern: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
                required: true,
                minLength: 5,
                maxLength: 25,
              })}
              value={getValues(fullName)}
              error={fullNameError}
              isInvalid={fullNameIsInvalid}
              isValidating={fullNameIsValidating}
              required
            />
            <FormInput
              id={companyName}
              placeHolder="Company Name (if applicable)..."
              register={register(companyName, {
                pattern: /^[0-9A-Za-zÀ-ÿ\s,._+;()*~'#@!?&-]+$/,
                minLength: 2,
                maxLength: 100,
              })}
              value={getValues(companyName)}
              error={companyNameError}
              isInvalid={companyNameIsInvalid}
              isValidating={companyNameIsValidating}
            />
          </div>
          <div className="w-full flex justify-start items-center gap-8">
            <FormInput
              id={email}
              placeHolder="Email..."
              register={register(email, {
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                required: true,
                minLength: 5,
                maxLength: 100,
              })}
              value={getValues(email)}
              error={emailError}
              isInvalid={emailIsInvalid}
              isValidating={emailIsValidating}
              required
            />
            <FormInput
              id={number}
              placeHolder="Number..."
              register={register(number, {
                required: true,
                minLength: 5,
                maxLength: 100,
              })}
              value={getValues(number)}
              error={numberError}
              isInvalid={numberIsInvalid}
              isValidating={numberIsValidating}
              required
            />
          </div>
          <div className="w-full flex justify-start items-center">
            <div
              className={`${styles.inputContainer} ${styles.description} flex justify-start items-center gap-8`}
            >
              <div
                className={`${styles.inputCover} ${getValues(description) === null ? styles.nullInput : descriptionIsInvalid ? styles.inValidInput : styles.validInput}`}
              >
                {!getValues(description) && !descriptionIsInvalid && (
                  <FaArrowLeft color="#e6e6e6" width="15px" height="15px" />
                )}
                {getValues(description) && descriptionisValidating && (
                  <LoaderSVG
                    strokeWidth="4"
                    colour="#e6e6e6"
                    width="15px"
                    height="15px"
                  />
                )}
                {getValues(description) && !descriptionIsInvalid && (
                  <IoIosCheckmarkCircleOutline
                    style={{
                      width: "23px",
                      height: "23px",
                    }}
                    className="fill-green-500"
                  />
                )}
                {descriptionIsInvalid && (
                  <IoWarningOutline width="15px" height="15px" color="red" />
                )}
              </div>
              <textarea
                id="description"
                placeholder="Project description..."
                {...register(description, {
                  maxLength: 275,
                })}
              />
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-8">
            <div
              className={`${styles.fileInputContainer} flex justify-start items-center`}
            >
              <label
                htmlFor="projectFiles"
                className="flex justify-center items-center"
              >
                Upload files
                {inputFieldsState.current.projectFiles === null ? (
                  <BsUpload strokeWidth="0.7" />
                ) : inputFieldsState.current.projectFiles === "loading" ? (
                  <LoaderSVG
                    strokeWidth="4"
                    colour="#e6e6e6"
                    width="32px"
                    height="32px"
                  />
                ) : inputFieldsState.current.projectFiles === "valid" ? (
                  <IoIosCheckmarkCircleOutline
                    color="green"
                    width="24px"
                    height="24px"
                  />
                ) : (
                  <IoWarningOutline width="35px" height="35px" color="red" />
                )}
              </label>
              <input
                id="projectFiles"
                type="file"
                name="projectFiles"
                accept=".doc, .docx, .pdf, .txt, .rtf, .odt, .html, .htm, .ppt, .pptx, .xml, .key, .odp, .pps,
                .ppsx, .jpg, .jpeg, .png, .gif, .bmp, .tiff, .tif"
                size={5_000_000}
                capture="environment"
                multiple
              />
            </div>
          </div>
          <div className={`${styles.formInformation} w-full`}>
            Accepted file types: .doc, .docx, .pdf, .txt, .rtf, .odt, .html,
            .htm, .ppt, .pptx, .xml, .key, .odp, .pps, .ppsx, .jpg, .jpeg, .png,
            .gif, .bmp, .tiff, .tif
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              form="applicantForm"
              className={`${styles.submitButton} flex justify-center items-center`}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className={styles.blank}>
          <div className={`${styles.imageContainer} w-full h-full`}>
            <picture>
              <source srcSet="/images/projectOverview.avif" />
              <source srcSet="/images/projectOverview.webp" />
              <img
                src="/images/projectOverview.jpeg"
                alt="project overview image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
