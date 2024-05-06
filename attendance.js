let attendance = document.querySelector("h1");
let previousRecords = document.querySelector("p");
let addBtn = document.querySelectorAll("button")[0];
let saveBtn = document.querySelectorAll("button")[1];

let count = 0;

addBtn.addEventListener("click", () => {
    count = count += 1;
    attendance.innerHTML = count;
});

saveBtn.addEventListener("click", () => {
    previousRecords.innerHTML += `${count} , `;
    count = 0;
    attendance.innerHTML = count;

    // if (attendance.innerHTML !== "") {
    //     previousRecords.innerHTML += `${count} , `;
    //     attendance.innerHTML = "0";
    // }

});