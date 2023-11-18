import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";
import React, { useState } from "react";

const UploadCode = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <section className="section lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <ImageFallback
            className="-z-[1] object-cover object-top"
            src={"/images/map.svg"}
            fill="true"
            alt="map bg"
            priority={true}
          />
          <div className="lg:col-6">
            {markdownify(
              title,
              "h1",
              "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]"
            )}
          </div>
          <div className="contact-form-wrapper rounded border border-border p-6 lg:col-6 dark:border-darkmode-border">
            <h2>
              Code In,
              <span className="ml-1.5 inline-flex items-center text-primary">
                Solutions Out.
                <BsArrowRightShort />
              </span>
            </h2>
            <form
              className="contact-form mt-12"
              method="POST"
              action={form_action}
            >
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="name">
                  Title
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="title"
                  type="text"
                  placeholder="Enter Title of Code"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="name">
                  Description
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="description"
                  type="text"
                  placeholder="Your Code description"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="name">
                  Upload Here
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="btn-upload"
                  type="file"
                  onchange={handleFileChange}
                />

                {/* <label className="mb-2 block font-secondary" htmlFor="subject">
                  Subject
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  placeholder="Blog advertisement"
                  required
                /> */}
              </div>

              {/* <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="message">
                  Your Message Here
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <textarea
                  className="form-textarea w-full"
                  placeholder="Hello I’m Mr ‘x’ from………….."
                  rows="7"
                />
              </div> */}
              <input className="btn btn-primary" type="submit" value="Save" />
            </form>
          </div>
        </div>
        <div className="row">
          {/* {phone && (
            <div className="md:col-6 lg:col-4">
              <Link
                href={`tel:${phone}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaUserAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {phone}
                </p>
              </Link>
            </div>
          )}
          
          {mail && (
            <div className="md:col-6 lg:col-4">
              <Link
                href={`mailto:${mail}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaEnvelope />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {mail}
                </p>
              </Link>
            </div>
          )}
          {location && (
            <div className="md:col-6 lg:col-4">
              <span
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaMapMarkerAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {location}
                </p>
              </span>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default UploadCode;
