Template.time.helpers({
  data: function() {
    var controller = Router.current();
    var dateOrTime = controller.url.slice(42);
    var date = 0, unix;
    var data = {};
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var mo = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    // return the _id parameter or whatever
    if(dateOrTime ==="") return null;
    if(Number.isInteger(parseInt(dateOrTime))){
        //convert unix time to human time

        var fullDate = new Date(dateOrTime * 1000);
        date = fullDate.toString().slice(4, 15);
        unix = dateOrTime;
    } else {
        //convert human time to unix time
        var splitDate = dateOrTime.split("%");
        var i = mo.indexOf(splitDate[0]);
        splitDate[0] = months[i];
        date = splitDate.join(" ");
        unix = new Date(splitDate[2],i,splitDate[1])/ 1000;
        console.log(splitDate[2],splitDate[1],splitDate[0], i);
    }
    data = {date: date,
            unix: unix};

    console.log(controller);
    return data ;
  }
});
