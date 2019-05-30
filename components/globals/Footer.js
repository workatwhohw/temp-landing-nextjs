import React from "react";
import PropTypes from "prop-types";
import { i18n, withNamespaces } from "../../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"; // eslint-disable-line
import axios from "axios";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      newsletterEmail: "",
      newsletterName: "",
      newsletterConsent: false,
      newsletterSubmitted: false,
      newsletterSubmitSuccess: null,
      newsletterSubmitError: null
    };
    this.newsletterSubscribe = this.newsletterSubscribe.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateConsent = this.updateConsent.bind(this);
  }

  static async getInitialProps() {
    return {
      // Return obj
      namespacesRequired: ["navigation"]
    };
  }

  updateEmail(e) {
    // Update newsletter email
    this.setState({ newsletterEmail: e.target.value });
  }

  updateName(e) {
    // Update newsletter name
    this.setState({ newsletterName: e.target.value });
  }

  updateConsent() {
    // Update newsletter consent status
    const newsletterChecked = this.state.newsletterConsent ? "checked" : "";
    this.setState({
      newsletterConsent: !this.state.newsletterConsent
    });
  }

  newsletterSubscribe() {
    const { t } = this.props;

    if (!this.props.newsletterAlreadySubbed) {
      if (
        this.state.newsletterConsent &&
        this.state.newsletterEmail.length > 0 &&
        this.state.newsletterEmail.includes("@") &&
        this.state.newsletterEmail.includes(".")
      ) {
        // Submit
        this.setState({ newsletterSubmitted: true });
        this.setState({ newsletterSubmitError: null }); // Reset errors.

        let fname = "",
          lname = "",
          nameFull = this.state.newsletterName.trim();

        // Determine if name is included. If has space, separate into last name
        if (nameFull.length > 0 && nameFull.includes(" ")) {
          let nameSplit = nameFull.split(" ");
          fname = nameSplit[0].charAt(0).toUpperCase() + nameSplit[0].slice(1);
          lname = nameSplit[1].charAt(0).toUpperCase() + nameSplit[1].slice(1);
        } else if (this.state.newsletterName.length > 0) {
          fname = nameFull.charAt(0).toUpperCase() + nameFull.slice(1);
        }

        const submitData = {
          EMAIL: this.state.newsletterEmail,
          FNAME: fname,
          LNAME: lname,
          COMPANY: "",
          "gdpr[1481]": this.state.newsletterConsent // Email permission
        };

        axios
          .post("//api.rivetz.com/subscribe/886dfb345f", submitData)
          .then(res => {
            if (res.data.success) {
              this.props.newsletterSub();
              this.setState({
                newsletterSubmitSuccess: t("newsletter.success")
              });
              console.log(t("newsletter.success"));
            } else if (res.data.notice) {
              this.setState({ newsletterSubmitError: res.data.notice });
              console.log("Notice: " + res.data.notice);
            }
            this.setState({ newsletterSubmitted: false });
          })
          .catch(err => {
            console.log("Submission Failed: " + t("newsletter.fail"));
            this.setState({ newsletterSubmitError: t("newsletter.fail") });
            this.setState({ newsletterSubmitted: false });
          });
      } else {
        this.setState({ newsletterSubmitError: t("newsletter.requirements") });
      }
    } else {
      this.setState({ newsletterSubmitError: t("newsletter.success") });
    }

    return false;
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <footer className="footer">
          <div className="uk-container-fluid uk-grid-collapse" data-uk-grid>
            <div className="uk-width-1-1@xs uk-width-2-5@l newsletter">
              <h4>{t("newsletter.header")}</h4>
              <NewsletterError error={this.state.newsletterSubmitError} />
              <div className="newsletter-email">
                <div className="uk-inline marBot">
                  <div className="uk-form-icon" href="" uk-icon="icon: user" />
                  <input
                    className="uk-input"
                    placeholder={t("newsletter.name")}
                    onChange={this.updateName}
                    value={this.state.newsletterName}
                  />
                </div>
                <div className="uk-inline">
                  <div className="uk-form-icon" href="" uk-icon="icon: mail" />
                  <input
                    className="uk-input"
                    placeholder={t("newsletter.email")}
                    onChange={this.updateEmail}
                    value={this.state.newsletterEmail}
                  />
                </div>
              </div>
              <div className="newsletter-consent">
                <div className="uk-margin">
                  <label>
                    <span>{t("newsletter.subscribe")}</span>
                    <div className="inputCont">
                      <input
                        className="uk-checkbox"
                        id="newsletter-email"
                        onChange={this.updateConsent}
                        value={this.state.newsletterConsent}
                        type="checkbox"
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="newsletter-submit">
                <div id="newsletter-submit" onClick={this.newsletterSubscribe}>
                  {t("newsletter.button")}
                </div>
              </div>
              <NewsletterLoading
                isVisible={this.state.newsletterSubmitted}
                loading={t("newsletter.loading")}
                success={this.state.newsletterSubmitSuccess}
              />
            </div>
            <div className="uk-width-1-1@xs uk-width-3-5@l footerContent">
              <ul className="social-nav">
                <li>
                  <a href="" target="_blank" title="Telegram">
                    <FontAwesomeIcon
                      fixedWidth
                      icon={["fab", "telegram-plane"]}
                    />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="YouTube">
                    <FontAwesomeIcon fixedWidth icon={["fab", "youtube"]} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="LinkedIn">
                    <FontAwesomeIcon fixedWidth icon={["fab", "linkedin"]} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Medium">
                    <FontAwesomeIcon fixedWidth icon={["fab", "medium"]} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Flipboard">
                    <FontAwesomeIcon fixedWidth icon={["fab", "flipboard"]} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Discord">
                    <FontAwesomeIcon fixedWidth icon={["fab", "discord"]} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Facebook">
                    <FontAwesomeIcon fixedWidth icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Twitter">
                    <FontAwesomeIcon fixedWidth icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" title="Reddit">
                    <FontAwesomeIcon
                      fixedWidth
                      icon={["fab", "reddit-alien"]}
                    />
                  </a>
                </li>
              </ul>

              <div className="uk-container-fluid" data-uk-grid>
                <div className="uk-width-1-2 uk-width-1-4@m">
                  <h5>{t("top.products")}</h5>
                  <ul className="footerNav">
                    <li>
                      <Link
                        href="/products/wallet"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("products.wallet").replace(/Rivetz /g, "")}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/authenticator"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("products.authenticator").replace(
                              /Rivetz /g,
                              ""
                            )}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/rivet"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("products.rivet")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/chat"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>Chadder</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/confirm"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("products.confirm")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/jarz"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("products.jarz")}</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="uk-width-1-2 uk-width-1-4@m">
                  <h5>{t("top.solutions")}</h5>
                  <ul className="footerNav">
                    <li>
                      <Link
                        href="/solutions/policy"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("solutions.policy").replace(/Rivetz /g, "")}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/collection"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("solutions.collection").replace(/Rivetz /g, "")}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/auth"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("solutions.auth")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/drt"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("solutions.drt")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/services"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("solutions.services")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/wp"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("solutions.wp").replace("& Product Sheets", "")}
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="uk-width-1-2 uk-width-1-4@m">
                  <h5>{t("top.developers")}</h5>
                  <ul className="footerNav">
                    <li>
                      <Link
                        href="/developers/start-overview"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("developers.start-overview").replace(
                              /Rivetz /g,
                              ""
                            )}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/developers/quick-wallet"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("developers.quick-wallet").replace(
                              /Rivetz /g,
                              ""
                            )}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/developers/start-full"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("developers.start-full")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/developers/community"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("developers.community")}</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="uk-width-1-2 uk-width-1-4@m">
                  <div className="">
                    <Link href="/community" onClick={this.props.clickOffMenu}>
                      <a>
                        <h5 className="community">{t("top.community")}</h5>
                      </a>
                    </Link>
                  </div>
                  <h5>{t("top.company")}</h5>
                  <ul className="footerNav">
                    <li>
                      <Link
                        href="/company/mission"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("company.mission").replace(/Rivetz /g, "")}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/history"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>
                            {t("company.history").replace(/Rivetz /g, "")}
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/partner"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("company.partner")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/team"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("company.team")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/careers"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("company.careers")}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company/contact"
                        onClick={this.props.clickOffMenu}
                      >
                        <a>
                          <span>{t("company.contact")}</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>
              &copy; 2019&nbsp;
              <a
                href="https://rivetz.com"
                className="link-underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Rivetz Corp
              </a>
              . {t("copyright")}
            </p>
          </div>
        </footer>
        {/* eslint-disable */}
        {/* <script src='/static/js/vendor/uikit/uikit.min.js'></script>
        <script src='/static/js/vendor/uikit/uikit-icons.min.js'></script> */}
        <script
          defer
          src="https://pro.fontawesome.com/releases/v5.7.2/js/all.js"
          integrity="sha384-I3Hhe9TkmlsxzooTtbRzdeLbmkFQE9DVzX/19uTZfHk1zn/uWUyk+a+GyrHyseSq"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-49587602-2"
        />
        <script src="/static/js/ga.js" />
        {/* eslint-enable */}
      </div>
    );
  }
}

class NewsletterLoading extends React.Component {
  render() {
    if (this.props.isVisible || this.props.success) {
      if (this.props.success) {
        return (
          <div className="newsletter-success">
            <div className="success-msg">
              <FontAwesomeIcon icon={["fal", "check"]} /> {this.props.success}
            </div>
          </div>
        );
      } else {
        return (
          <div className="newsletter-loading">
            <span>{this.props.loading}</span>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

class NewsletterError extends React.Component {
  render() {
    if (this.props.error) {
      return (
        <div className="newsletter-error">
          <span>{this.props.error}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces(["navigation"])(Footer);
