import * as React from 'react';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { Pivot, PivotItem, PivotLinkSize, IPivotStyles, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { Highlight } from '@uifabric/example-app-base';
import './HomePage.scss'

export interface IGettingStartedPageSection {
  title: string;
  section: JSX.Element;
}

export interface IGettingStartedProps {
  /** Component Name **/
  componentName: string;
  /** Component usage **/
  className: string;
}
export class DeveloperHomePage extends React.Component<IGettingStartedProps, {}> {

  public state = { selectedKey: 'gettingStartedReactPage' };

  constructor(props: IGettingStartedProps) {
    super(props);
  }

  public render(): JSX.Element {
    let { componentName, className } = this.props;
    let componentPageTab;
    if (this.state.selectedKey === 'gettingStartedReactPage') {
      componentPageTab = this._getReactTab();
    } else if (this.state.selectedKey === 'gettingStartedCorePage') {
      componentPageTab = this._getCoreTab();
    } else {
      componentPageTab = this._getCoreTab();
    }
    return (
      <div className={css('ComponentPage', className)}>
        <div className={componentName}>
          {this._pageHeader()}
          <div className="ComponentPage-body">
            {componentPageTab}
          </div>
        </div>
      </div>
    );
  }

  private _handleLinkClick = (item: PivotItem): void => {
    this.setState({
      selectedKey: item.props.itemKey
    });
  };

  private _getTabId = (itemKey: string): string => {
    return `componentPagePivot_${itemKey}`;
  };

  private _pageHeader(): JSX.Element | undefined {
    return (
      <div className="ComponentPage-header">
        <h3 className="ComponentPage-title-subheader">Getting Started</h3>
        <h1 className="ComponentPage-title">Developers</h1>
        {this._navigationLinks()}
      </div>
    );
  }

  private _navigationLinks(): JSX.Element {
    const pivotStyles: IPivotStyles = {
      root: [
        {

        }
      ],
      link: [
        {

        }
      ],
      linkContent: [
        {

        }
      ],
      linkIsSelected: [
        {

        }
      ],
      text: [
        {
          color: 'white'
        }
      ],
      count: [
        {

        }
      ],
      icon: [
        {

        }
      ]
    };
    return (
      <Pivot
        className="ComponentPage-pivot"
        styles={pivotStyles}
        linkFormat={PivotLinkFormat.links}
        linkSize={PivotLinkSize.large}
        selectedKey={this.state.selectedKey}
        onLinkClick={this._handleLinkClick}
        headersOnly={true}
        getTabId={this._getTabId}
      >
        <PivotItem className="ComponentPage-pivot" headerText="Fabric ReactJS" itemKey="gettingStartedReactPage" />
        <PivotItem className="ComponentPage-pivot" headerText="Fabric Core" itemKey="gettingStartedCorePage" />
      </Pivot>
    );
  }

  private _getReactTab(): JSX.Element | undefined {
    return (
      <div className="ComponentPage-overviewSection">
        <div className="ComponentPage-overviewSectionHeader">
          <h2 className="ComponentPage-subHeading" id="Overview">
            Installation
            </h2>
        </div>
        <div className="ComponentPage-overviewSectionContent">
          <div className="ComponentPage-overview">
          <h3>Getting started with Fabric ReactJS</h3>
            The <a> Office UI Fabric</a> library provides front-end developers and engineers
            with a collection of reusable components in <a>ReactJS</a> to build applications.
            Adopting the library enables developers to use consistent markup, styles,
            and behavior within their applications.
          <p>To get started, we highly recommend having the following tools installed:
            <ul className="ComponentPage-list">
                <li><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></li>
                <li><a href="https://nodejs.org/en/" target="_blank">Node.js</a> (NOTE: please install the LTS version as we can't validate current will always work)</li>
                <li><a href="https://git-scm.com/" target="_blank">Git Version Control</a></li>
              </ul>
              For further instructions on configuring your environment see the "Configuring your Environment"
              section of the <a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Configuring-your-environment" target="_blank">
                Office UI Fabric GitHub docs</a>.
            </p>
            To install the Fabric React NPM package in your project, from the root of your project, run:
          <p></p>
            <div className="ComponentPage-code">
              <Highlight className="bash">npm install --save office-ui-fabric-react</Highlight>
            </div>
            <p></p>
          </div>
        </div>
        <div className="ComponentPage-overviewSectionHeader">
          <h2 className="ComponentPage-subHeading" id="Overview">
            Usage
            </h2>
        </div>
        <div className="ComponentPage-overviewSectionContent">
          <div className="ComponentPage-overview">
            <h3>Component Usage</h3>
            <a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Sample-App" target="_blank">Here is
            a step by step tutorial</a> on how to build a simple React app with an Office UI Fabric React component.
            <p></p>
            <p>The library includes commonjs entry points under the lib folder. To use a control (like DefaultButton),
              import it along with React and use it in your render method. <b>Note: </b>Wrapping your application in the
              Fabric component is required to support RTL, keyboard focus, and other features.</p>
            <p></p>
            <div className="ComponentPage-code">
              <Highlight className="javascript">
                {`import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const MyPage = () => (
  <Fabric>
    <DefaultButton>
      I am a button.
    </DefaultButton>
  </Fabric>
);

ReactDOM.render(<MyPage />, document.body.firstChild);`}
              </Highlight>
            </div>
            <p></p>
            <h3>Icon Usage</h3>
            <p>By default, the Fabric icons are not added to your bundle, in order to save bytes for scenarios
              where you don't care about icons, or you only care about a subset.
                To make them available, you may initialize them as such:</p>
            <div className="ComponentPage-code">
              <Highlight className="javascript">
                {`import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);`}</Highlight>
            </div>
          </div>
        </div>
      </div>
    );

  }

  private _getCoreTab(): JSX.Element | undefined {
    return (
      <div className="ComponentPage-overviewSection">
        <div className="ComponentPage-overviewSectionHeader">
          <h2 className="ComponentPage-subHeading" id="Usage">
            Installation
            </h2>
        </div>
        <div className="ComponentPage-overviewSectionContent">
          <div className="ComponentPage-overview">
          <h3>Getting started with Fabric Core</h3>
            Fabric Core contains the core styles used across all aspects of Fabric including icons, type, fonts,
            colors, the grid, etc. This is a separate project from Office UI Fabric React,
            which contains the React components.
          <p></p>
            <p className="ComponentPage-inline">Add the following line to the <code>&lt;head&gt;</code> of your webpage:</p>
            <p></p>
            <div className="ComponentPage-code">
              <Highlight className="html">
                {`<link rel="stylesheet" href="https://static2.sharepointonline.com/files/
fabric/office-ui-fabric-core/9.6.0/css/fabric.min.css">
`}</Highlight>
</div>
            <p></p>
            <h3>Other ways to get Fabric Core</h3>
          <p>
            You can{' '}
            <a className="" href="https://github.com/OfficeDev/office-ui-fabric-core/releases">
              download a copy of Fabric for your project
            </a>{' '}
            or{' '}
            <a
              className=""
              href="https://github.com/OfficeDev/office-ui-fabric-react/wiki#using-fabric-react"
            >
              add it through a package manager
            </a>. You can also{' '}
            <a
              className=""
              href="https://github.com/OfficeDev/office-ui-fabric-react/wiki#building-the-repo"
            >
              build your own copy from the source code
            </a>.
          </p>
          </div>
        </div>
        <div className="ComponentPage-overviewSectionHeader">
          <h2 className="ComponentPage-subHeading" id="Usage">
            Usage
            </h2>
        </div>
        <div className="ComponentPage-overviewSectionContent">
          <div className="ComponentPage-overview">
          <p>Reference core Fabric styles. Add the <code>ms-Fabric</code> class to a containing element, such as <code>&lt;body&gt;</code>, to set the font-family for all Fabric typography classes used within that element.</p>
          <div className="ComponentPage-code">
              <Highlight>{`<body class="ms-Fabric">
  <span class="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
</body>`}</Highlight>
</div>
          </div>
          </div>
      </div>
    );
  }
}
export default DeveloperHomePage;
