// <----------- saving order deatils in local storage on products page------>

window.addEventListener("DOMContentLoaded", function(e){
    const orderdetails = document.querySelectorAll("button[data-order]");
    orderdetails.forEach(function(button){
            button.addEventListener("click", function(e){
                    const button= e.currentTarget;
                    const cont = button.parentNode;
                    
                    const order ={
                        id: button.getAttribute("data-order"),
                        brand: cont.querySelector(".brand").innerText,
                        price: cont.querySelector(".price").innerText,
                        details: cont.querySelector(".details").innerText
                    };
                    localStorage.setItem("order", JSON.stringify(order));
                    const url = window.location.href.replace("products.html","order.html");
                    window.location.href= url;

            });
    });      
    });

      
    // <----------- retreiving order deatils from local storage on order page------>
