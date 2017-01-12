import React from 'react';
import { hashHistory } from 'react-router';
import List from '../Ui/ListWithEdite'
import {myPostList, deleteMyPost, updateMyPost} from '../../actions/server'
import { formatList } from './format'
import Headroom from 'react-headroom'
import Back from '../Ui/Back/containers'
import TopBar from '../Ui/TopBar'
import find from 'lodash/find'
import Snackbar from 'material-ui/Snackbar';

class FavoriteList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      source: [],
      open: false,
      message: ''
    }
    this.getData = () => {
        var that = this
        myPostList().then(function (data) {
            that.setState({
                list: formatList(data),
                source: data
            });
        })
    }
    this.edite = (id) => {
        var baseInfo = find(this.state.source, {objectId: id}).item
        baseInfo.type = find(this.state.source, {objectId: id}).type
        baseInfo.id = id
        this.props.setEdite(baseInfo)
        hashHistory.push('/edite/' + baseInfo.type + '/' + baseInfo.id)
    }
    this.refresh = (id) => {
        var that = this
        var baseInfo = find(this.state.source, {objectId: id}).item
        baseInfo.type = find(this.state.source, {objectId: id}).type
        baseInfo.id = id
        updateMyPost(baseInfo).then(function (data) {
            if (data.status === 200) {
                that.getData()
                that.setState({
                    open: true,
                    message: '刷新成功！'
                })
            }
        })
    }
    this.del = (id) => {
        var that = this
        deleteMyPost(id).then(function (data) {
            if (data.status === 200) {
                that.getData()
                that.setState({
                    open: true,
                    message: '删除成功！'
                })
            }
        })
    }
    this.handleRequestClose = () => {
      this.setState({
        open: false,
        message: ''
      })
    }
  }
  componentWillMount () {
    this.getData()
  }
  componentWillUnmount () {
  }
  render () {
    return (
        <div>
            <Headroom>
                <TopBar title='我的发布' left={ <Back /> }/>
            </Headroom>
            <List list={this.state.list} refresh={this.refresh} edite={this.edite} del={this.del} />
            <Snackbar
              open={this.state.open}
              message={this.state.message}
              // action='取消'
              autoHideDuration={2000}
              // onActionTouchTap={this.handleActionTouchTap}
              onRequestClose={this.handleRequestClose}
            />
        </div>
    )
  }
}

export default FavoriteList;
