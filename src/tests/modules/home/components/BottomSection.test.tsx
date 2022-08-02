import { render } from "@testing-library/react";
import { BottomSection } from "../../../../modules/home/components/BottomSection";

describe("BottomSection", () => {
  it("renders year", () => {
    const { container } = render(<BottomSection />);
    expect(container).toMatchSnapshot();
  });
});
