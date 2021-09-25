import { render } from "@testing-library/react"
import { LottieAnimation } from "./LottieAnimation"
import rocketLoader from "../../../assets/animated_illustrations/loader.json"

describe("<LottieAnimation />", () => {
  it("should render the component properly", () => {
    const { container } = render(<LottieAnimation animationDataFile={rocketLoader} />)
    expect(container).toMatchSnapshot()
  })

  it("should render nothing if animation file is not passed", () => {
    const { container } = render(<LottieAnimation animationDataFile={null} />)
    expect(container.firstChild).toBeNull()
  })
})
