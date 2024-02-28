function Tour(PeopleCount, DayCount, CountryTaxes){
    this.PeopleCount = PeopleCount;
    this.DayCount = DayCount;
    this.CountryTaxes = CountryTaxes;
    this.CalcTripPrice = calcTripPrice(PeopleCount, DayCount, CountryTaxes);
    this 
}

function calcTripPrice(PeopleCount, DayCount, CountryTaxes){
    return parseInt(PeopleCount*DayCount*CountryTaxes);
}

Tour.prototype.Show = 
function(){
    document.write("Count of passanger : " + this.PeopleCount + "<br>");
    document.write("Day count : " + this.DayCount + "<br>");
    document.write("Country taxes : " + this.CountryTaxes + "<br>");
    document.write("Trip price : " + this.CalcTripPrice + "<br>");
}

var turkeyTour = new Tour(10, 5, 5);
turkeyTour.Show();