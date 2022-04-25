import React from 'react';
import { Link} from "react-router-dom"

import { TransitionGroup, CSSTransition } from 'react-transition-group'


function Login({ location }) {
	const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 0 }
	return(
		<div>
			<TransitionGroup component="main" className="page-main">
					<CSSTransition key={currentKey} 
					timeout={timeout} classNames="fade" appear>

					<section className="page-main-inner">
						<div class="full-pop signUpPage">
				
							<div class="pop-tit border_none">
								<h1 class="tit logo en">
									<a href="javascript:;" onclick=""><span>MEATBOX</span></a>
								</h1>
								<Link to="/" className="historyback">
									<button type="button" class="btn-hide">닫기</button>
								</Link>
								
							</div>

							<div class="pop-container">
								<div class="pop-content">
									<div class="of-auto">
										
										<div class="content-box bgc-w ptb20 prl16 login_wrap">
											<div class="login-form">
												<form action="">
													<div class="login_box">
														<div class="login_inputs">
															<div class="input_txt">
																<input type="text" class="input_bord" required="" />
																<span class="up_label">아이디 입력</span>
															</div>
															<div class="input_txt password_area">
																<input type="password" class="input_bord" required=""/>
																<span class="up_label">비밀번호 입력</span>
																<button type="button" class="pw_show">보기</button>
															</div>
														</div>

														<div class="login_saves after">
															<span class="checkbox">
																<input type="checkbox" id="chk_auto" name=""/>
																<label for="chk_auto">자동 로그인 </label>
															</span>
															<span class="checkbox">
																<input type="checkbox" id="chk_1" name=""/>
																<label for="chk_1">아이디 저장</label>
															</span>
														</div>
														
														<div class="login_go_box">
															<div class="box_button">
																<button type="button" class="button_default red_style">로그인</button>
															</div>
															<div class="box_button">
																<button type="button" onclick="" class="button_default border_style">회원가입</button>
															</div>
														</div>

														<div class="login-link-wrap">
															<ul class="login-link">
																<li><a href="#">아이디 찾기</a></li>
																<li><a href="#">비밀번호 찾기</a></li>
															</ul>
														</div>
													</div>
												</form>
												<div class="social-round">
													<p class="sub_exp">SNS 계정으로 로그인 / 회원가입하기</p>
													<button class="ico-round ico-naver">네이버로 회원가입</button>
													<button class="ico-round ico-kakao">카카오톡으로 회원가입</button>
													<button class="ico-round ico-apple">Apple로 회원가입</button>
												</div>
												<a href="tel:1644-6689" class="call_meatbox"><span>판매자 가입문의 </span> 1644-6689</a>
											</div>
										</div>
										
									</div>
								</div>
						</div>
						
						</div>
					</section>
			</CSSTransition>
		</TransitionGroup>
			
		
		</div>
		
		
			
	)
}
export default Login;