// Accessing Local storage

// console.log(localStorage);

// Create
// localStorage.setItem("name", "arravind")

// Remove
// localStorage.removeItem("name")

// localStorage.setItem("name", "arravind");
// localStorage.setItem("age", "25");

// console.log(localStorage);

//  Retrive - Read

// console.log(localStorage.getItem("age"));

// console.log(localStorage.key(0));

const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
	@@ -31,23 +10,10 @@ const inputReadDataKey = document.getElementById('inputReadDataKey');
const btnReadData = document.getElementById('btnReadData');
const readedDataHere = document.getElementById('readedDataHere');

btnReadData.onclick = function(){
    const inputReadDataKeyNew = inputReadDataKey.value;
    const readeddData = localStorage.getItem(inputReadDataKeyNew);

    if (inputReadDataKeyNew){
        readedDataHere.innerHTML += `
        Data Value: ${readeddData}<br /><br />
        `;
    }
};

btnInsert.onclick = function(){
    const key = inputKey.value;
    const value = inputValue.value;

    // console.log(key, value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
	@@ -62,21 +28,36 @@ for (i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `<br />
    Key is: ${key} <br /><br />
    Value is: ${value}<br /><br /><br />
    `;
}

if ( localStorage.length == 0) {
    autoFILL.innerHTML += `
        Add some content
    `;
}

btnAllDelete.onclick = function(){
    localStorage.clear();
    location.reload();
};

btnDelete.onclick = function(){
	@@ -86,4 +67,9 @@ btnDelete.onclick = function(){
        localStorage.removeItem(inputDelKeyD);
        location.reload();
    }
};
const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
	@@ -31,23 +10,10 @@ const inputReadDataKey = document.getElementById('inputReadDataKey');
const btnReadData = document.getElementById('btnReadData');
const readedDataHere = document.getElementById('readedDataHere');

btnInsert.onclick = function(){
    const key = inputKey.value;
    const value = inputValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
	@@ -62,21 +28,36 @@ for (i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `
    <hr />
    Key is: ${key} <br /><br />
    Value is: ${value}<br />
    `;

}
if (localStorage.length != 0){
    document.getElementById('avialRecords').innerHTML += `
    Records available in LocalStorage
    `;
}

if ( localStorage.length == 0) {
    btnAllDelete.style.display = "none";
    autoFILL.innerHTML += `
        Add some key - value records using INSERT box
    `;
}

btnReadData.onclick = function(){

    const inputReadDataKeyNew = inputReadDataKey.value;
    const readeddData = localStorage.getItem(inputReadDataKeyNew);

    if (inputReadDataKeyNew){
        readedDataHere.innerHTML += `
        Data Value of requested KEY is: ${readeddData}
        `;
    }
};

btnDelete.onclick = function(){
	@@ -86,4 +67,9 @@ btnDelete.onclick = function(){
        localStorage.removeItem(inputDelKeyD);
        location.reload();
    }
};

btnAllDelete.onclick = function(){
    localStorage.clear();
    location.reload();
};
