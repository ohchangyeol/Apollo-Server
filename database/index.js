import mybatisMapper from 'mybatis-mapper';
import path from 'path';

const boardMapper = path.join( __dirname, 'mapper', 'boardMapper.xml');

export default createMapper = mybatisMapper.createMapper(
    [      
        boardMapper,
    ]
);
