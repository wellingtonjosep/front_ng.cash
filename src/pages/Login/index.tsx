import "./styles.css";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { ILogin } from "../../interfaces";
import { useContext } from "react";
import { UserContext } from "../../providers/user";

function Login() {
  const { register, handleSubmit } = useForm<ILogin>();

  const auth = useContext(UserContext);

  const onSubmitFunction = (data: ILogin) => {
    auth.login(data);
  };

  return (
    <section className="login">
      <img
        className="logo-login"
        src="https://ng.cash/_nuxt/img/logo-ngcash-branco.88c5860.svg"
        alt="logo ng.cash"
      />
      <form
        onSubmit={handleSubmit(onSubmitFunction)}
        className="container-login"
      >
        <h1 className="title-login">Faça seu login</h1>
        <TextField
          {...register("username")}
          className="input-text"
          id="standard-basic"
          label="Username"
          variant="standard"
          color="secondary"
        />
        <TextField
          {...register("password")}
          className="input-text"
          id="standard-basic"
          label="Senha"
          variant="standard"
          color="secondary"
          sx={{ marginTop: "10px" }}
        />
        <button type="submit" className="button-login">
          CONTINUAR
        </button>
        <p className="info">Ainda não sou cliente {">"}</p>
      </form>
    </section>
  );
}

export default Login;
