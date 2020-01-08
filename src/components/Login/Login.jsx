import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormControls";
import {
  requiredField,
  maxLengthCreator
} from "../../utils/validators/validatots";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "../common/FormsControls/FormControls.module.css";

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const maxLengthCreator20 = maxLengthCreator(20);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          validate={[requiredField, maxLengthCreator20]}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          type={"password"}
          validate={[requiredField, maxLengthCreator20]}
          name={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
        remember me
      </div>
      {props.error && <div className={style.formError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
