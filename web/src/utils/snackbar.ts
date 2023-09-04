import { Snackbar } from "@/components/Snackbar";
import { toast } from "react-toastify";

export const snackbar = (
  message: string,
  type?: "success" | "error" | "warning" | "info",
  func?: () => void,
  action?: string
) => {
  switch (type) {
    case "success":
      return toast.success(Snackbar(message, func, action), {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          minWidth: "344px",
          width: "max-content",
        },
        theme: "colored",
      });
    case "error":
      return toast.error(Snackbar(message, func, action), {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          minWidth: "344px",
          width: "max-content",
        },
        theme: "colored",
      });
    case "warning":
      return toast.warning(Snackbar(message, func, action), {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          minWidth: "344px",
          width: "max-content",
        },
        theme: "colored",
      });
    case "info":
      return toast.info(Snackbar(message, func, action), {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          minWidth: "344px",
          width: "max-content",
        },
        theme: "colored",
      });
    default:
      return toast(Snackbar(message, func, action), {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          minWidth: "344px",
          width: "max-content",
        },
        theme: "colored",
      });
  }
};
