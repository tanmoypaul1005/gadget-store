import { toast } from "react-toastify";

export const commonView = (data) => {
    if (data) {
        return data;
    } else if (data === null) {
        return "-- --";
    }
    else {
        return "-- --";
    }
}


export const Toastr = ({ message = "", type = "error" }) => {
    toast(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: type,
    });
  };