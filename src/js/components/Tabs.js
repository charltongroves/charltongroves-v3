import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-dom';
class MaterialTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRoute: props.currentRoute,
            tabs: [
                {
                    index: 0,
                    name: "About",
                    route: "/"
                }, {
                    index: 1,
                    name: "Code",
                    route: "/code"
                }, {
                    index: 2,
                    name: "Art",
                    route: "/art"
                }, {
                    index: 3,
                    name: "Design",
                    route: "/design"
                }
            ]
        }
    }
    getInitIndex() {
        var index = 0
        for (let tab of this.state.tabs) {
            if (this.state.currentRoute.indexOf(tab.route) != -1) {
                index = tab.index
            }
        }
        return index
    }
    render() {
        const initIndex = this.getInitIndex()
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
                    initialSelectedIndex={initIndex}
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