export const parseFilterParams = (query)=>{
    const filter = {};

    if(query.name) {
        filter.name = { $regex: query.name, $options: 'i'};
    }

    return filter;
};