import React, { Component, useEffect } from "react";
import { WebView } from "react-native-webview";
import queryString from "query-string";

export default class PlaidLink extends Component {
  webView = null;

  render() {
    const linkToken = "link-sandbox-3be4db27-5ddc-4112-bd5e-ac6593fc4e4a";

    return (
      <WebView
        ref={(ref) => {
          this.webView = ref;
        }}
        originWhitelist={["https://*", "plaidlink://*"]}
        source={{
          uri: `https://cdn.plaid.com/link/v2/stable/link.html?isWebview=true&token=${linkToken}`,
        }}
        onShouldStartLoadWithRequest={(request) => {
          const { url } = request.url;

          if (url.includes("plaidlink://")) {
            const params = queryString.parse(url);
            if (url.includes("plaidlink://connected")) {
              console.log(params.public_token);
            }
            return false;
          }

          return true;
        }}
      />
    );
  }
}
