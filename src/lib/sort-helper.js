const sortBy = (type, field) => {
    switch(type) {
        case "date":
            return (a,b) => new Date(b[field]) - new Date(a[field]);
        default:
            return (a,b) => b[field] - a[field];
    }
};

export const sortFunction = sort => 
    (sort === "SORT_BY_DATE") ?
        sortBy("date", "timestamp") :
        (sort === "SORTED_BY_PRICE") ?
            sortBy("number", "price") :
            sortBy("number", "rating");