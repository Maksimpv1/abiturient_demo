"use client";

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
import { ValidityState } from './ValidationScheme'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAppDispatch } from "@/app/lib/storeHooks";
import { auth } from "@/services/firebase";

interface IUserInfo {
  idNumber: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  
}

const RegistrationProfile = () => {

  const dispatch = useAppDispatch()

  const handleRegistration = (email:string,idNumber:string,firstName:string,lastName:string,password:string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(({ user })=>{
            const displayName = (firstName + ' ' + lastName) 
            console.log(displayName)
        })
        .catch((error) => {
          const errorCode = error.code; 
          const errorMessage = error.message; 

          if (errorCode === "auth/email-already-in-use") {
            alert("Такой пользователь уже существует");
          } else if (errorCode === "auth/invalid-email") {
            alert("Некорректный email");
          } else if (errorCode === "auth/weak-password") {
            alert("Пароль слишком слабый");
          } else {
            alert(`Ошибка: ${errorMessage}`);
          }
        });
  }

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
          onSubmit={(userInfo:IUserInfo) => {
            handleRegistration(userInfo.email,userInfo.idNumber,userInfo.firstName,userInfo.lastName,userInfo.password)
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
