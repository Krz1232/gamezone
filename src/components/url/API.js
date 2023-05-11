// Base URL
const BASE_URL = "https://api.rawg.io/api/";

// get Current Day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`
    } else {
       return day
    }
}

// get Current Month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

// Year,Month Day
const year = new Date().getFullYear();
const month = getCurrentMonth();
const day = getCurrentDay();


// Date
const lastDate = `${year-1}-${month}-${day}`;
const currentDate = `${year}-${month}-${day}`
const nextDate = `${year+1}-${month}-${day}`


// API Key
const key = `key=ea622b8db0a042ed9469d92390740884`;

// Games To get
const size = "page_size=1000"


// get Popular games since last year
const popular_games = `${BASE_URL}games?dates=${lastDate},${currentDate}&${key}&${size}&ordering=-rating`;
const up_coming_games = `${BASE_URL}games?dates=${currentDate},${nextDate}&${key}&${size}&ordering=-added`;
const newGames = `${BASE_URL}games?dates=${lastDate},${currentDate}&${key}&${size}&ordering=-release`;


export { popular_games, up_coming_games, newGames }