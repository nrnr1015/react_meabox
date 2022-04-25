import React, { Component } from "react";
import { Link} from "react-router-dom"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Depth1 from './Depth1';

const styles = {
  fullList: {
    width: '100%',
	height: '100%'
  }
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSidebar: false
    };
  }

  handleSidebarOpen = () => {
	this.setState({ openSidebar: true });
  };

  handleSidebarClose = () => {
	this.setState({ openSidebar: false });
  };

  showDrawer = event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ openSidebar: true });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Sidebar state: " + this.state.openSidebar);
  }

  fullList = () => {
    const { classes, onClose } = this.props;
    return (
      <div
        className={classes.fullList}
        role="presentation"
      >
        <div className="Popup_bottomSheet">
			<div className="swipe_wrap" >
				<i className="swipe_close">스와이프 닫기</i>
			</div>
			
			<div className="common_margin">
				<div className="search">
					<div className="is-expand">
						<input type="text" /><button type="button">검색</button>
					</div>
				</div>
			</div>
			

			<div className="common_margin">
				<div className="search_lately">
					<h3>최근검색어</h3>
					<div className="search_lately_list search_lately_empty">
					최근 검색어가 없습니다.
					</div>
				</div>
			</div>
		
			
			<div className="common_margin">
				<h3>축종별</h3>
				<Depth1></Depth1>
			</div>

			<div className="common_margin">
				<h3>메뉴별 추천상품</h3>
				<div class="swiper-slide-sub">
					<div class="slider-for">
						<div class="menu-recommend">
							<ul class="menu-area pop-menu">
								<li class="select-menu menu_btn1">
								<Link to="/Category" ><button type="button">구이(소)</button></Link>
										
								</li>
								<li class="select-menu menu_btn2">
										<button type="button">구이(돼지)</button>
								</li>
								<li class="select-menu menu_btn3">
										<button type="button">구이(기타)</button>
								</li>
								<li class="select-menu menu_btn4">
										<button type="button">무한리필</button>
								</li>
								<li class="select-menu menu_btn5">
										<button type="button">족발·보쌈</button>
								</li>
								<li class="select-menu menu_btn6">
										<button type="button">찜·찌개·탕</button>
								</li>
								<li class="select-menu menu_btn7">
										<button type="button">냉면·국수</button>
								</li>
								<li class="select-menu menu_btn8">
										<button type="button">간편조리</button>
								</li>
								<li class="select-menu menu_btn9">
										<button type="button">한식</button>
								</li>
								<li class="select-menu menu_btn10">
										<button type="button">중식</button>
								</li>
								<li class="select-menu menu_btn11">
										<button type="button">양식</button>
								</li>
								<li class="select-menu menu_btn12">
										<button type="button">기타</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div>
      </div>
    );
  };

  render() {
    const { open, onOpen, onClose } = this.props;

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
      <SwipeableDrawer
        open={open}
		anchor="bottom"
        onOpen={onOpen}
        onClose={onClose}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {this.fullList()}
      </SwipeableDrawer>
    );
  }
}

Sidebar.propTypes = {
	children: PropTypes.node
  };
export default withStyles(styles)(Sidebar);
