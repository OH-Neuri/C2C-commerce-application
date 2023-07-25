import type { ApiContext, User } from "types/data";
import { fetcher } from "utils";

/**
 * 사용자 API(목록 취득)
 * @params context API 컨텍스트
 * @return 사용자 목록
 */

const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/users`, {
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
};

export default getAllUsers;
