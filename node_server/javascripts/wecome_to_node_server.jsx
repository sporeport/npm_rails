var React = require("react")
import { Spinner, DatePickerFactory, Tabs, TabList, TabPanel, Tab } from "@blueprintjs/core";

class WelcomeToNodeServer extends React.Component {
  render() {
    return (
      <div className='u-p-lg pt-elevation-1'>
        <h1>Welcome to Node Server</h1>
        <Tabs>
          <TabList>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
            <Tab>Third tab</Tab>
            <Tab isDisabled='true'>Fourth tab</Tab>
          </TabList>
          <TabPanel>
            <Spinner></Spinner>
          </TabPanel>
          <TabPanel>
            Second panel
          </TabPanel>
          <TabPanel>
            Third panel
          </TabPanel>
          <TabPanel>
            Fourth panel
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

module.exports = WelcomeToNodeServer;
