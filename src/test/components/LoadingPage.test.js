import React from "react";
import { shallow } from "enzyme";
import { LoadingPage } from "../../components/Header";

test("shoulder render LoadingPage correctly", () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});