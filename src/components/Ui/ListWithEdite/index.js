import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import LazyLoad from 'react-lazyload';
class ListWithEdite extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      choose: null
    }
    this.choose = this.choose.bind(this);
  }
  componentWillMount () {
  }
  componentWillUnmount () {
  }
  choose (id) {
    if (id === this.state.choose) {
      this.setState({
        choose: null
      })
    } else {
      this.setState({
        choose: id
      })
    }
  }
  render () {
    const {list, del, refresh, edite, look} = this.props
    console.log(look)
    return (
          <div styleName='outBox'>
            {list.map((item, index) =>
              <LazyLoad key={item.id} height={120}>
                <div styleName='box' onClick={this.choose.bind(this, item.id)}>
                  <div styleName='itemBox'>
                    <div styleName={this.state.choose === item.id ? 'item active' : 'item'}>
                      <img styleName='img' src={item.photo} alt={item.title}/>
                      <h3 styleName='title'>{item.title}</h3>
                      <div styleName='price'>
                      {item.price === 0 ? <span styleName='d'>价格面议</span> : <span>
                          <span styleName='d'>$</span>
                          <span styleName='number'>{item.price}</span>
                          <span styleName='m'>/月</span>
                        </span>
                      }
                      </div>
                      <span styleName='city'>{item.city}</span>
                      <span styleName='createdAt'>{item.createdAt}</span>
                      <span styleName='subType'>{item.subType}</span>
                    </div>
                  </div>
                  <div styleName={this.state.choose === item.id ? 'editeBox editeBoxActive' : 'editeBox'}>
                      {look && <img key={1} styleName='editeIcon' onClick={look.bind(this, item.type, item.id)} src='images/look_highlight@3x.png' />}
                      {refresh && <img key={2} styleName='editeIcon' onClick={refresh.bind(this, item.id)} src='images/refresh_highlight@3x.png' />}
                      {edite && <img key={3} styleName='editeIcon' onClick={edite.bind(this, item.id)} src='images/edit_highlight@3x.png' />}
                      {del && <img key={4} styleName='editeIcon' onClick={del.bind(this, item.id)} src='images/delete@3x.png' />}
                  </div>
                  <hr styleName='hr'/>
                </div>
              </LazyLoad>
            )}
          </div>
      )
  }
}

export default CSSModules(ListWithEdite, styles, {allowMultiple: true})
