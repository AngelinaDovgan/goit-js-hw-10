
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const ourHandle = (delay, state) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                res(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                rej(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
};

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    ourHandle(form.delay.value, form.state.value)
    .then((result) => {
        iziToast.success({
            message: result,
            title: "OK",
            titleColor:"#fff",
            position: "topRight",
            messageColor: "#fff",
            backgroundColor: "rgba(89, 161, 13, 1)"
           
        });
    })
    .catch((error) => {
        iziToast.error({
        message: error,
        title: "Error",
        titleColor: "#fff",
        backgroundColor: "rgba(239, 64, 64, 1)",
        messageColor: "#fff",
        position: "topRight",            
        });
    });
});