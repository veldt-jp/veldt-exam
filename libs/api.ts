const fetchWithToken = async (
  url: string,
  options: RequestInit & { signal?: AbortSignal },
  responseType: string = "json",
  token: string = ""
) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Vary: "Origin",
      Authorization: "Bearer DSA89asf!ain5#ER",
      ...((options.headers || {}) as Record<string, string>),
    };

    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      const customError = {
        response: {
          data: await response.json().catch(() => null),
          status: response.status,
          statusText: response.statusText,
          type: response.type,
          headers: response.headers,
        },
        message: response.status,
        config: options,
      };
      throw customError;
    }
    switch (responseType) {
      case "json":
        return response.json();
      case "blob":
        return response.blob();
      case "array_buffer":
        return response.arrayBuffer();
      case "text":
        return response.text();
      default:
        throw new Error(`Unsupported response type: ${responseType}`);
    }
  } catch (error: any) {
    const customError = {
      response: error?.response || null,
      message:
        error?.response?.data?.message ||
        error.message ||
        "An unknown error occurred.",
      config: options,
    };
    throw customError;
  }
};

const get = async ({
  url,
  responseType = "json",
  signal,
}: {
  url: string;
  responseType?: string;
  useToken?: boolean;
  token?: any;
  signal?: AbortSignal;
}) => fetchWithToken(url, { method: "GET", signal }, responseType);

const post = async ({
  url,
  body,
  responseType = "json",
  signal,
}: {
  url: string;
  body?: any;
  responseType?: string;
  useToken?: boolean;
  token?: any;
  signal?: AbortSignal;
}) =>
  fetchWithToken(
    url,
    { method: "POST", body: JSON.stringify(body), signal },
    responseType
  );

const update = async ({
  url,
  body,
  responseType = "json",
  signal,
}: {
  url: string;
  body?: any;
  responseType?: string;
  useToken?: boolean;
  token?: any;
  signal?: AbortSignal;
}) =>
  fetchWithToken(
    url,
    { method: "PUT", body: JSON.stringify(body), signal },
    responseType
  );

const remove = async ({
  url,
  body,
  responseType = "json",
  signal,
}: {
  url: string;
  body?: any;
  responseType?: string;
  useToken?: boolean;
  token?: any;
  signal?: AbortSignal;
}) =>
  fetchWithToken(
    url,
    { method: "DELETE", body: JSON.stringify(body), signal },
    responseType
  );

const apiClient = { get, post, update, remove };
export { apiClient };
