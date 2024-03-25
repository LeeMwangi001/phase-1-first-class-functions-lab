// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

const  selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers] ;

function createFareMultiplier(rate) {
    return function (fare) {
        return fare * rate;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,selectingFunction){
    return selectingFunction(drivers);
}

