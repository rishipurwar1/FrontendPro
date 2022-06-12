import { render } from "@testing-library/react"

import rocketLoader from "../../../assets/animated_illustrations/loader.json"

import { LottieAnimation } from "./LottieAnimation"

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
