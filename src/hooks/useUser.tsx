import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBirthday, selectUser } from "../redux/features/user";

export const useUser = () => {
  const dispatch = useDispatch();
  const setBirth = React.useCallback(
    (birth: string) => dispatch(updateBirthday({ birthday: birth })),
    [dispatch]
  );

  const { birthday, age } = useSelector(selectUser);

  return {
    birth: birthday,
    age,
    setBirth,
  };
};
