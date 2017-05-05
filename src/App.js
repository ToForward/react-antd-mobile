import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import './App.css';

/* eslint global-require: 0 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }} onClick={(e) => {
          e.preventDefault();
          this.setState({
            hidden: !this.state.hidden,
          });
        }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#b3b3b3"
        tintColor="#c19250"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="生活"
          key="生活"
          icon={<i className="iconfont icon-zixun"></i>
          }
          selectedIcon={<i className="iconfont icon-zixun"></i>}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('生活')}
        </TabBar.Item>
        <TabBar.Item
          icon={<i className="iconfont icon-rongyu"></i>}
          selectedIcon={<i className="iconfont icon-rongyu"></i>}
          title="口碑"
          key="口碑"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('口碑')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <i className="iconfont icon-yanjing"></i>
          }
          selectedIcon={
           <i className="iconfont icon-yanjing"></i>
          }
          title="朋友"
          key="朋友"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {this.renderContent('朋友')}
        </TabBar.Item>
        <TabBar.Item
          icon={<i className="iconfont icon-jiahaoyou"></i>}
          selectedIcon={<i className="iconfont icon-jiahaoyou"></i>}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default App;
