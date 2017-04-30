import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-dom';
class MaterialTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    name: "About",
                    route: "/"
                }, {
                    name: "Code",
                    route: "/code"
                }, {
                    name: "Art",
                    route: "/art"
                }, {
                    name: "Design",
                    route: "/design"
                }
            ]
        }
    }
    render() {
        const styles = {
            ink: {
                backgroundColor: "#FFC107"
            },
            tabs: {
                backgroundColor: 'rgba(0,0,0,0)'
            },
            width: {
                width: "60vw",
                maxWidth: "40rem"
            }
        };
        return (
            <div>
                <Tabs
                    contentContainerStyle={styles.width}
                    inkBarStyle={styles.ink}
                    tabItemContainerStyle={styles.tabs}>
                    <Tab
                        containerElement={< Link to="/" />}
                        label="About"
                        data-route="/"
                        onActive={this.handleActive}></Tab>
                    <Tab
                        containerElement={< Link to="/code" />}
                        label="Code"
                        data-route="/code"
                        onActive={this.handleActive}></Tab>
                    <Tab
                        containerElement={< Link to="/art" />}
                        label="Art"
                        data-route="/art"
                        onActive={this.handleActive}></Tab>
                    <Tab
                        containerElement={< Link to="/design" />}
                        label="Design"
                        data-route="/design"
                        onActive={this.handleActive}></Tab>
                </Tabs>
            </div>
        );
    }
}

export default MaterialTabs;