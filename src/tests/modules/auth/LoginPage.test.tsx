import { screen, waitFor } from "@testing-library/react";
import { LoginPage } from "../../../modules/auth/LoginPage";
import user from "@testing-library/user-event";
import { renderWithProvidersAndRouter } from "../../redux/test_utils";
import { AuthProvider } from "../../../modules/auth/AuthProvider";

describe("LoginPage", () => {
  const setupRender = () => {
    renderWithProvidersAndRouter(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );
  };

  it("renders username field, password field, login button etc", () => {
    setupRender();
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /nextshop/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.getByText(/shopping with cool stuff today/i)
    ).toBeInTheDocument();
  });

  it("renders error message when login button clicked while username or password is blank", () => {
    const emailErrMsg = "Please enter your email address";
    const paswordErrMsg = "Please enter your password";
    const nonValidEmailErrMsg = "Please enter valid email address";
    const nonValidPassErrMsg = "Password must be 8 characters or more";
    let emailInput, passwordInput, loginBtn;

    setupRender();
    loginBtn = screen.getByRole("button", { name: /login/i });
    expect(screen.queryByText(emailErrMsg)).not.toBeInTheDocument();
    user.click(loginBtn);
    expect(screen.getByText(emailErrMsg)).toBeInTheDocument();
    user.type(screen.getByPlaceholderText(/email/i), "typing random string");
    user.click(loginBtn);
    expect(screen.getByText(nonValidEmailErrMsg)).toBeInTheDocument();
    emailInput = screen.getByPlaceholderText(/email/i) as HTMLInputElement;

    emailInput.setSelectionRange(0, 19);
    user.type(emailInput, "{backspace}account@mail.com");

    user.click(loginBtn);
    expect(screen.getByText(paswordErrMsg)).toBeInTheDocument();
    user.type(screen.getByPlaceholderText(/password/i), "pass");
    user.click(loginBtn);
    expect(screen.getByText(nonValidPassErrMsg)).toBeInTheDocument();
    passwordInput = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement;

    passwordInput.setSelectionRange(0, 4);
    user.type(passwordInput, "{backspace}password wit hmore than8characters");
    user.click(loginBtn);
    expect(screen.queryByText(nonValidPassErrMsg)).not.toBeInTheDocument();
  });

  it("renders success login when user is registered", async () => {
    setupRender();
    user.type(screen.getByPlaceholderText(/email/i), "valid@user.com");
    user.type(screen.getByPlaceholderText(/password/i), "validpassword");
    user.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument()
    );
  });

  it("renders email or password is incorrect when user is not registered", async () => {
    setupRender();
    user.type(screen.getByPlaceholderText(/email/i), "notvalid@user.com");
    user.type(screen.getByPlaceholderText(/password/i), "notvalidpassword");
    user.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument()
    );
    expect(
      screen.getByText(/username or password is incorrect/i)
    ).toBeInTheDocument();
  });
});
