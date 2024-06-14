import mybatisMapper from 'mybatis-mapper';
import {queryRead ,mybatisMappersWithContext} from "../database/index.js"

const limit = 10 ,
    page = 1;

const param = {
    // page: (data.page - 1) * data.limit ,
    page: (page - 1) * limit ,
    limit: limit,
};

// const query = mybatisMapper.getStatement('boardMapper','getBoardList', { language: 'sql', indent: '  ' } );
// const query = mybatisMappersWithContext('boardMapper','getBoardList');
const query = mybatisMappersWithContext('boardMapper','getBoardList',param);

console.log(param);
console.log(query);

const result = await queryRead(query);

console.log(result);
