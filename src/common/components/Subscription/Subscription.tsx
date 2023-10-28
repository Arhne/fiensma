import { useAddSubscribeMutation } from "@/redux/services/subscribeApi";
import { CustomInput } from "../Inputs";

import styles from "./Subscription.module.scss";
import { showErrorToast, showSuccessToast } from "@/common/Utils/toast";
import { Controller, useForm } from "react-hook-form";

const Subscription = () => {
  const [addSubscribe, { isLoading }] = useAddSubscribeMutation();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onHandleSubmit = (value: { email: string }) => {
    addSubscribe(value)
      .unwrap()
      .then((result) => {
        showSuccessToast(result?.message);
      })
      .catch((error) => {
        showErrorToast(error?.data?.message);
      });
  };

  return (
    <div className={`row ${styles.SubscriptionContainer}`}>
      <div className={`col-xs-12 col-sm-6 ${styles.LeftColumn}`}>
        <h6>
          Ready to stay <br /> Informed With Us?
        </h6>
      </div>
      <div className={`col-xs-12 col-sm-6 ${styles.RightColumn}`}>
        <p>
          Stay up to date with us now and be at the forefront of the latest
          developments, insights, and trends in cryptocurrency and fiat trading.
          Connect with us to access exclusive content, real-time market
          analyses, and valuable resources that empower your trading journey.
        </p>

        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className={styles.ActionContainer}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => {
                const errorMessage = errors.email?.message;
                return (
                  <CustomInput
                    isShowLabel={false}
                    type="email"
                    placeholder="Enter your email"
                    {...{ value, onChange, errors: [errorMessage] }}
                  />
                );
              }}
            />

            <button className={styles.ActionButton}>
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
