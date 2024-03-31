const CURRENT_DATE = new Date();

export const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export const getTimeAgo = (value) => {
    const compareDate = new Date(value);

    const diffSeconds = Math.floor((CURRENT_DATE - compareDate) / 1000);

    if (diffSeconds < 60) {
        return "1 minute ago";
    } else if (diffSeconds < 3600) {
        const diffMinutes = Math.floor(diffSeconds / 60);
        return `${diffMinutes} minutes ago`;
    } else if (diffSeconds < 86400) {
        const diffHours = Math.floor(diffSeconds / 3600);
        return `${diffHours} hours ago`;
    } else if (diffSeconds < 2592000) {
        const diffDays = Math.floor(diffSeconds / 86400);
        return `${diffDays} days ago`;
    } else if (diffSeconds < 31536000) {
        const diffMonths = Math.floor(diffSeconds / 2592000);
        return `${diffMonths} months ago`;
    } else {
        const diffYears = Math.floor(diffSeconds / 31536000);
        return `${diffYears} years ago`;
    }
}