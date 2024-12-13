"use client";

import { Formik, getIn } from "formik";
import * as yup from "yup";
import { loginData } from "./loginData";
import {
  BtnFormContainer,
  Container,
  StyledLink,
  Wrapper,
} from "@/app/components/ui/StandartStyles/StandartStyles.style";
import Button from "@/app/components/ui/Button/Button";
import InputField from "@/app/components/ui/InputField/InputField";
import Title from "@/app/components/ui/Title/Title";
import { auth } from "@/services/firebase";

const LoginProfile = () => {

  const ValidityState = yup.object().shape({
    idNumber: yup
      .string()
      .typeError("Введите верный Id")
      .required("Обязательное поле"),
    password: yup
      .string()
      .typeError("Введите верный пароль")
      .required("Обязательное поле"),
  });

  return (
    <Container>
      <Wrapper>
        <Title>Вход</Title>
        <Formik
          initialValues={{
            idNumber: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={() => {
            console.log("Login");
          }}
          validationSchema={ValidityState}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              {loginData.map((item, index) => (
                <InputField
                  key={index}
                  label={item.label}
                  type={item.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={getIn(values, item.name)}
                  errors={getIn(errors, item.name)}
                  name={item.name}
                />
              ))}
              <BtnFormContainer>
                <StyledLink href={"/registration"}>
                  Зарегестрироваться
                </StyledLink>
                <Button text={"Войти"} fontSize={"24"} type={"submite"} />
              </BtnFormContainer>
            </form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default LoginProfile;
