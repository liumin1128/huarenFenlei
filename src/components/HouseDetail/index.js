import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Headroom from 'react-headroom'
import Divider from 'material-ui/Divider'
import TopBar from '../Ui/TopBar'
import Back from '../Ui/Back/containers'
import find from 'lodash/find'
import Pictures from './Ui/Pictures'
import Comment from './Ui/Comment'
import Tag from './Ui/Tag'
import Facilities from './Ui/Facilities'
import Details from './Ui/Details'
import UserInfo from './Ui/UserInfo'
import SnackBar from '../Ui/SnackBar'
import Loading from '../Ui/LoadingAnimateBlack'

import Checkbox from 'material-ui/Checkbox'
import favoriteIcon from './images/favorite.svg'
import favoritedIcon from './images/favorited.svg'

class Fenlei extends React.Component {
  constructor (props) {
    super(props)
    this.zan = () => {
      var id = this.props.params.id
      var type = this.props.params.type
      const params = {type, id}
      this.props.zan(params)
    }
    this.favorite = () => {
      var id = this.props.params.id
      var type = this.props.params.type
      const params = {type, id}
      this.props.favorite(params)
    }
    this.onSent = (val) => {
      if (val.length === 0 ) {
        this.refs.snackbar.setState({
          open: true,
          message: '评论内容不能为空！'
        })
      } else {
        var id = this.props.params.id
        var content = val
        var reply = this.refs.comment.refs.reply.state.replyToId
        const params = {id, content, reply}
        this.props.comment(params)
        this.refs.comment.refs.reply.setState({
          replyToId: undefined,
          replyTo: null
        })
      }
    }
    this.getMore = () => {
      var params = {
        page: this.props.details.comments.page + 1,
        pageSize: this.props.details.comments.pageSize,
        id: this.props.params.id
      }
      this.props.getMoreComments(params)
    }
    this.reply = (obj) => {
      var input = this.refs.comment.refs.reply.refs.replyInput.input.refs.input
      input.focus()
      input.value = ''
      this.refs.comment.refs.reply.setState({
        replyTo: '@:' + find(this.props.details.comments.data, {objectId: obj.objId}).userNickname,
        replyToId: obj.objId
      })
    }
    this.blur = () => {
      if (this.refs.comment.refs.reply.refs.replyInput.input.refs.input.value === '') {
        this.refs.comment.refs.reply.setState({
          replyTo: null,
          replyToId: undefined
        })
      }
    }
  }
   
  componentDidMount () {
    var id = this.props.params.id
    var type = this.props.params.type
    const params = {type, id}
    this.props.init(params)
  }
  componentWillUnmount () {
  }
  render () {
    const { details } = this.props
    return (
      <div styleName='box'>

        <Headroom>
          <TopBar title='详情'
            left={<Back />}
            right={
              <Checkbox
                checkedIcon={<img src={favoritedIcon} alt="" />}
                uncheckedIcon={<img src={favoriteIcon} alt="" />}
                iconStyle={{maxWidth: '24px', maxHeight: '24px',marginRight: 0}}
                style={{paddingRight: '10px'}}
                inputStyle={{width: '20px'}}
                onCheck={this.favorite}
                checked={details.favorite.status}
                
              />
            }
          />
        </Headroom>
        {details.info &&
          <div>
            <Pictures
              pictures={details.info.pictures}
              price={details.info.price || ''}
            />
            
            <Details
              title={details.info.title}
              price={details.info.price}
              createdAt={details.info.createdAt}
              onZan={this.zan}
              zan={details.zan}
            />

            <Divider style={{background: '#F8F8F8', height: 8, boxShadow: '0 0 1px #ccc inset'}} />
            
            <Tag
              city={details.info.city}
              location={(details.info.location || details.info.jobLocation || details.info.houseLocation)}
              subType={(details.info.subType || details.info.jobType || details.info.brand)}
              tel={details.info.tel}
            />
            
            <Divider style={{background: '#F8F8F8', height: 8, boxShadow: '0 0 1px #ccc inset'}} />

            { details.info.facilities && <div>
                <Facilities facilities={details.info.facilities} />
                <Divider style={{background: '#F8F8F8', height: 8, boxShadow: '0 0 1px #ccc inset'}} />
              </div>
              }


            <UserInfo avatarUrl={details.info.pictures[0]} nickname='王女士' tel={details.info.tel} />

            <Divider style={{background: '#F8F8F8', height: 8, boxShadow: '0 0 1px #ccc inset'}} />
            
             <div>
              { details.comments
                && <Comment
                    ref='comment'
                    list={details.comments.data}
                    onSent={this.onSent}
                    getMore={this.getMore}
                    reply={this.reply}
                    blur={this.blur}
                  // reply={this.replyToOne}
                  // getMore={this.getMore}
                />
              }
            </div>
          </div>
        }
        {!details.info &&
          <div>
            <Loading />
          </div>
        }

        
        <SnackBar ref='snackbar' />
      </div>
    )
  }
}

Fenlei.defaultProps = {
  details: {}
}

export default CSSModules(Fenlei, styles, {allowMultiple: true})
