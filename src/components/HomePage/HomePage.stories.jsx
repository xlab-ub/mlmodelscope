import React from 'react';
import HomePage from "./HomePage";
import Footer from "../Footer/Footer";

export default {
  title: 'Home/Splash Page',
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});

const FooterTemplate = (args) => <>
    <HomePage {...args} />
    <Footer />
  </>

export const WithFooter = FooterTemplate.bind({});
