export default `
html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

body {
  font-family: 'Segoe UI';
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 1rem;
}

h1 {
  line-height: 2rem;
  display: inline-block;
}

h2 {
  line-height: 1.5rem;
  display: inline-block;
}

.app {
  display: grid;
  grid-template-columns: 1fr 4fr;
}

@media (max-width: 700px) {
  .app {
    grid-template-columns: unset;
  }
}
.flex-nav {
  display: flex;
  background: #fff;
}

.container {
  height: 500px;
  background: #ddd;
}

.container.relative {
  overflow-y: auto;
}
.nav-links {
  font-family: Segoe UI;
  font-size: 15px;
  list-style-type: none;
  line-height: 19px;
  text-decoration: none;
  padding:0;
}
.nav-link, .sub-link {
  padding: 18px 0 0 5px;
  list-style-type: none;
}
.nav-link a, sub-link a {
  text-decoration: none;
  color:#274652;
}
.nav-link .active {
  text-decoration: none;
  color: #11CE0D;
  font-weight: 600;
  display: flex;
  border-left: 4px solid #11CE0D;
  padding: 4px 0 4px 45px;

}
.sub-link .active {
  text-decoration: none;
  color: #11CE0D;
  font-weight: 600;
  display: flex;
  border-left: 4px solid #11CE0D;
  padding: 4px 0 4px 60px;

}
.sub-list {
  padding: 4px 0 4px 65px;
}

.nav-list {
  padding: 4px 0 4px 50px;;
}
.cseo-icon {
  margin: 35px 30px 0px 30px;
}
.nav-header {
  font-size:11px;
  color: #274652;
  padding: 0 0 0 50px;
}
ul .nav-sublist {
  padding:0 0 0 0px;
}
.side-nav {
  padding: 0px 280px 0 0px;
}
.side-nav-sticky-scrolling {
  position: fixed;
  height: 100%;
  // overflow-y: auto;
  width: 280px;
}
`;
