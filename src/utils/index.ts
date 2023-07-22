export const fetcher = async (
  // 목표 URI
  resource: RequestInfo,
  // HTTP method, headers, body
  init?: RequestInit
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    const errorRes = await res.json();
    const error = new Error(
      errorRes.message ?? "API 요청 중에 에러가 발생했습니다"
    );

    throw error;
  }

  return res.json();
};
