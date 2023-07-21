import type { ApiContext, User } from "types/data";
import { fetcher } from "utils";

// 받아올 데이터 형식
export type GetUserParams = {
  /**
   * 사용자 ID
   */
  id: number;
};

/**
 * 사용자 API(개별 취득)
 * @params context API 콘텍스트
 * @params params 파라미터
 * @returns 사용자
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
): Promise<User> => {
  /**
   * 사용자 API
   * 샘플 응답
   * {
   *  "id" : "1",
   *  "username" : "hana",
   *  "displayName" : "Hana Kim",
   *  "eamil" : "hana.kim@example.com"
   *  "profileImageUrl" : "/users/1.png"
   *  "description" : "Lorem Ipsum is imply dummy text of the printing"
   * }
   */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")} / users / ${id}`,
    {
      headers: {
        Accept: "applcation/json",
        "Content-Type": "aaplcation/json",
      },
    }
  );
};

export default getUser;
