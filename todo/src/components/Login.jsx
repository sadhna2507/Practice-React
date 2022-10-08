import { useState, useEffect } from "react";

export function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div>
      if (Object.keys(formErrors).length === 0 && isSubmit ? (
      <div>Login Successfully</div>) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>))
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={formValues.email}
          />
        </div>

        <div>
          <p>{formErrors.email}</p>
          <label htmlFor="pwd">Password: </label>
          <input
            type="text"
            name="password"
            id="pwd"
            onChange={handleChange}
            value={formValues.password}
          />
        </div>
        <p>{formErrors.password}</p>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
