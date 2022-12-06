class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;

    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
            },
        } : {};
        console.log(keyword);

        this.query = this.query.find({...keyword });
        return this;
    }

    filter() {
        const queryCopy = {...this.queryStr }


        //Removing fields for category

        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach(key => delete queryCopy[key]);

        //Filter for price and rating

        let querStr = JSON.stringify(queryCopy);
        querStr = querStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);



        this.query = this.query.find(JSON.parse(querStr));

        return this;

    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1; //50 products 5 products per page i.e 10 page

        const skip = resultPerPage * (currentPage - 1); //to skip products

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;

    }
};

module.exports = ApiFeatures;