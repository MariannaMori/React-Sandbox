import React from "react";
import "./Form.css";

const Form = ({ submit, onChange, role }) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone number</label>
          <input
            type="phone"
            name="phonenumber"
            id="phonenumber"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" value={role} onChange={onChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
