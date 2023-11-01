// task 1
function halloween (num)
{
    let year = num.getFullYear()
    let month = num.getMonth() + 1
    let day = num.getDate()

    if (day === 31)
    {
        return "Bonfire toffe"
    }  
    else 
    {
        return "toffe"
    }
}
console.log(halloween(new Date("2013/10/31")));

//task 2
function centuryFromYear(year) 
{
   var century = Math.ceil(year / 100);
   
   if (year % 100 === 0) 
   {
        century--;
   }
   
   return century;
}
console.log(centuryFromYear(2005)); 


//task 3
function monthName (num) 
{
    let nameMonth =  
    [ 
       "January","Fabruary", "March",
       "April", "May", "June", "July",
       "August", "September", "October",
       "November", "December"
    ]

    let date  = new Date()
    date.setMonth(num - 1)
    return nameMonth[date.getMonth()]
}
console.log(monthName(12));


//task 4 
function afterNMonth (year, month)
{
    return new Date (year,month + 1, 0).getFullYear()
}
console.log(afterNMonth(1444,60));


//task 5 
function formatDate (num)
{
    let date = new Date(num);
    let  year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
        
    let formatDate = year + ("0" + day).slice(-2) + ("0" + month).slice(-2);
        
        return formatDate;
}
console.log(formatDate("11/12/2019"));


// task 6 
function dayFriday (month, year)
{
    let date = new Date (year,month - 1, 13)
    return date.getDay() === 5
}
console.log(dayFriday(10,2017));



//task 7
function timeForMilkAndCookies (today)
{
    if (today.getMonth() === 11 && today.getDate() === 24)
    {
        return true 
    }
    else 
    {
        return false 
    }
}
console.log(timeForMilkAndCookies(new Date (2023,11,24)));

//task 8 
function longestTime (h,m,s)
{
    if (h <= m && h <=  s)
    {
        return h
    }
    else if (m <= h && m <= s)
    {
        return m
    }
    else 
    {
        return s
    }
}
console.log(longestTime(1,59,3598));


// task 9
function getDate (num)
{
    let arr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

    let date = new Date(num)
    return arr[date.getDay()] 
}
console.log(getDate("12/07/2022"));


//task 10
function days (month,year)
{
    return new Date (month + 1, year,0).getDate()
}
console.log(days(4,654));


//task 11 
function isValidDate (day, month, year)
{
    let date = new Date (year, month - 1, day)

    let res = date.getDay() === day && date.getMonth() === month - 1 && date.getFullYear() === year

    return res 
}
console.log(isValidDate(35,2,2020));

// task 13
function polidromicDate (date)
{
    let arr = date.split("/")

    let date1 = arr[0] + arr[1] + arr[2] // ммддггг
    let date2 = arr[1] + arr[0] + arr[2] // ддммггг

    return date1 === date1.split("").reverse().join("") && date2 === date2.split("").reverse().join("")
}
console.log(polidromicDate("02/02/2020"));


//task 14 
function getDays (date1, date2)
{
    let date = Math.abs(date1 - date2) 

    let res = Math.ceil(date / (1000 * 60 * 60 * 24)) 

    return res 
}
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));

//task 16
function daysUntil2021 (str)
{
    let date = new Date (str)
    let year2021 = new Date ("01/01/2021")
    let btw = Math.abs(year2021 - date)
    let res = Math.ceil(btw / (1000 * 60 * 60 * 24))

    return res + " " + "days"
}
console.log(daysUntil2021("12/28/2020"));
console.log(daysUntil2021("1/1/2020"));
console.log(daysUntil2021("2/28/2020"));


// task 17 
function threeDaysAgo (num)
{
    let date = new Date (num)

    date.setDate(date.getDate() - 3)
    let year = date.getFullYear()
    let month = ("0" + (date.getMonth() + 1)).slice(-2) // "0" для месяца и даты // например: 2 // "02" //вформат "гггммдд"
    let day =  ( "0" + (date.getDate())).slice(-2) 

    return year + "-" + month + "-" + day 
}
console.log(threeDaysAgo(new Date (2018,0,1)));


// task 18 
function howUnlucky(date) 
{
    let cnt = 0;

    for (let i = 0; i < 12; i++) 
    {
        let res = new Date(date, i, 13);
        
        if (res.getDay() === 5)  // 5 is Friday
        { 
            cnt++;
        }
    }

    return cnt;  
}
console.log(howUnlucky(2020));


// task 19
function averageDate(arr)
{
    if (arr.length === 0)
    {
        return null
    }

    let all = 0

    for (let i = 0; i < arr.length; i++)
    {
        all += arr[i].getTime()
    }

    let res = Math.floor(all / arr.length)

    let date = new Date (res)

    return date 
}
console.log(averageDate([ new Date(Date.UTC(1970, 0, 1)) ]));


//task 20 
function afterNDays (dayArr, n)
{
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let resArr = []

    for (let i = 0; i < dayArr.length; i++)
    {
        let index = week.indexOf(dayArr[i])
        let res = (index + n) % 7
        resArr.push(week[res])
    }

    return resArr
}
console.log(afterNDays(["Thursday", "Monday"], 4));



//task 22
function firstTuesdayOfTheMonth (year, month)
{
    let date = new Date (year,month - 1, 1)

    let day = date.getDay()

    if (day <= 2)
    {
        date.setDate(2 - day + 7)
    }
    else 
    {
        date.setDate(9 - day)
    }

    return date.toISOString().slice(0,10) // toISOString формат (ггггммдд)
}
console.log(firstTuesdayOfTheMonth(1997,1));

//task 24 
function weekAfter (num)
{
    let date = new Date (num)
    date.setDate(date.getDate() + 6) // 7 week
    let year = date.getFullYear().toString()
    let month = (date.getMonth()+1).toString()
    let day = date.getDate().toString()

    if (day.length === 1 && month.length === 1)
    {
        return "0" + day + "/" + "0" + month
    }
    else 
    {
       return  day  + "/" + month + "/" + year
    }
}
console.log(weekAfter("12/03/2020"));



