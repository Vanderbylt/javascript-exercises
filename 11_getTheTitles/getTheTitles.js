const getTheTitles = function(objs) {
    const titles = [];
    for (let obj of objs){
        titles.push(obj.title);
    }
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
