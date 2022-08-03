"use strict";
var daysWeek;
(function (daysWeek) {
    daysWeek[daysWeek["sunday"] = 1] = "sunday";
    daysWeek[daysWeek["monday"] = 2] = "monday";
    daysWeek[daysWeek["tuesday"] = 3] = "tuesday";
    daysWeek[daysWeek["wednesday"] = 4] = "wednesday";
    daysWeek[daysWeek["thursday"] = 5] = "thursday";
    daysWeek[daysWeek["friday"] = 6] = "friday";
    daysWeek[daysWeek["saturday"] = 7] = "saturday";
})(daysWeek || (daysWeek = {}));
var rainbow;
(function (rainbow) {
    rainbow[rainbow["vermelho"] = 0] = "vermelho";
    rainbow[rainbow["verde"] = 1] = "verde";
    rainbow[rainbow["azul"] = 2] = "azul";
    rainbow[rainbow["preto"] = 3] = "preto";
})(rainbow || (rainbow = {}));
var actions;
(function (actions) {
    actions[actions["save"] = 0] = "save";
    actions[actions["print"] = 1] = "print";
    actions[actions["open"] = 2] = "open";
    actions[actions["view"] = 3] = "view";
    actions[actions["close"] = 4] = "close";
})(actions || (actions = {}));
