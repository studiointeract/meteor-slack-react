import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import {mount} from 'react-mount-layout';
import MainLayout from '../ui/layouts/MainLayout.jsx';

FlowRouter.route("/", {
  action() {
    mount(MainLayout, {content: "Connecting ..."});
  }
});
