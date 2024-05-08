export const formatDate = (value: string) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export const getTimeAgo = (value: string) => {
    const compareDate: Date = new Date(value);
    const currentDate: Date = new Date();

    const diffSeconds = Math.floor((currentDate.getTime() - compareDate.getTime()) / 1000);
    const secondsInMinute = 60;
    const secondsInHour = 3600; 
    const secondsInDay = 86400; 
    const secondsIn30Days = 2592000;
    const secondsInYear = 31536000; 

    if (diffSeconds < secondsInMinute) {
        return "1 minute ago";
    } else if (diffSeconds < secondsInHour) {
        const diffMinutes = Math.floor(diffSeconds / secondsInMinute);
        return `${diffMinutes} minutes ago`;
    } else if (diffSeconds < secondsInDay) {
        const diffHours = Math.floor(diffSeconds / secondsInHour);
        return `${diffHours} hours ago`;
    } else if (diffSeconds < secondsIn30Days) {
        const diffDays = Math.floor(diffSeconds / secondsInDay);
        return `${diffDays} days ago`;
    } else if (diffSeconds < secondsInYear) {
        const diffMonths = Math.floor(diffSeconds / secondsIn30Days);
        return `${diffMonths} months ago`;
    }

    const diffYears = Math.floor(diffSeconds / secondsInYear);
    return `${diffYears} years ago`;
    
}