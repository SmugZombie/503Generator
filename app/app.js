'use strict';
const axios = require('axios');

let totalChecks = 0;
let totalTimes = [];

function doit(checkID){

    let url = "https://www.google.com";
    let start = Date.now();
    totalTimes[checkID] = start;

    var axiosconfig = {
        method: 'get',
        url: url,
        headers: { }
    };

    return axios(axiosconfig)
    .then(function (response) {
        // Debug

        let data = {};

        data.status = response.status;
        data.headers = response.headers;
        data.data = response.data;

        //console.log(response)
        //console.log(response.status);
        //console.log(response.headers);
        //console.log(response.data);
        // Update the current percent
        //console.log(data);
        totalChecks += 1;
        let end = Date.now();
        let roundTrip = end - totalTimes[checkID];
        console.log(url + " - " + data.status + " (" + roundTrip + "ms) - " + checkID + " of " + totalChecks);
        return data;
    })
    .catch(function (error) {
        console.log(error);
        return "error";
    });   

}

for (let index = 0; index < 100; index++) {
    doit(index + 1);
}