import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchUser,
  selectUser,
  selectUserFetchStatus,
} from "../../redux/usersSlice";

export default function UserDisplay() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userFetchStatus = useAppSelector(selectUserFetchStatus);

  return (
    <div>
      {/* Display the current user name */}
      <div>{user}</div>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
      {/* At any point if we're fetching a user, display that on the UI */}
      {userFetchStatus === "loading" && <div>Fetching user...</div>}
    </div>
  );
}
