import React from 'react';
import IconButton from 'material-ui/IconButton';

const styles = {
  Select: {
    padding: '10px 0px'
  },
  Title: {
    fontFamily: 'PingFangSC-Light',
    fontSize: '14px',
    color: '#515151',
    lineHeight: '20px',
    fontWeight: '100',
    paddingLeft: '16px',
    marginTop: '0',
    marginBottom: '5px'
  },
  SelectBox: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  facilities: {
    self: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    facilitie: {
      display: 'flex',
      flexDirection: 'column',
      width: '74px',
      height: '74px',
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      maxWidth: '25px',
      maxHeight: '25px',
      width: '25px',
      height: '25px'
    },
    p: {
      margin: '0',
      fontSize: '12px',
      color: '#999'
    }
  },
  SelectItem: {
    width: '66px',
    height: '26px',
    background: '#fff',
    borderRadius: '1px',
    lineHeight: '28px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '5px',
    fontFamily: 'PingFangSC-Light',
    fontSize: '14px',
    color: '#B2B2B2',
    letterSpacing: '0px',
    transition: 'all 0.3s'
  }
}

class SelectFacilities extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      facilities: this.props.val || [
        {
          type: 'furniture',
          name: '家具',
          val: false
        }, {
          type: 'toilet',
          name: '卫生间',
          val: false
        }, {
          type: 'parking',
          name: '停车位',
          val: false
        }, {
          type: 'heater',
          name: '暖气',
          val: false
        }, {
          type: 'shower',
          name: '热水器',
          val: false
        }, {
          type: 'fridge',
          name: '冰箱',
          val: false
        }, {
          type: 'air-conditioner',
          name: '空调',
          val: false
        }, {
          type: 'wifi',
          name: '宽带',
          val: false
        }, {
          type: 'washing-machine',
          name: '洗衣机',
          val: false
        }, {
          type: 'kitchen',
          name: '可做饭',
          val: false
        }
      ]
    }
    this.setFacilitie = this.setFacilitie.bind(this);
  }
  setFacilitie (val) {
    var facilities = this.state.facilities;
    var obj = facilities[val]
    obj.val = !obj.val
    facilities[val] = obj
    this.setState({val: facilities});
    this.props.setFacilitie(this.props.obj, facilities);
  }
  render () {
    // 在设施列表后追加两个占位元素
    return (
      <div style={styles.Select}>
        <h3 style={styles.Title}>配套设施</h3>
        <div style={styles.SelectBox} style={styles.facilities.self}>
          {this.state.facilities && this.state.facilities.map((facilitie, index) =>
            <div
              key={index}
              style={styles.facilities.facilitie}
              onClick={this.setFacilitie.bind(this, index)}
              >
              <IconButton touch={true} iconStyle={styles.facilities.img}>
                <img src={ facilitie.val === true ? '/images/' + facilitie.type + '_s@3x.png' : '/images/' + facilitie.type + '@3x.png'} />
              </IconButton>
              <p style={styles.facilities.p} >{facilitie.name}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

SelectFacilities.defaultProps = {
};

export default SelectFacilities;
