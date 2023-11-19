import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";
import { useCookies } from 'react-cookie';
import React, { useState } from "react";

const UploadCode = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [output, setOutput] = useState();
  const [codeTitle, setCodeTitle] = useState("");
  const [codeDescription, setCodeDescription] = useState("");
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location, title_output } = frontmatter;
  const [cookies, setCookie, removeCookie] = useCookies(['user_account']);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSave = (event) => {
    event.preventDefault();

    var formdata = new FormData();
    formdata.append("file", selectedFile);
    formdata.append("user_account", cookies['user_account']);
    formdata.append("title", codeTitle);
    formdata.append("description", codeDescription);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/upload", requestOptions)
      .then(response => response.json())
      .then(result => setOutput(result['output']))
      .catch(error => console.log('error', error));
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
              onSubmit={handleSave}
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
                  value={codeTitle}
                  onChange={(event) => setCodeTitle(event.target.value)}
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
                  value={codeDescription}
                  onChange={(event) => setCodeDescription(event.target.value)}
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
                  onChange={handleFileChange}
                />
              </div>
              <input className="btn btn-primary" type="submit" value="Save" />
            </form>
          </div>
        </div>
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
              title_output,
              "h1",
              "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]"
            )}
          </div>
          <div className="contact-form-wrapper rounded border border-border p-6 lg:col-6 dark:border-darkmode-border">
            <h2>
              <span className="ml-1.5 inline-flex items-center text-primary">
                Output.
                <BsArrowRightShort />
              </span>
            </h2>
            <label className="mb-2 block font-secondary" htmlFor="name">
              <p className="contact-form mt-12">
                {output}
              </p>
              <small className="font-secondary text-sm text-primary">
              </small>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadCode;
