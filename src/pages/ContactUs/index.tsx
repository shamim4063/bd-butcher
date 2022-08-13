import React, { ChangeEventHandler, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import contactService from "../../services/contact/contact.service";
import { ContactInformationDto } from "../../services/contact/ContactInformation.dto";

import "./index.scss";

const ContactUs: React.FC<any> = (props: any) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [contactInfo, setContacInfo] = useState<ContactInformationDto>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onSend = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(contactInfo);
    try {
      const result = await contactService.submitSupportForm(contactInfo);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setShowAlert(true);
    closeAlert();
  };

  const handleChange = (event: any) => {
    //To stop default events
    event.persist();

    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    //set these values in state
    setContacInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const closeAlert = () => {
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <div className="container">
        <Form className="row contact-form" onSubmit={onSend}>
          <h3>Get In Touch With Us</h3>
          <div className="col-xl-6 col-lg-6 col-sm-12 mb-6">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Enter Name"
                required
              />
            </Form.Group>
          </div>

          <div className="col-xl-6 col-lg-6 col-sm-12 mb-6">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 mb-6">
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                onChange={handleChange}
                placeholder="Enter Phone"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your phone with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 mb-6">
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                onChange={handleChange}
                placeholder="Enter Address"
              />
            </Form.Group>
          </div>
          <div className="col-xl-12 col-lg-12 col-sm-12 mb-12">
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                onChange={handleChange}
                placeholder="Enter Message"
                required
              />
            </Form.Group>
          </div>
          <div className="submit">
            <Alert variant="success" show={showAlert}>
              Thanks! We'll contact you very soon.
            </Alert>
            <Button variant="warning" type="submit">
              <i className="fas fa-paper-plane"></i> Send
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactUs;
