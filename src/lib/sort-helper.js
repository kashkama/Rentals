const sortBy = (type, field) => {
    switch(type) {
        case "date":
            return (a,b) => new Date(b[field]) - new Date(a[field]);
        case "number-price":
            return (a,b) => b[field] - a[field];
        default:
            return (a,b) => b[field] - a[field];
    }
};

export const sortFunction = sort => 
    (sort === "SORTED_BY_DATE") ?
        sortBy("date", "timestamp") :
        (sort === "SORTED_BY_PRICE") ?
            sortBy("number-price", "price") :
            sortBy("number", "rating");