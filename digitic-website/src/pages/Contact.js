import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { createdContact } from "../features/contact/contactSlice";

const SignupSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .email("'Invalid email address'")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
  comment: yup.string().required("Message is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(createdContact(values));
      formik.resetForm();
      setTimeout(() => {
        toast.success(" Successfullly!");
      }, 3000);
    },
  });

  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.771103663534!2d76.99275607711007!3d28.886888929272477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1669909087902!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15" onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      className="form-control bg-light"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <p className="text-danger">{formik.errors.name}</p>
                  ) : null}
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-danger">{formik.errors.email}</p>
                  ) : null}
                  <div>
                    <input
                      type="tel"
                      className="form-control bg-light"
                      placeholder="Mobile Number"
                      id="mobile"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                  </div>
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <p className="text-danger">{formik.errors.mobile}</p>
                  ) : null}
                  <div>
                    <textarea
                      className="w-100 form-control bg-light"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                      id="comment"
                      style={{ height: "100px" }}
                      name="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    ></textarea>
                  </div>
                  {formik.touched.comment && formik.errors.comment ? (
                    <p className="text-danger">{formik.errors.comment}</p>
                  ) : null}
                  <div>
                    <button type="submit" className="button border-0">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno:277 , Near village chopal , Mandaura, Sonipat,
                        Haryana
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 8264954234">+91 8264954234</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:navdeepdahiya753@gmail.com">
                        navdeepdahiya753@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
