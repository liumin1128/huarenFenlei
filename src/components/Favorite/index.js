import React from 'react';
import { hashHistory } from 'react-router';
import List from '../Ui/ListWithEdite'
import {favoriteList, favorite} from '../../actions/server'
import { formatList } from './format'
import Headroom from 'react-headroom'
import Back from '../Ui/Back/containers'
import TopBar from '../Ui/TopBar'
import Snackbar from 'material-ui/Snackbar';

class FavoriteList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      open: false,
      message: ''
    }
    this.del = (id) => {
        var that = this
        favorite(id).then(function () {
            that.getFavoriteList()
            that.setState({
                open: true,
                message: '取消成功！'
            })
        })
    }
    this.look = (type, id) => {
        hashHistory.push('detail/' + type + '/' + id)
    }
    this.getFavoriteList = () => {
        var that = this
        favoriteList().then(function (data) {
        that.setState({
            list: formatList(data)
        });
        }, function (error) {
            console.log(error)
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
    this.getFavoriteList()
  }
  componentWillUnmount () {
  }
  render () {
    return (
        <div>
            <Headroom>
                <TopBar title='我的收藏' left={ <Back /> }/>
            </Headroom>
            <List list={this.state.list} look={this.look} del={this.del} />
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
