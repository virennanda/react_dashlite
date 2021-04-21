import React from "react";

const Navbar = () => {
  return (
    <div className="nk-header nk-header-fluid is-theme">
      <div className="container-xl wide-xl">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger mr-sm-2 d-lg-none">
            <a
              href="/"
              className="nk-nav-toggle nk-quick-nav-icon"
              data-target="headerNav"
            >
              <em className="icon ni ni-menu"></em>
            </a>
          </div>
          <div className="nk-header-brand">
            <a href="html/index.html" className="logo-link">
              <img
                className="logo-light logo-img"
                src="./images/logo.png"
                srcset="./images/logo2x.png 2x"
                alt="logo"
              />
              <img
                className="logo-dark logo-img"
                src="./images/logo-dark.png"
                srcset="./images/logo-dark2x.png 2x"
                alt="logo-dark"
              />
            </a>
          </div>
          <div className="nk-header-menu" data-content="headerNav">
            <div className="nk-header-mobile">
              <div className="nk-header-brand">
                <a href="html/index.html" className="logo-link">
                  <img
                    className="logo-light logo-img"
                    src="./images/logo.png"
                    srcset="./images/logo2x.png 2x"
                    alt="logo"
                  />
                  <img
                    className="logo-dark logo-img"
                    src="./images/logo-dark.png"
                    srcset="./images/logo-dark2x.png 2x"
                    alt="logo-dark"
                  />
                </a>
              </div>
              <div className="nk-menu-trigger mr-n2">
                <a
                  href="/"
                  className="nk-nav-toggle nk-quick-nav-icon"
                  data-target="headerNav"
                >
                  <em className="icon ni ni-arrow-left"></em>
                </a>
              </div>
            </div>
            <ul className="nk-menu nk-menu-main ui-s2">
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-text">Dashboards</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a href="html/index.html" className="nk-menu-link">
                      <span className="nk-menu-text">Default Dashboard</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/index-sales.html" className="nk-menu-link">
                      <span className="nk-menu-text">Sales Dashboard</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/index-crypto.html" className="nk-menu-link">
                      <span className="nk-menu-text">Crypto Dashboard</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/index-analytics.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Analytics Dashboard</span>
                    </a>
                  </li>
                  <li className="nk-menu-heading">
                    <h6 className="overline-title text-primary">
                      Use-Case Concept
                    </h6>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/invest/index.html"
                      className="nk-menu-link"
                      target="_blank"
                    >
                      <span className="nk-menu-text">Investment Panel</span>
                      <span className="nk-menu-badge badge-danger">HOT</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-text">Applications</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a href="html/apps-messages.html" className="nk-menu-link">
                      <span className="nk-menu-text">Messages</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/apps-inbox.html" className="nk-menu-link">
                      <span className="nk-menu-text">Inbox / Mail</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/apps-file-manager.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">File Manager</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/apps-chats.html" className="nk-menu-link">
                      <span className="nk-menu-text">Chats / Messenger</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/apps-calendar.html" className="nk-menu-link">
                      <span className="nk-menu-text">Calendar</span>
                      <span className="nk-menu-badge badge-warning">New</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/apps-kanban.html" className="nk-menu-link">
                      <span className="nk-menu-text">Kanban Board</span>
                      <span className="nk-menu-badge badge-warning">New</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-text">Pages</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-tile-thumb"></em>
                      </span>
                      <span className="nk-menu-text">Projects</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/project-card.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Project Cards</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/project-list.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Project List</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">User Manage</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/user-list-regular.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            User List - Regular
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/user-list-compact.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            User List - Compact
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/user-details-regular.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            User Details - Regular
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/user-profile-regular.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            User Profile - Regular
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a href="html/user-card.html" className="nk-menu-link">
                          <span className="nk-menu-text">
                            User Contact - Card
                          </span>{" "}
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">AML / KYCs</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/kyc-list-regular.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            KYC List - Regular
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/kyc-details-regular.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            KYC Details - Regular
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Transactions</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/transaction-basic.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Tranx List - Basic
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/transaction-crypto.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Tranx List - Crypto
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-file-docs"></em>
                      </span>
                      <span className="nk-menu-text">Invoice</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/invoice-list.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Invoice List</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/invoice-details.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Invoice Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/pages/regular-v1.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Regular Page - v1</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/pages/regular-v2.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Regular Page - v2</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/pages/faqs.html" className="nk-menu-link">
                      <span className="nk-menu-text">Faqs / Help</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-text">Misc</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Auth Pages</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/auths/auth-login.html"
                          className="nk-menu-link"
                          target="_blank"
                        >
                          <span className="nk-menu-text">Login / Signin</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/auths/auth-register.html"
                          className="nk-menu-link"
                          target="_blank"
                        >
                          <span className="nk-menu-text">
                            Register / Signup
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/auths/auth-reset.html"
                          className="nk-menu-link"
                          target="_blank"
                        >
                          <span className="nk-menu-text">Forgot Password</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/auths/auth-success.html"
                          className="nk-menu-link"
                          target="_blank"
                        >
                          <span className="nk-menu-text">
                            Success / Confirm
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item has-sub">
                        <a href="/" className="nk-menu-link nk-menu-toggle">
                          <span className="nk-menu-text">
                            Classic Version - v2
                          </span>
                        </a>
                        <ul className="nk-menu-sub">
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-login-v2.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Login / Signin
                              </span>
                            </a>
                          </li>
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-register-v2.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Register / Signup
                              </span>
                            </a>
                          </li>
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-reset-v2.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Forgot Password
                              </span>
                            </a>
                          </li>
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-success-v2.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Success / Confirm
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nk-menu-item has-sub">
                        <a href="/" className="nk-menu-link nk-menu-toggle">
                          <span className="nk-menu-text">
                            No Slider Version - v3
                          </span>
                        </a>
                        <ul className="nk-menu-sub">
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-login-v3.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Login / Signin
                              </span>
                            </a>
                          </li>
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-register-v3.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Register / Signup
                              </span>
                            </a>
                          </li>
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-reset-v3.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Forgot Password
                              </span>
                            </a>
                          </li>
                          <li className="nk-menu-item">
                            <a
                              href="html/pages/auths/auth-success-v3.html"
                              className="nk-menu-link"
                              target="_blank"
                            >
                              <span className="nk-menu-text">
                                Success / Confirm
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Error Pages</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/errors/404-classNameic.html"
                          target="_blank"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">404 Classic</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/errors/504-classNameic.html"
                          target="_blank"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">504 Classic</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/errors/404-s1.html"
                          target="_blank"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">404 Modern</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pages/errors/504-s1.html"
                          target="_blank"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">504 Modern</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item">
                    <a href="html/_blank.html" className="nk-menu-link">
                      <span className="nk-menu-text">Blank / Startup</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/pages/terms-policy.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Terms / Policy</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-text">Components</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Ui Elements</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/alerts.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Alerts</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/accordions.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Accordions</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/avatar.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Avatar</span>
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/badges.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Badges</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/buttons.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Buttons</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/buttons-group.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Button Group</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/breadcrumb.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Breadcrumb</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/cards.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Cards</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/carousel.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Carousel</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/list-dropdown.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">List Dropdown</span>
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/modals.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Modals</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/pagination.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Pagination</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/popover.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Popovers</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/progress.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Progress</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/spinner.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Spinner</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/tabs.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Tabs</span>{" "}
                          <span className="nk-menu-badge badge-warning">
                            Updated
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/toast.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Toasts</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/tooltip.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Tooltip</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/typography.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Typography</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Utilities</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-border.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Border</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-colors.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Colors</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-display.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Display</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-embeded.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Embeded</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-flex.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Flex</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-text.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Text</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-sizing.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Sizing</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-spacing.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Spacing</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/elements/util-others.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Others</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Crafted Icons</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/components/misc/svg-icons.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            SVG Icon - Exclusive
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/misc/nioicon.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Nioicon - HandCrafted
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/components/misc/icons.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Icon Libraries</span>
                      <span className="nk-menu-badge badge-warning">New</span>
                    </a>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Tables</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/components/tables/table-basic.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Basic Tables</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/tables/table-special.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Special Tables</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/tables/table-datatable.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">DataTables</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Forms</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-elements.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Form Elements</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-upload.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Form Upload</span>{" "}
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/datetime-picker.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Date &amp; Time Picker
                          </span>{" "}
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/number-spinner.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Number Spinner</span>{" "}
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-layouts.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Form Layouts</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-validation.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Form Validation</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-wizard.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Wizard Basic</span>
                        </a>
                      </li>
                      <li className="nk-menu-heading">
                        <h6 className="overline-title text-primary">
                          Rich Editor
                        </h6>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-summernote.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Summernote</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-quill.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Quill</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/forms/form-tinymce.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Tinymce</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Charts</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/components/charts/chartjs.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Chart JS</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/charts/knob.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Knob JS</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="/" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Miscellaneous</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/components/misc/toastr.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Toastr</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/misc/sweet-alert.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Sweet Alert</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/misc/js-tree.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">jsTree</span>
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/components/misc/dual-listbox.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Dual Listbox</span>
                          <span className="nk-menu-badge badge-warning">
                            New
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/email-templates.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Email Template</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown notification-dropdown">
                <a
                  href="/"
                  className="dropdown-toggle nk-quick-nav-icon"
                  data-toggle="dropdown"
                >
                  <div className="icon-status icon-status-info">
                    <em className="icon ni ni-bell"></em>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                  <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">
                      Notifications
                    </span>
                    <a href="/">Mark All as Read</a>
                  </div>
                  <div className="dropdown-body">
                    <div className="nk-notification">
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-foot center">
                    <a href="/">View All</a>
                  </div>
                </div>
              </li>
              <li className="dropdown user-dropdown order-sm-first">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <div className="user-toggle">
                    <div className="user-avatar sm">
                      <em className="icon ni ni-user-alt"></em>
                    </div>
                    <div className="user-info d-none d-xl-block">
                      <div className="user-status">Administrator</div>
                      <div className="user-name dropdown-indicator">
                        Abu Bin Ishityak
                      </div>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1 is-light">
                  <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                      <div className="user-avatar">
                        <span>AB</span>
                      </div>
                      <div className="user-info">
                        <span className="lead-text">Abu Bin Ishtiyak</span>
                        <span className="sub-text">info@softnio.com</span>
                      </div>
                      <div className="user-action">
                        <a
                          className="btn btn-icon mr-n2"
                          href="html/invest/profile-setting.html"
                        >
                          <em className="icon ni ni-setting"></em>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-inner user-account-info">
                    <h6 className="overline-title-alt">Account Balance</h6>
                    <div className="user-balance">
                      1,494.23{" "}
                      <small className="currency currency-usd">USD</small>
                    </div>
                    <div className="user-balance-sub">
                      Locked{" "}
                      <span>
                        15,495.39{" "}
                        <span className="currency currency-usd">USD</span>
                      </span>
                    </div>
                    <a href="/" className="link">
                      <span>Withdraw Balance</span>{" "}
                      <em className="icon ni ni-wallet-out"></em>
                    </a>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <a href="html/invest/profile.html">
                          <em className="icon ni ni-user-alt"></em>
                          <span>View Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="html/invest/profile-setting.html">
                          <em className="icon ni ni-setting-alt"></em>
                          <span>Account Setting</span>
                        </a>
                      </li>
                      <li>
                        <a href="html/invest/profile-activity.html">
                          <em className="icon ni ni-activity-alt"></em>
                          <span>Login Activity</span>
                        </a>
                      </li>
                      <li>
                        <a className="dark-mode-switch" href="/">
                          <em className="icon ni ni-moon"></em>
                          <span>Dark Mode</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <a href="/">
                          <em className="icon ni ni-signout"></em>
                          <span>Sign out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
