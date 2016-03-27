import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import {mount} from 'react-mount-layout';
import MainLayout from '../ui/layouts/MainLayout.jsx';
import Navigation from '../ui/components/Navigation.jsx';
import ChannelPage from '../ui/pages/ChannelPage.jsx';

FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
      nav: <Navigation />,
      content: "Connecting ..."
    });
  }
});

FlowRouter.route("/:channel", {
  action(params) {
    mount(MainLayout, {
      nav: <Navigation />,
      content: <ChannelPage channel={params.channel} />
    });
  }
});
