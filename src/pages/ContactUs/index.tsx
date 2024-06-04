import { Layout } from "common/components/layout/Layout";
import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../common/components/wrappers/Input";
import { Button } from "common/components/wrappers/buttons/Button";
import { ButtonTheme } from "common/types/components/button";
import { HeadingSection } from "./components/sections/HeadingSection";
import { showToastError, showToastSuccess } from "common/utils/toast/showToast";
import { ValidationErrorMessages } from "common/constants";
import { isEmailValid } from "common/utils/validations";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ResponseData } from "common/types/api";
import { debounce } from "common/helpers/debounce";
import { postContactUs } from "api/requests/contactUs/postContactUs";

export const ContactUsPage: FC = memo(() => {
  const [email, setEmail] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const [emailError, setEmailError] = useState<string>(null);
  const [phoneNumberError, setPhoneNumberError] = useState<string>(null);
  const [nameError, setNameError] = useState<string>(null);
  const [messageError, setMessageError] = useState<string>(null);

  const { t } = useTranslation();

  const validateIsEmpty = (value: string): boolean => {
    return value?.length > 0;
  };

  const validateName = () => {
    const isValid = validateIsEmpty(name);
    if (!isValid) {
      setNameError(ValidationErrorMessages.FieldRequired);
    }
    return isValid;
  };

  const validateEmail = () => {
    const isValid = isEmailValid(email);
    if (!isValid) {
      setEmailError(ValidationErrorMessages.ValidEmailRequired);
    }
    return isValid;
  };

  const validatePhoneNumber = () => {
    const isValid = validateIsEmpty(phoneNumber);
    if (!isValid) {
      setPhoneNumberError(ValidationErrorMessages.FieldRequired);
    }
    return isValid;
  };

  const validateMessage = () => {
    const isValid = validateIsEmpty(message);
    if (!isValid) {
      setMessageError(ValidationErrorMessages.FieldRequired);
    }
    return isValid;
  };

  const validateAll = (): boolean => {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    const phoneNumberValid = validatePhoneNumber();
    return nameValid && emailValid && messageValid && phoneNumberValid;
  };

  const handleSuccessfulResponse = (
    axiosResponse: AxiosResponse<ResponseData<{ contactId: string }>>
  ) => {
    const { contactId } = axiosResponse?.data?.data ?? {};

    if (contactId) {
      setEmail("");
      setMessage("");
      setName("");
      setPhoneNumber("");
      showToastSuccess("Thank you! We'll be in touch soon.");
    }
  };

  const handleFailedResponse = (
    axiosResponse: ResponseData<{ contactId: string }>
  ) => {
    const { message: errorMessage } = axiosResponse?.data ?? {};
    showToastError(errorMessage);
  };

  const fetchFunc = useCallback(async () => {
    const params = {
      name,
      email,
      phoneNumber,
      message,
    };
    return await postContactUs(params);
  }, [name, email, phoneNumber, message]);

  const { mutate } = useMutation<
    | AxiosResponse<ResponseData<{ contactId: string }>>
    | ResponseData<{ contactId: string }>
  >({
    mutationFn: () => debounce(fetchFunc(), 500),
    onSuccess: (axiosResponse) => {
      if (
        (axiosResponse as AxiosResponse<ResponseData<{ contactId: string }>>)
          ?.statusText
      ) {
        return handleSuccessfulResponse(
          axiosResponse as AxiosResponse<ResponseData<{ contactId: string }>>
        );
      }
      return handleFailedResponse(
        axiosResponse as ResponseData<{ contactId: string }>
      );
    },
    onError: (err) => {
      console.log(err);
      showToastError("Internal server error");
    },
  });

  const handleSubmit = () => {
    if (!validateAll()) return;

    mutate();
    if (nameError || emailError || messageError || phoneNumberError) return;
  };

  return (
    <Layout footer={false}>
      <div
        className="md:pt-[200px] px-10 pt-[150px] pb-[70px]"
        style={{
          minHeight: "calc(var(--vh,1vh) * 100)",
        }}
      >
        <div
          className={`md:max-w-[1300px] max-w-[375px] h-auto bg-white mx-auto 
          rounded-xl py-16 min-[1100px]:px-16 px-5 flex md:flex-row flex-col md:space-x-8 space-y-8 md:space-y-0`}
          style={{ boxShadow: "rgba(16, 16, 16, 0.1) 0px 4px 20px" }}
        >
          <HeadingSection />
          <div className="flex-1">
            <form className="flex flex-col space-y-5">
              <div className="flex md:flex-row flex-col items-baseline md:space-x-5 md:space-y-0 space-y-5">
                <div className="flex-1 w-full">
                  <Input
                    label="inquiryForm.form.name.label"
                    placeholder="inquiryForm.form.name.placeholder"
                    textCenter={true}
                    onFocus={() => {
                      setNameError("");
                    }}
                    onBlur={validateName}
                    onChange={(newName) => setName(newName as string)}
                    error={nameError}
                    value={name}
                  />
                </div>
                <div className="flex-1 w-full">
                  <Input
                    label="inquiryForm.form.email.label"
                    placeholder="inquiryForm.form.email.placeholder"
                    textCenter={true}
                    onFocus={() => {
                      setEmailError("");
                    }}
                    onBlur={validateEmail}
                    onChange={(newEmail) => setEmail(newEmail as string)}
                    error={emailError}
                    value={email}
                  />
                </div>
              </div>
              <Input
                label="inquiryForm.form.phoneNumber.label"
                placeholder="inquiryForm.form.phoneNumber.placeholder"
                textCenter={true}
                onFocus={() => {
                  setPhoneNumberError("");
                }}
                onBlur={validatePhoneNumber}
                onChange={(newPhoneNumber) =>
                  setPhoneNumber(newPhoneNumber as string)
                }
                error={phoneNumberError}
                value={phoneNumber}
              />
              <Input
                label="inquiryForm.form.message.label"
                placeholder="inquiryForm.form.message.placeholder"
                height={200}
                onFocus={() => {
                  setMessageError("");
                }}
                onBlur={validateMessage}
                onChange={(newMessage) => setMessage(newMessage as string)}
                error={messageError}
                value={message}
              />
              <div className="lg:w-1/2 pt-5">
                <Button
                  onClick={handleSubmit}
                  title={t("inquiryForm.form.buttonTitle")}
                  theme={ButtonTheme.Light}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
});

ContactUsPage.displayName = "ContactUsPage";
