// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    customerName =  customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
    return(bestCustomer);
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = "steve";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "asd";
}