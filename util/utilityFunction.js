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


export function formatDate(dateString) {
    if(dateString){
    const options = {  day: 'numeric', month: 'long',year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
    }else{
        return "-- --";
    }
  }

  export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };


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