import mybatisMapper from 'mybatis-mapper';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const boardMapper = path.join( __dirname, 'boardMapper.xml');

export default mybatisMapper.createMapper(
    [      
        boardMapper,
    ]
);
