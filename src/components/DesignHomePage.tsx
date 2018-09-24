import * as React from 'react';
import { css } from 'office-ui-fabric-react/lib/Utilities';
//import { Pivot, PivotItem, PivotLinkSize, IPivotStyles, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
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
export class DesignHomePage extends React.Component<IGettingStartedProps, {}> {

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

//   private _handleLinkClick = (item: PivotItem): void => {
//     this.setState({
//       selectedKey: item.props.itemKey
//     });
//   };

//   private _getTabId = (itemKey: string): string => {
//     return `componentPagePivot_${itemKey}`;
//   };

  private _pageHeader(): JSX.Element | undefined {
    return (
      <div className="ComponentPage-header">
        <h3 className="ComponentPage-title-subheader">Getting Started</h3>
        <h1 className="ComponentPage-title">Designers</h1>
        {/* {this._navigationLinks()} */}
      </div>
    );
  }


  private _getReactTab(): JSX.Element | undefined {
    return (
      <div className="ComponentPage-overviewSection">
        <div className="ComponentPage-overviewSectionContent">
          <div className="ComponentPage-overview">
          <p><div className="getting-started-instructions">1. Download and sign up for Figma</div>
           You can use any browser to view Figma files. Use Firefox or Chrome for the best experience. Sign up using your "@Microsoft.com" account. <br/><br/>Download the Desktop app (available on Windows and Mac). 
           This is recommended since the fonts installed on your computer will appear in the font list. You will need to install <a href="https://help.figma.com/text/using-local-fonts" target="_blank">Font Helper</a> if using the web version of Figma. 
           </p>
            <img
                    src={
                      'https://drive.google.com/uc?id=1ETplO3ugpPZ-Md0BG_P0g9sloUdvlhP0'
                    }
                    alt="Figma illustration showing sign up page." width="600" height="400" 
                  />
          <p></p>
          <p><div className="getting-started-instructions">2. Open the SSE Design Toolkit</div>
           Once you login, you will see that you're apart of the Microsoft Organization. Click "View all teams" 
           and then "Join team" for <b>SSE Design</b>.</p>
            <img className="image-space"
                    src={
                      'https://drive.google.com/uc?id=1bZJO7mdRgyj9GWBFYQYukUQKBJoJIz_9'
                    }
                    alt="Illustration of Microsoft Organization in Figma."
                    width="200" height="200"
                  />
                  <img
                    src={
                      'https://drive.google.com/uc?id=1d3HXJFrH8gGaFQZ8D73AiDV-CTEZrVzm'
                    }
                    alt="IIllustration of SSE Design channel in Figma."
                    width="400" height="300"
                  />
            <p><div className="getting-started-instructions">3. Use the SSE Design Toolkit</div>
           Collaborate with team members, track changes using versioning history, and access design files from anywhere. <a href ="#">Here</a> is a more detailed guide to get started using Figma.
           Use the official <a href='https://www.figma.com' target="_blank">Figma</a> site and other resources offer many tutorials for further learning.</p>
            <img
                    src={
                      'https://drive.google.com/uc?id=1IZ93jCQsLWha2_VinpRN_pngIxI0_iFt'
                    }
                    alt="Illustration of more detailed view of SSE Design channel in Figma."
                    width="700" height="550"
                  />
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
export default DesignHomePage;
