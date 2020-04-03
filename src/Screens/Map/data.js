var today = new Date();
var dd = (today.getDate() - 1).toString().padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

var yesterday = mm + '-' + dd + '-' + yyyy;

export const data_source = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + yesterday + ".csv";