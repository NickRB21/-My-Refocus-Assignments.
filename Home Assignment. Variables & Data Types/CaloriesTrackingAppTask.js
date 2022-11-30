let cyclingDailyPerMinute = 30; 
let cyclingDailyConvertoHour = 0.5; 
let caloriesLostPer30Minutes =225; 
let totalDaysOfCycling = 15; 
let caloriesLostPerMinute = cyclingDailyPerMinute / caloriesLostPer30Minutes;
let caloriesLost = caloriesLostPerMinute *cyclingDailyPerMinute *totalDaysOfCycling;



console.log (`Great work, Sam! After ${cyclingDailyConvertoHour} hours of cycling every day for a week, you may lose a total of 3375 calories.`);