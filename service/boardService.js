import {queryRead ,getQuery} from "../database/index.js"

const MAPPER_NAME = "boardMapper";
/**
 * 게시글 목록 조회
 * @param {*} data 파라메터
 */
export async function boardList( data ) {

    const param = {
        title : data.title || null,
        page: (data.page - 1) * data.limit,
        limit: data.limit
    };

    const countQuery = getQuery(MAPPER_NAME,'getBoardList',param);
    const countResult = await queryRead(countQuery);

    const query = getQuery(MAPPER_NAME,'getBoardList',param);
    const result = await queryRead(query);

    if(countResult.rowCount !== 0){
        result.total = countResult.rows.total
    }
    
    return result;
}

/**
 * 게시글 상세 조회
 * @param {*} data 파라메터
 */
export async function getBoard( data ) {

    const param = {
        idx : data.idx ,
    };

    const query = getQuery(MAPPER_NAME,'getBoard',param);
    const result = await queryRead(query);

    return result;
}

/**
 * 게시글 저장
 * @param {*} data 파라메터
 */
export async function saveBoard( data ) {

    const param = {
        title : data.title || null ,
        content : data.content || null ,
        category : data.category || null ,
    };

    const query = getQuery(MAPPER_NAME,'saveBoard',param);
    const result = await queryRead(query);

    return result;

}

/**
 * 게시글 삭제
 * @param {*} data 파라메터
 */
export async function deleteBoard( data ) {

    const param = {
        idx : data.idx,
    };

    const query = getQuery(MAPPER_NAME,'deleteBoard',param);
    const result = await queryRead(query);

    return result;
}

/**
 * 게시글 수정
 * @param {*} data 파라메터
 */
export async function updateBoard( data ) {

    const param = {
        idx : data.idx,
        title : data.title || null,
        content : data.content || null,
    };

    const query = getQuery(MAPPER_NAME,'updateBoard',param);
    const result = await queryRead(query);

    return result;
}