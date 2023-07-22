import type { ApiContext } from "types/data";
import { fetcher } from "utils";

/**
 *  인증 API(로그아웃)
 *  @param context API 컨텍스트
 *  @returns 로그아웃 메시지
 */

const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signout`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
};

export default signout;
