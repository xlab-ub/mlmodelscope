import React from 'react';
import HomePage from "./HomePage";
import Footer from "../Footer/Footer";
import {MemoryRouter} from "react-router-dom";

export default {
  title: 'Home/Splash Page',
  component: HomePage,
};

const Template = (args) => <MemoryRouter><HomePage {...args} /></MemoryRouter>;

export const Default = Template.bind({});

const FooterTemplate = (args) => <MemoryRouter>
  <HomePage {...args} />
  <Footer/>
</MemoryRouter>

export const WithFooter = FooterTemplate.bind({});
