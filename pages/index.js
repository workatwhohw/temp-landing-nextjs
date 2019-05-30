import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Link, withNamespaces } from "../i18n";

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

// import Link from 'next/link'
import LayoutGeneric from "../components/layouts/Generic";

class Home extends React.Component {
  // Called from server (page refresh) & client (client nav)
  static async getInitialProps() {
    return {
      // Return obj
      namespacesRequired: ["common"]
    };
  }

  render() {
    const { t } = this.props;
    return (
      <LayoutGeneric>
        <Head>
          <title>
            {t("logo-mark")} - {t("site-slogan")}
          </title>
          <meta name="description" content={t("site-description")} />
          <meta name="canonical" content={"https://workatwhohw.com/"} />

          <meta itemProp="name" content={t("logo-mark") + t("site-slogan")} />
          <meta itemProp="description" content={t("site-description")} />
          <meta itemProp="image" content="/static/logo/250px.png" />
          <meta name="og:title" content={t("logo-mark") + t("site-slogan")} />
          <meta name="og:description" content={t("site-description")} />
          <meta name="og:image" content="/static/logo/250px.png" />
          <meta name="og:url" content={"https://workatwhohw.com/"} />
          <meta name="og:site_name" content="WHoHW" />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content={t("logo-mark") + t("site-slogan")}
          />
          <meta name="twitter:description" content={t("site-description")} />
          <meta name="twitter:site" content="@WHoHWork" />
          <meta name="twitter:image:src" content="/static/logo/250px.png" />

          {/* <link rel='stylesheet' href='/static/css/main.css' />
          <link rel='stylesheet' href='/static/css/index.css' /> */}
        </Head>

        <Layout>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              Content
            </div>
          </Content>
        </Layout>
      </LayoutGeneric>
    );
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces("common")(Home);
