// A mock function to mimic making an async request for data
export function fetchUser() {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({ data: "John Smith" }), 500)
  );
}

export const userAPI = { fetchUser };
