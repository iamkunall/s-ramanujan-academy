/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 0.5rem 1.5rem;
  font-family: ${props => props.theme.secondaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 9rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
      color: ${props => props.theme.mainBrandColor};
      background-color: transparent !important;
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .icon {
    color: #4fa8b8;
    font-size: 2rem;
    margin-right: 0.75rem;
    transition: color 0.5s;
    :hover {
      color: #000000;
    }
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/logo.jpg" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-start">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/Courses" className="navbar-item">
                  Courses
                </Link>
                <Link to="/news" className="navbar-item">
                  Admission
                </Link>
                <Link to="/contact" className="navbar-item">
                  About us
                </Link>
                <Link to="/contact" className="navbar-item">
                  Blogs
                </Link>
                <Link to="/contact" className="navbar-item">
                  Contact us
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="icon ">
                    <i className="fab fa-facebook-square" />
                  </div>
                  <div className="icon">
                    <i className="fab fa-twitter-square" />
                  </div>
                  <div className="icon">
                    <i className="fab fa-linkedin" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}