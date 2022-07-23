import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "C2GEN",
    ...jobProps,
  });
  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("renders job title", () => {
    const props = createJobProps({ title: "Vue Developer" });
    const wrapper = mount(JobListing, createConfig(props));
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job organization", () => {
    const props = createJobProps({ organization: "C2GEN" });
    const wrapper = mount(JobListing, createConfig(props));
    expect(wrapper.text()).toMatch("C2GEN");
  });
});
