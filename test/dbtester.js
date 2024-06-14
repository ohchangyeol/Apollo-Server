import {queryRead ,getQuery} from "../database/index.js"

const limit = 10 ,
    page = 1;

const param = {
    // page: (data.page - 1) * data.limit ,
    page: (page - 1) * limit ,
    limit: limit,
};

// const query = mybatisMapper.getStatement('boardMapper','getBoardList', { language: 'sql', indent: '  ' } );
// const query = getQuery('boardMapper','getBoardList');
const query = getQuery('boardMapper','getBoardList',param);

console.log(param);
console.log(query);

const result = await queryRead(query);

console.log(result);
