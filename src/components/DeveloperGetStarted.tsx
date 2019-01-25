import * as React from "react";
import './ComponentPage.scss';
import { Pivot, PivotItem, PivotLinkSize, IPivotStyles, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import './HomePage.scss';
import { Link } from 'react-router-dom';
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
        } else if (this.state.selectedKey === 'gettingStartedOthersPage') {
            componentPageTab = this._getOtherFrameworksTab();
        }
        else {
            componentPageTab = this._getCoreTab();
        }

        return (
            <div className="PageContent">
                <div className="GlobalHeader"><div className="Page-cseo-header">CSEO </div><b>Coherence</b>
            <span className="contact-quicklinks"><Link to="/DesignGetStarted"  >For Designers</Link></span>
            <span className="contact-quicklinks"><Link to="/DeveloperGetStarted"  >For Developers</Link></span>
            </div>
                <div className="PageContent-spacing">
                    <div className="PageHeader"><h1>Get started: Developers</h1></div>

                    <div className={componentName}>
                    <div className="Intro">
                        <p><a href="https://developer.microsoft.com/en-us/fabric#/get-started" target="_blank">Office UI Fabric</a> is a front-end framework that provides developers and engineers with a collection of reusable
                         styles and components to build applications. Adopting the library enables developers to use consistent markup,
                          styles, and behavior within their applications. Fabric comes in many flavors so you can choose the one that works for you. Explore the tabs below to learn more about each option.</p>
                       
                        <div className="med-spacing"></div>
                       
                    </div>
                        <div className="med-spacing"></div>
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
                    selectors: {
                        ':before': {
                            borderBottom: '2px solid #0078D7'
                        }
                    }
                }
            ],
            text: [
                {
                    color: '#152935'
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
                <PivotItem className="ComponentPage-pivot" headerText="Other Frameworks" itemKey="gettingStartedOthersPage" />
            </Pivot>
        );
    }

    private _getReactTab(): JSX.Element | undefined {
        return (
            <div>
                {/* ReactJS Intro w/ code */}
                    <div className="med-spacing"></div>
                    <div className="med-spacing"></div>
                    <div className="Intro">
                    <p>The <a href="https://github.com/officeDev/office-ui-fabric-react/" target="_blank">Office UI Fabric ReactJS Library</a> provides front-end developers and engineers with a collection of reusable components in ReactJS to build applications.
                    These Fabric React components are used by many product teams throughout Microsoft. </p>
                    </div>
                    <div className="med-spacing"></div>
                        <div className="SubHeader">Installation</div>

                        <p>To get started, we recommend installing the following tools:</p>


                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className="Code-list-col1"><img src={NodejsLogoJPG} alt="Illustration of NodeJS logo." width="54" />
                                    <div className="sm-spacing"></div>
                                       <p><a className="global-links" href="https://nodejs.org/en/" target="_blank">Node.js</a> 
                                       (NOTE: please install the
                    LTS version as we can't validate current will always work)</p></td>
                                    <td className="type-col-2">
                                        <img src={VSCodelogoSVG} alt="Illustration of VSCode logo." width="54" />
                                        <p className="sm-spacing"></p>
                                       
                                        <p><a className="global-links" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></p></td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td className="Code-list-col1"><img src={GitsvnLogoPNG} alt="Illustration of GIT SVN logo." width="54" />
                                    <p className="sm-spacing"></p>
                                        <a className="global-links" href="https://git-scm.com/" target="_blank">Git Version Control</a>
                                    </td>
                                    <td className="Code-list-spacing">
                                        <img src={GithubLogoPNG} alt="Illustration of NodeJS logo." width="54" />
                                        <p className="sm-spacing"></p>
                                        <a className="global-links" href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Configuring-your-environment" target="_blank">
                                            Office UI Fabric GitHub docs</a></td>
                                </tr>
                            </tbody>
                        </table>
                 
                    <div className="med-spacing"></div>
                    

                <div className="Intro">
                <p>The <a href="https://developer.microsoft.com/en-us/fabric#/get-started" target="_blank">Office UI Fabric ReactJS Library</a> provides front-end developers and engineers with a collection of reusable
                         components in ReactJS to build applications. Adopting the library enables developers to use consistent markup,
                          styles, and behavior within their applications. </p>
                <p>To install the Fabric React NPM package in your project, from the root of your project, run:</p>
                   <div className="code-snippet">
                    <pre><code className='bash'>{`npm install --save office-ui-fabric-react`}</code></pre>
                    </div>
                    <div className="med-spacing"></div>
                    <div className="SubHeader">Component Usage</div>
                    <p><a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Sample-App" target="_blank">Here is
            a step by step tutorial</a> on how to build a simple React app with an Office UI Fabric React component.</p>
                    <p></p>
                    <p>The library includes commonjs entry points under the lib folder. To use a control (like DefaultButton),
              import it along with React and use it in your render method. <b>Note: </b>Wrapping your application in the
              Fabric component is required to support RTL, keyboard focus, and other features.</p>
                    <p></p>
                    <div className="code-snippet">
                    <pre><code className='javascript'>
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
                        </code></pre>
                    </div>
                </div>
                <div className="med-spacing"></div>
                <div className="SubHeader">Icon Usage</div>
                <div className="Content">
                    <p>By default, the Fabric icons are not added to your bundle, in order to save bytes for scenarios
                      where you don't care about icons, or you only care about a subset.
                To make them available, you may initialize them as such:</p>

                    <div className="code-snippet">
                    <pre><code className='javascript'>
                            {`import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);`}</code></pre>
                    </div>
                </div>
            </div>
        );
    }
    private _getCoreTab(): JSX.Element | undefined {
        return (
            <div>
                <div className="Intro">
                    <div className="med-spacing"></div>
                    <div className="med-spacing"></div>
                    <p>  <a href="https://github.com/OfficeDev/office-ui-fabric-core" target="_blank">Fabric Core</a> is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for you to create web experiences.
                    Fabric Core contains the core styles used across all aspects of Fabric including icons, type, fonts,
                    colors, the grid, etc. Fabric core is framework independent as both Both Fabric React and Fabric JS use Fabric Core. Reference the latest release of Fabric using the CDN below.</p>
                    <p><b>Note:</b> This is a separate project from Office UI Fabric React, which contains reusable ReactJS components.</p>
                </div>
                <div className="med-spacing"></div>
                <div className="SubHeader">Installation</div>
                <p>To use the CDN reference, copy and add the following line to the <code className="Code-inline">&lt;head&gt;</code> of your HTML webpage:</p>

                

                <div className="med-spacing"></div>
                <div className="SubHeader">Other ways to get Fabric Core</div>
                <div className="Content">
                <div className="code-snippet">
                    <pre><code className='html'>
                        {`<link rel="stylesheet" href="https://static2.sharepointonline.com/files/
fabric/office-ui-fabric-core/9.6.0/css/fabric.min.css">`}</code></pre>
<div className="med-spacing"></div>
                </div>
                    You can{' '}
                    <a className="" href="https://github.com/OfficeDev/office-ui-fabric-core/releases" target="_blank">
                        download a copy of Fabric for your project
            </a>{' '}
                    or{' '}
                    <a
                        className=""
                        href="https://github.com/OfficeDev/office-ui-fabric-react/wiki#using-fabric-react" target="_blank">
                        add it through a package manager
            </a>. You can also{' '}
                    <a
                        className=""
                        href="https://github.com/OfficeDev/office-ui-fabric-react/wiki#building-the-repo" target="_blank">
                        build your own copy from the source code
            </a>.
                    <div className="med-spacing"></div>
                    <div className="SubHeader">Fabric Core Usage</div>
                    <p>Reference core Fabric styles. For example, add the <code className="Code-inline">ms-Fabric</code> class to
                     a containing element, such as <code className="Code-inline">&lt;body&gt;</code>, to set the font-family for all
                      Fabric typography classes used within that element.</p>
                    <div className="code-snippet">
                    <pre><code className='html'>{`<body class="ms-Fabric">
  <span class="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
</body>`}</code></pre></div>

                    <div className="med-spacing"></div>
                    <div className="SubHeader">Icon Usage</div>
                    To use a Fabric icon, include the "i" element on your page, and then reference the appropriate classes. You can control the size of the icon by changing the font size.
                <p>For example, the following code shows how to make an extra-large table icon that uses the themePrimary (#0078d7) color:</p>
                <div className="code-snippet">
                    <pre><code className='javascript'>{`<i class="ms-Icon ms-font-xl ms-Icon--Table ms-fontColor-themePrimary"></i>`}</code></pre></div>
                    
                    To find more icons that are available in Office UI Fabric, use the search feature on the <a href="https://developer.microsoft.com/en-us/fabric#/styles/icons" target="_blank">Icons page</a>. When you find an icon to use in your add-in,
                be sure to prefix the icon name with <code className="Code-inline"> ms-Icon--</code>, as shown in the example above.
                </div>
            </div>
        );
    }

    private _getOtherFrameworksTab(): JSX.Element | undefined {
        return (
            <div>
                <div className="Intro">
                    <div className="med-spacing"></div>
                    <div className="med-spacing"></div>
                    The CSEO Design System supports ReactJS and SCSS partials as core parts of the product in an effort to stay aligned with other product teams within Microsoft,  while also recognizing that we need to tailor existing work to serve the specific needs of our customers..
                    You can still build components even if you're using a different frameworks such as Angular.
                <div className="med-spacing"></div>
                    <div className="med-spacing"></div>
                </div>
                <div className="Content">
                    <div className="SubHeader">Fabric JS</div>
                    <p>One option is to utilize <a href="https://github.com/OfficeDev/office-ui-fabric-js" target="_blank">Fabric JS</a>, a JavaScript front-end framework
                that provides visuals-focused <a href="https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/COMPONENTSLIST.md" target="_blank">components</a> to extend,
                    re-work and use in your application. These components are highly focused on the styling (CSS) rather than the functionality (JavaScript), so you can feel free to reimplement the component in the framework of your choice.</p>
                <p>For a quick start, you can reference the latest release of Fabric from a CDN or clone and build locally. Once you've got Fabric JS added to your project,
                     look at the <a href="https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/COMPONENTSLIST.md" target="_blank">component list</a> for documentation pertaining to each available component. </p>
                    <p>If you'd like to get Fabric through a package manager such as Bower, npm, or NuGet, check out the <a href="https://github.com/OfficeDev/office-ui-fabric-js/blob/master/ghdocs/PACKAGES.md" target="_blank">package manager docs</a>.</p>
                    <p><b>Note:</b> Fabric JS uses styles from the Office UI Fabric Core project. </p>
                    <div className="med-spacing"></div>
                    <div className="SubHeader">Wrapping Fabric components with Angular components</div>
                   <p> If your team is currently using Angular 2, consider creating an Office Add-in as a single page application and using Fabric components in your add-in by wrapping them in Angular components. For an example that shows you
                 how to do this, see <a href="https://github.com/OfficeDev/Word-Add-in-Angular2-StyleChecker" target="_blank">Word Style Checking Add-in Built on Angular</a>.</p>
                </div>
            </div>
        );
    }
}
export default DeveloperGetStarted;