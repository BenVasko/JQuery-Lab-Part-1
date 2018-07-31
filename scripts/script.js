"use strict";
$(document).ready(() => {
    let currentTable;

    $("body").on("click", ".available", (e) => {
        currentTable = $(e.target);
        $(".tableRegistration .tableNumber").text(`Table Number: ${$(e.target).text()}`);
        $(".tableRegistration").show();
    });

    $("body").on("click", "button", (e) => {
        currentTable.addClass("reserved");
        currentTable.removeClass("available");
        $(".tableRegistration").hide()
    });

    $("body").on("click", ".material-icons", (e) => {
        $(".tableRegistration").hide()
    });
    
    const tableAvailable = () => {
        $("body").on("mouseenter mouseleave", ".available", (e) => {
            $(e.target).toggleClass("hover");
        });
    }
    tableAvailable();
    $(".tableRegistration").hide();
});