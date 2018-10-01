import * as React from "react";
import './ComponentPage.scss';
//import { Link } from 'react-router-dom';
import { Highlight } from '@uifabric/example-app-base';
import { Pivot, PivotItem, PivotLinkSize, IPivotStyles, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import './HomePage.scss';
import NodejsLogoJPG from '../assets/dev-logos/nodejs_logo.svg';
import GithubLogoPNG from '../assets/dev-logos/github-mark.png';
import GitsvnLogoPNG from '../assets/dev-logos/Git-svn-logo.png';
import VSCodelogoSVG from '../assets/dev-logos/vscode-logo.svg';


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
export class DeveloperGetStarted extends React.Component<IGettingStartedProps, {}> {

    public state = { selectedKey: 'gettingStartedReactPage' };

    constructor(props: IGettingStartedProps) {
        super(props);
    }


    public render(): JSX.Element {
        let { componentName } = this.props;
        let componentPageTab;
        if (this.state.selectedKey === 'gettingStartedReactPage') {
            componentPageTab = this._getReactTab();
        } else if (this.state.selectedKey === 'gettingStartedCorePage') {
            componentPageTab = this._getCoreTab();
        } else {
            componentPageTab = this._getCoreTab();
        }

        return (
            <div className="PageContent">
                <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b></div>
                <div className="PageContent-spacing">
                    <div className="PageHeader"><h1>Developer</h1></div>

                    <div className={componentName}>
                        {this._navigationLinks()}
                        {componentPageTab}
                    </div>
                </div>
            </div>
        );
    };
    private _handleLinkClick = (item: PivotItem): void => {
        this.setState({
            selectedKey: item.props.itemKey
        });
    };

    private _getTabId = (itemKey: string): string => {
        return `componentPagePivot_${itemKey}`;
    };

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
            <div>
                {/* ReactJS Intro w/ code */}
                <div className="Intro">
                    <p>
                        The Office UI Fabric Library provides front-end develoers and engineers with a collection of reusable
                         components in ReactJS to build applications. Adopting the library enables developers to use consistent markup,
                          styles, and behavior within their applications.
              <p></p>
                        To get started, we recommend installing the following tools:


                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className="Code-list-col1"><img src={NodejsLogoJPG} alt="Illustration of NodeJS logo." width="54" />
                                        <br /> <a className="global-links" href="https://nodejs.org/en/" target="_blank">Node.js</a> <br/>(NOTE: please install the
                    LTS version as we can't validate current will always work)</td>
                                    <td className="type-col-2">
                                        <img src={VSCodelogoSVG} alt="Illustration of VSCode logo." width="54" />
                                        <br />
                                        <a className="global-links" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></td>
                                </tr>
                                <tr>
                                    <td className="Code-list-col1"><img src={GitsvnLogoPNG} alt="Illustration of GIT SVN logo." width="54" />
                                        <br />
                                        <a className="global-links" href="https://git-scm.com/" target="_blank">Git Version Control</a>
                                    </td>
                                    <td className="Code-list-spacing">
                                        <img src={GithubLogoPNG} alt="Illustration of NodeJS logo." width="54" />
                                        <br />
                                        <a className="global-links" href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Configuring-your-environment" target="_blank">
                                            Office UI Fabric GitHub docs</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <div className="med-spacing"></div>
                    <p></p>
                    <p>To install the Fabric React NPM package in your project, from the root of your project, run:</p>
                    <p></p>
                    <p className="ComponentPage-code">
                        <Highlight className="bash">npm install --save office-ui-fabric-react</Highlight>
                    </p>
                    <p></p>
                </div>
                <div className="Intro">
                    <div className="SubHeader">Component Usage</div>
                    <p><a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Sample-App" target="_blank">Here is
            a step by step tutorial</a> on how to build a simple React app with an Office UI Fabric React component.</p>
                    <p></p>
                    <p>The library includes commonjs entry points under the lib folder. To use a control (like DefaultButton),
              import it along with React and use it in your render method. <b>Note: </b>Wrapping your application in the
              Fabric component is required to support RTL, keyboard focus, and other features.</p>
                    <p></p>
                    <p className="ComponentPage-code">
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
                    </p>
                </div>
                <p></p>
                <div className="SubHeader">Icon Usage</div>
                <div className="Content">
                    <p>By default, the Fabric icons are not added to your bundle, in order to save bytes for scenarios
                      where you don't care about icons, or you only care about a subset.
                To make them available, you may initialize them as such:</p>

                    <p className="ComponentPage-code">
                        <Highlight className="javascript">
                            {`import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);`}</Highlight>
                    </p>
                </div>
            </div>
        );
    }
    private _getCoreTab(): JSX.Element | undefined {
        return (
            <div>
                <div className="Intro">
                    <p>Fabric Core contains the core styles used across all aspects of Fabric including icons, type, fonts,
                    colors, the grid, etc. This is a separate project from Office UI Fabric React,
            which contains the React components.</p>
                    <p className="ComponentPage-inline">Add the following line to the <code>&lt;head&gt;</code> of your webpage:</p>
                    <p></p>
                    <p className="ComponentPage-code">
                        <Highlight className="html">
                            {`<link rel="stylesheet" href="https://static2.sharepointonline.com/files/
fabric/office-ui-fabric-core/9.6.0/css/fabric.min.css">
`}</Highlight>
                    </p>
                </div>
                <div className="SubHeader">Other ways to get Fabric Core</div>
                <div className="Content">
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
                    <p></p>
                    <div className="SubHeader">Fabric Core Usage</div>
                    <p>Reference core Fabric styles. Add the <code>ms-Fabric</code> class to a containing element, such as <code>&lt;body&gt;</code>, to set the font-family for all Fabric typography classes used within that element.</p>
                    <p className="ComponentPage-code">
                        <Highlight>{`<body class="ms-Fabric">
  <span class="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
</body>`}</Highlight></p>
                </div>
            </div>
        );
    }
}
export default DeveloperGetStarted;