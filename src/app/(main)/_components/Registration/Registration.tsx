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
import CustomAlert from "@/app/components/ui/CustomAlert/CustomAlert";
import { useEffect, useState } from "react";
import PushNotification from "@/app/components/ui/PushNotification/PushNotification";

interface IUserInfo {
  idNumber: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  
}

const RegistrationProfile = () => {

  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [alertText, setAlertText] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleCloseAlert = () => {
    setOpenAlert(!openAlert)
    console.log(openAlert)
  }
  const handleAlertText = (text:string) => {
    setAlertText(text)
    setOpenAlert(true)
  }

  const handleRegistration = (email:string,idNumber:string,firstName:string,lastName:string,password:string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(({ user })=>{         
          const displayName = (firstName + ' ' + lastName) 
          handleAlertText(displayName)
        })
        .catch((error) => {
          const errorCode = error.code; 
          const errorMessage = error.message; 

          if (errorCode === "auth/email-already-in-use") {
            handleAlertText("Такой пользователь уже существует");
          } else if (errorCode === "auth/invalid-email") {
            handleAlertText("Некорректный email");
          } else if (errorCode === "auth/weak-password") {
            handleAlertText("Пароль слишком слабый");
          } else {
            handleAlertText(`Ошибка: ${errorMessage}`);
          }
        });
  } 
   const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(()=>{
      setIsLoading(true)
    },[])
    if(!isLoading){
      return(<div>loading ....</div>)
    }

  return (
    <Container>
      {openAlert && <CustomAlert children={alertText} setOpen={handleCloseAlert}/>}
      <PushNotification/>
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
