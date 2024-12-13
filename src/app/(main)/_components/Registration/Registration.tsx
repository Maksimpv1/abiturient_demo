"use client";

import * as yup from "yup";
import { registration } from "./registrationDate";
import {
  BtnFormContainer,
  Container,
  StyledLink,
  Wrapper,
} from "@/app/components/ui/StandartStyles/StandartStyles.style";
import { Formik, getIn } from "formik";
import InputField from "@/app/components/ui/InputField/InputField";
import Button from "@/app/components/ui/Button/Button";
import Title from "@/app/components/ui/Title/Title";

const RegistrationProfile = () => {
  const ValidityState = yup.object().shape({
    idNumber: yup
      .string()
      .typeError("Введите верный Id")
      .required("Обязательное поле"),
    firstName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    lastName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    email: yup
      .string()
      .email("Введите верный Email")
      .required("Обязательное поле"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле")
      .min(8, "Min 8 symbols"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательное поле"),
  });

  return (
    <Container>
      <Wrapper>
        <Title>Регистрация</Title>
        <Formik
          initialValues={{
            idNumber: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validateOnBlur
          onSubmit={() => {
            console.log("зареган");
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
              {registration.map((item, index) => (
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
                <StyledLink href={"/login"}>Войти</StyledLink>
                <Button text={"Регистрация"} fontSize={"24"} type={"submite"} />
              </BtnFormContainer>
            </form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};
export default RegistrationProfile;
