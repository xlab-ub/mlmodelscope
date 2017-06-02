import uuid from "uuid";
import store from "store2";
import { Controller, provide } from "cerebral";
import Devtools from "cerebral/devtools";
import StorageProvider from "@cerebral/storage";
import UseragentModule from "@cerebral/useragent";
import HttpProvider from "@cerebral/http";

const controller = Controller({
  devtools: process.env.NODE_ENV === "production"
    ? null
    : Devtools({
        // Connect to Electron debugger (external debugger). It will
        // fall back to chrome extension if unable to connect
        host: "localhost:8585",

        // By default the devtools tries to reconnect
        // to debugger when it can not be reached, but
        // you can turn it off
        reconnect: true,

        // Time travel
        storeMutations: true,

        // Warnings on mutating outside "state" API
        preventExternalMutations: true,

        // Shows a warning when you have components with number of
        // state dependencies or signals above the set number
        bigComponentsWarning: 5,

        // In addition to these basic JavaScript types: Object, Array, String, Number
        // and Boolean, types of File, FileList, Blob, ImageData and RegExp is allowed to be stored in state
        // tree. You can add additional types if you know what you are doing :)
        allowedTypes: [Blob]
      }),
  modules: {
    useragent: UseragentModule({
      media: {
        unsupported: "(max-width: 550px)",
        mobile: "(max-width: 700px)",
        desktop: "(min-width: 701px)"
      }
    })
  },
  providers: [
    HttpProvider({
      // Prefix all requests with this url
      baseUrl: "/api",

      // Any default headers to pass on requests
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json"
      },

      // When talking to cross origin (cors), pass cookies
      // if set to true
      withCredentials: false
    }),
    provide("uuid", uuid),
    StorageProvider({
      target: store,
      sync: { carml: "carml" },
      prefix: "carml"
    })
  ]
});

export default controller;
