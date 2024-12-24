import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

export default function MyDashboard() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (!user) {
      enqueueSnackbar("No account found kindly login or register", {
        variant: "warning",
      });
      window.location.replace("login");
    }
  }, []);

  return <div>MyDashboard</div>;
}
