import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.scss'
import Headroom from 'react-headroom'
import logo from '../../images/logo@3x.png'
import TopBar from '../Ui/TopBar'
import UserAvatar from '../Ui/UserAvatar/containers'
import Bannar from './Ui/Bannar'
import List from './Ui/List'

class Fenlei extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    document.body.style.background = '#f8f8f8'
  }
  componentWillUnmount () {
    document.body.style.background = 'none'
  }
  render () {
    const { fenlei } = this.props
    return (
      <div styleName='box'>

        <Headroom>
          <TopBar left={
              <img styleName='box' style={{height: 23, width: 80, marginLeft: 10}} src={logo} alt="" />
            } right={[
              <UserAvatar key={0}/>
          ]}/>
        </Headroom>


        <Bannar />

        <List />

      </div>
    )
  }
}

Fenlei.defaultProps = {
  fenlei: {
    data: [],
    waiting: true,
    loading: true,
    isEnd: false
  }
}

export default CSSModules(Fenlei, styles, {allowMultiple: true})
