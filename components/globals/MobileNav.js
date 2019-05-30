import React from "react";
import PropTypes from "prop-types";
import { i18n, withNamespaces } from "../../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"; // eslint-disable-line

class MobileNav extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.clickOffMenu = this.clickOffMenu.bind(this);
  }

  static async getInitialProps() {
    return {
      // Return obj
      namespacesRequired: ["navigation"],
      showMenu: false
    };
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  clickOffMenu() {
    // User clicks on nav item, turn off menu
    this.setState({
      showMenu: false
    });
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="site-navigation-mobile" className="uk-hidden@m">
          <div className="uk-container">
            <div className="uk-grid-collapse " data-uk-grid>
              <div className="logoCont uk-width-1-3">
                <a href="/">
                  <img
                    src="/static/img/logo/250px.png"
                    alt={"Rivetz " + t("logo")}
                  />
                </a>
              </div>
              <div className="menu-toggle uk-width-2-3">
                <a
                  id="menu-toggle"
                  className="general-page"
                  href="#"
                  onClick={this.toggleMenu}
                >
                  <svg
                    width="27"
                    height="12"
                    viewBox="0 0 27 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.71295 3.80802L1.09993 1.00802C1.0246 0.949643 1.06588 0.828979 1.16118 0.828979H26.5165C26.5717 0.828979 26.6165 0.873751 26.6165 0.928979V3.72898C26.6165 3.78421 26.5717 3.82898 26.5165 3.82898H4.7742C4.75203 3.82898 4.73048 3.82161 4.71295 3.80802Z"
                      fill="#F47E3E"
                    />
                    <path
                      d="M24.1033 8.69586L26.4771 11.4959C26.5322 11.5608 26.486 11.6605 26.4008 11.6605H9.80021C9.74498 11.6605 9.70021 11.6158 9.70021 11.5605V8.76052C9.70021 8.70529 9.74498 8.66052 9.80021 8.66052H24.027C24.0564 8.66052 24.0843 8.67344 24.1033 8.69586Z"
                      fill="#F47E3E"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.state.showMenu ? (
          <MobileNavMenu clickOffMenu={this.clickOffMenu} t={t} />
        ) : null}
      </div>
    );
  }
}

class MobileNavMenu extends React.Component {
  static async getInitialProps() {
    return {
      // Return obj
      namespacesRequired: ["navigation"]
    };
  }

  render() {
    const { t } = this.props;
    return (
      <div id="site-navigation-offcanvas">
        <div className="site-navigation-offcanvas-inner uk-offcanvas-close">
          <div id="site-navigation-close" onClick={this.props.clickOffMenu}>
            <FontAwesomeIcon icon={["far", "times"]} />
          </div>

          <div className="mobile-nav-position">
            <ul className="mobile-nav">
              {/* <li>
                <Link href='/' onClick={this.props.clickOffMenu}>
                  <a>
                    <div className="nav-inner">
                      <div className="nav-icon">
                        <FontAwesomeIcon icon={['fas', 'home']} />
                      </div>
                      <span>{t('top.home')}</span>
                    </div>
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/products" onClick={this.props.clickOffMenu}>
                  <a>
                    <div className="nav-inner">
                      <div className="nav-icon">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.8549 6.232L18.3416 1.54897C18.1451 0.964146 17.6005 0.571289 16.9844 0.571289H11.5871V6.28557H20.8148C20.8326 6.26325 20.8371 6.25432 20.8549 6.232ZM0.872803 7.71415V19.1427C0.872803 19.9329 1.5112 20.5713 2.30137 20.5713H19.4442C20.2344 20.5713 20.8728 19.9329 20.8728 19.1427V7.71415H0.872803ZM14.4933 14.3749L11.2523 17.5624C11.0424 17.7677 10.7032 17.7677 10.4933 17.5624L7.25227 14.3749C6.3103 13.4508 6.36834 11.915 7.41745 11.0624C8.33262 10.3168 9.6987 10.4508 10.5424 11.2766L10.8728 11.6025L11.2032 11.2766C12.0424 10.4508 13.4085 10.3168 14.3282 11.0624C15.3773 11.915 15.4308 13.4463 14.4933 14.3749ZM10.1585 6.28557V0.571289H4.7612C4.14512 0.571289 3.60048 0.964146 3.40405 1.54897L0.89066 6.232C0.908517 6.25432 0.912981 6.26325 0.930838 6.28557H10.1585Z"
                            fill="#4F4F4F"
                          />
                        </svg>
                      </div>
                      <span>{t("top.products")}</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/solutions" onClick={this.props.clickOffMenu}>
                  <a>
                    <div className="nav-inner">
                      <div className="nav-icon">
                        <svg
                          width="26"
                          height="21"
                          viewBox="0 0 26 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.83712 0.285645H4.4715C3.68601 0.285645 2.99159 0.801269 2.74494 1.56689L0.824847 7.49658C0.794489 7.59033 0.794489 7.68799 0.779311 7.78564H9.83712V0.285645ZM18.7621 3.47705L18.1436 1.5708C17.8969 0.80127 17.2025 0.285645 16.417 0.285645H11.0514V6.43408C12.7173 4.57861 15.0889 3.41064 17.73 3.41064C18.0791 3.41064 18.4244 3.43408 18.7621 3.47705ZM8.62284 12.7856C8.62284 11.4536 8.89984 10.1841 9.38935 9.03564H0.72998V18.4106C0.72998 19.4458 1.54583 20.2856 2.55141 20.2856H12.2885C10.0686 18.5747 8.62284 15.856 8.62284 12.7856ZM17.73 5.28564C13.7077 5.28564 10.4443 8.64502 10.4443 12.7856C10.4443 16.9263 13.7077 20.2856 17.73 20.2856C21.7523 20.2856 25.0157 16.9263 25.0157 12.7856C25.0157 8.64502 21.7523 5.28564 17.73 5.28564ZM22.0597 11.0591L17.0887 16.1372C16.9255 16.3052 16.6599 16.3052 16.4967 16.1333L13.6242 13.1528C13.461 12.9849 13.4648 12.7114 13.628 12.5435L14.6146 11.5356C14.7777 11.3677 15.0434 11.3716 15.2065 11.5396L16.8041 13.1997L20.4925 9.43408C20.6556 9.26611 20.9213 9.27002 21.0844 9.43799L22.0635 10.4536C22.2228 10.6216 22.2228 10.895 22.0597 11.0591V11.0591Z"
                            fill="#4F4F4F"
                          />
                        </svg>
                      </div>
                      <span>{t("top.solutions")}</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/developers" onClick={this.props.clickOffMenu}>
                  <a>
                    <div className="nav-inner">
                      <div className="nav-icon">
                        <svg
                          width="27"
                          height="20"
                          viewBox="0 0 27 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.2081 19.9805L9.7372 19.2891C9.47796 19.2187 9.33214 18.957 9.40505 18.707L14.9341 0.338417C15.007 0.0883983 15.2784 -0.0522373 15.5377 0.0180805L18.0086 0.709539C18.2678 0.779857 18.4136 1.04159 18.3407 1.29161L12.8116 19.6602C12.7347 19.9102 12.4673 20.0547 12.2081 19.9805ZM7.59038 15.5974L9.3524 13.7847C9.53872 13.5933 9.52657 13.2886 9.31999 13.1128L5.65014 9.9993L9.31999 6.88579C9.52657 6.70999 9.54277 6.40528 9.3524 6.21386L7.59038 4.40122C7.4081 4.21371 7.10026 4.20199 6.90178 4.38169L1.06485 9.65552C0.858267 9.83913 0.858267 10.1556 1.06485 10.3392L6.90178 15.6169C7.10026 15.7966 7.4081 15.7888 7.59038 15.5974ZM20.844 15.6208L26.6809 10.3431C26.8875 10.1595 26.8875 9.84304 26.6809 9.65943L20.844 4.37778C20.6495 4.20199 20.3417 4.2098 20.1554 4.39732L18.3934 6.20995C18.207 6.40137 18.2192 6.70608 18.4258 6.88188L22.0956 9.9993L18.4258 13.1128C18.2192 13.2886 18.203 13.5933 18.3934 13.7847L20.1554 15.5974C20.3377 15.7888 20.6455 15.7966 20.844 15.6208Z"
                            fill="#4F4F4F"
                          />
                        </svg>
                      </div>
                      <span>{t("top.developers")}</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/community" onClick={this.props.clickOffMenu}>
                  <a>
                    <div className="nav-inner">
                      <div className="nav-icon">
                        <svg
                          width="30"
                          height="20"
                          viewBox="0 0 30 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.66455 8.28582C6.27555 8.28582 7.58122 7.0068 7.58122 5.42868C7.58122 3.85055 6.27555 2.57153 4.66455 2.57153C3.05355 2.57153 1.74788 3.85055 1.74788 5.42868C1.74788 7.0068 3.05355 8.28582 4.66455 8.28582ZM14.8729 9.71439C17.2892 9.71439 19.2479 7.79564 19.2479 5.42868V4.71439H10.4979V5.42868C10.4979 7.79564 12.4566 9.71439 14.8729 9.71439ZM26.5396 9.71439H23.6229C22.8213 9.71439 22.0962 10.0318 21.5689 10.5443C23.4041 11.5291 24.7071 13.3135 24.9928 15.4287H27.9979C28.8032 15.4287 29.4562 14.7889 29.4562 14.0001V12.5715C29.4562 10.9934 28.1506 9.71439 26.5396 9.71439ZM8.17686 10.5443C7.64958 10.0318 6.92451 9.71439 6.12288 9.71439H3.20622C1.59522 9.71439 0.289551 10.9934 0.289551 12.5715V14.0001C0.289551 14.7889 0.942611 15.4287 1.74788 15.4287H4.75296C5.03871 13.3135 6.34118 11.5296 8.17686 10.5443ZM25.0812 8.28582C26.6922 8.28582 27.9979 7.0068 27.9979 5.42868C27.9979 3.85055 26.6922 2.57153 25.0812 2.57153C23.4702 2.57153 22.1646 3.85055 22.1646 5.42868C22.1646 7.0068 23.4702 8.28582 25.0812 8.28582ZM18.3729 11.143H17.9942C17.0444 11.5876 15.994 11.8572 14.8729 11.8572C13.7518 11.8572 12.7018 11.5876 11.7516 11.143H11.3729C8.47354 11.143 6.12288 13.4456 6.12288 16.2858V17.5715C6.12288 18.755 7.10225 19.7144 8.31038 19.7144H21.4354C22.6435 19.7144 23.6229 18.755 23.6229 17.5715V16.2858C23.6229 13.4456 21.2722 11.143 18.3729 11.143Z"
                            fill="#4F4F4F"
                          />
                          <path
                            d="M17.1855 1.1194L19.373 0.0479736V3.6194H10.623V0.0479736L12.8105 1.1194L14.998 0.0479736L17.1855 1.1194Z"
                            fill="#F47E3E"
                          />
                        </svg>
                      </div>
                      <span>{t("top.community")}</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company" onClick={this.props.clickOffMenu}>
                  <a>
                    <div className="nav-inner">
                      <div className="nav-icon">
                        <svg
                          width="13"
                          height="21"
                          viewBox="0 0 13 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5514 19.1787H12.0157V1.36621C12.0157 0.848437 11.7278 0.428711 11.3728 0.428711H2.3728C2.01776 0.428711 1.72995 0.848437 1.72995 1.36621V19.1787H1.19423C1.01672 19.1787 0.872803 19.3886 0.872803 19.6475V20.4287H12.8728V19.6475C12.8728 19.3886 12.7289 19.1787 12.5514 19.1787ZM4.30137 3.39746C4.30137 3.13859 4.44529 2.92871 4.6228 2.92871H5.69423C5.87174 2.92871 6.01566 3.13859 6.01566 3.39746V4.95996C6.01566 5.21883 5.87174 5.42871 5.69423 5.42871H4.6228C4.44529 5.42871 4.30137 5.21883 4.30137 4.95996V3.39746ZM4.30137 7.14746C4.30137 6.88859 4.44529 6.67871 4.6228 6.67871H5.69423C5.87174 6.67871 6.01566 6.88859 6.01566 7.14746V8.70996C6.01566 8.96883 5.87174 9.17871 5.69423 9.17871H4.6228C4.44529 9.17871 4.30137 8.96883 4.30137 8.70996V7.14746ZM5.69423 12.9287H4.6228C4.44529 12.9287 4.30137 12.7188 4.30137 12.46V10.8975C4.30137 10.6386 4.44529 10.4287 4.6228 10.4287H5.69423C5.87174 10.4287 6.01566 10.6386 6.01566 10.8975V12.46C6.01566 12.7188 5.87174 12.9287 5.69423 12.9287ZM7.72995 19.1787H6.01566V15.8975C6.01566 15.6386 6.15958 15.4287 6.33709 15.4287H7.40852C7.58603 15.4287 7.72995 15.6386 7.72995 15.8975V19.1787ZM9.44423 12.46C9.44423 12.7188 9.30031 12.9287 9.1228 12.9287H8.05137C7.87387 12.9287 7.72995 12.7188 7.72995 12.46V10.8975C7.72995 10.6386 7.87387 10.4287 8.05137 10.4287H9.1228C9.30031 10.4287 9.44423 10.6386 9.44423 10.8975V12.46ZM9.44423 8.70996C9.44423 8.96883 9.30031 9.17871 9.1228 9.17871H8.05137C7.87387 9.17871 7.72995 8.96883 7.72995 8.70996V7.14746C7.72995 6.88859 7.87387 6.67871 8.05137 6.67871H9.1228C9.30031 6.67871 9.44423 6.88859 9.44423 7.14746V8.70996ZM9.44423 4.95996C9.44423 5.21883 9.30031 5.42871 9.1228 5.42871H8.05137C7.87387 5.42871 7.72995 5.21883 7.72995 4.95996V3.39746C7.72995 3.13859 7.87387 2.92871 8.05137 2.92871H9.1228C9.30031 2.92871 9.44423 3.13859 9.44423 3.39746V4.95996Z"
                            fill="#4F4F4F"
                          />
                        </svg>
                      </div>
                      <span>{t("top.company")}</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="social-nav">
            <li>
              <a href="" target="_blank" title="Telegram">
                <FontAwesomeIcon fixedWidth icon={["fab", "telegram-plane"]} />
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
                <FontAwesomeIcon fixedWidth icon={["fab", "reddit-alien"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

MobileNav.propTypes = {
  t: PropTypes.func.isRequired
};
MobileNavMenu.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces("navigation")(MobileNav);
