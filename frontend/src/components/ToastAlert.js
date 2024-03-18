
import { toast } from "react-toastify";
const ToastAlert = (msg,type) => {
    toast(msg, {
        type: type,
        position: "top-center",
        
      });
}

export default ToastAlert;