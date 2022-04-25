import React, {useState, useEffect} from 'react';
// import { Link} from 'react-router-dom';
// import $, { css } from 'jquery';
import Depth1 from './Depth1';
import SearchBar from './SearchBar';
import axios from 'axios';
import CategoryList from './CategoryList';

// function callData(){
//     axios.get('https://e582500e-aec8-4a8a-83c9-f9859b772a8d.mock.pstmn.io/category').then((response)=>{
  
//     console.log('length',response.data.data.productItemCategoryList.length);
//     for(var i = 0 ; i < response.data.data.productItemCategoryList.length; i++){
//         var elem = document.createElement('li');
//         elem.innerHTML = '<a href="/itemProductList' + i + '">' + response.data.data.categoryList[i].itemCatName;
//         document.getElementById('item_one').append(elem);
//     }
    
//     }).catch((Error)=>{
//         console.log(Error);
//     });
// }


//search
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("item_one");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("a")[0];
     txtValue = a.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "";
     } else {
         li[i].style.display = "none";
     }
    }
}
function Category() {
    
    //callData();

    return(
        
        <div className="Category">
         
            <div id="tabs">

                <div className="tab depth1">
                    
                </div>

                <div className="tabContent tabContent_wrap active">
                    <div className="tabContentInner">
                        <div className="monthly">

                            <ul className="tab2 depth2">
                                <li  className="active"><span>한우암소</span></li>
                                <li><span>한우거세</span></li>
                                <li><span>한우수소</span></li>
                                <li><span>육우암소</span></li>
                                <li><span>육우거세</span></li>
                            </ul>
                            
                            <div className="depth3_wrap">
                                <div className="tabContent2 depth3 active">
                                <div className="newCtg_page">
                                    <input type="text" id="myInput" onKeyUp={myFunction} />                
                                    <div className="ctg_fixed">
                                        <ul>
                                            <li><button type="button">ABC</button></li>
                                            <li><button type="button">ㄱ</button></li> 
                                            <li><button type="button">ㄴ</button></li>
                                            <li><button type="button">ㄷ</button></li>
                                            <li><button type="button">ㄹ</button></li>
                                            <li><button type="button">ㅁ</button></li>
                                            <li><button type="button">ㅂ</button></li>
                                            <li><button type="button">ㅅ</button></li>
                                            <li><button type="button">ㅇ</button></li>
                                        </ul>
                                    </div>
                    
                                    <div className="itemCtg_wrap">
                                        <CategoryList />
                                        {/* <div className="itemCtg_box">
                                            <strong className="h-level1">ABC</strong>
                                            <ul id="item_one"
                                            onClick={
                                                
                                            }>
                                                {users.filter(filterNames).map((user) => {
                                                return <li key={user.id}>
                                                    <Link to="/itemProductList">{user.name}</Link>
                                                </li>
                                                })}
                                            </ul>
                                        </div> */}
                                        <div className="itemCtg_box">
                                            {/* <strong className="h-level1">ㄱ</strong> */}
                                            <ul>
                                            {/* {users2.filter(filterNames).map((user) => {
                                                return <li key={user.id}>
                                                    <Link>{user.name}</Link>
                                                </li>
                                                })} */}
                                            </ul>
                                        </div>
                                        {/* <div className="itemCtg_box">
                                            <strong className="h-level1">ㄴ</strong>
                                            <ul>
                                                <li className="currut_page"><a href="javascript:;">니은</a></li>
                                            </ul>
                                        </div>
                                        <div className="itemCtg_box">
                                            <strong className="h-level1">ㄷ</strong>
                                            <ul>
                                                <li><a href="javascript:;">대창</a></li>
                                                <li><a href="javascript:;">대창(오픈)</a></li>
                                                <li><a href="javascript:;">도가니</a></li>
                                                <li><a href="javascript:;">뒷사태</a></li>
                                                <li><a href="javascript:;">대창</a></li>
                                                <li><a href="javascript:;">등갈비/백립</a></li>
                                                <li><a href="javascript:;">등심</a></li>
                                                <li><a href="javascript:;">떡심</a></li>
                                            </ul>
                                        </div>
                                        <div className="itemCtg_box">
                                            <strong className="h-level1">ㄹ</strong>
                                            <ul>
                                                <li><a href="javascript:;">립본</a></li>
                                            </ul>
                                        </div>
                                        <div className="itemCtg_box">
                                            <strong className="h-level1">ㅁ</strong>
                                            <ul>
                                                <li><a href="javascript:;">목뼈</a></li>
                                                <li><a href="javascript:;">목심</a></li>
                                            </ul>
                                        </div>
                                        <div className="itemCtg_box">
                                            <strong className="h-level1">ㅂ</strong>
                                            <ul>
                                                <li><a href="javascript:;">반골</a></li>
                                                <li><a href="javascript:;">백립(조각백립)</a></li>
                                                <li><a href="javascript:;">부채덮개살(트렌스메이저)</a></li>
                                                <li><a href="javascript:;">부채살</a></li>
                                                <li><a href="javascript:;">뽈살</a></li>
                                            </ul>
                                        </div>
                                        <div className="itemCtg_box">
                                            <strong className="h-level1">ㅅ</strong>
                                            <ul>
                                                <li><a href="javascript:;">사골</a></li>
                                                <li><a href="javascript:;">사골(뒤쪽사골)</a></li>
                                                <li><a href="javascript:;">사골(뒷왕사골)</a></li>
                                                <li><a href="javascript:;">사골(앞왕사골)</a></li>
                                                <li><a href="javascript:;">사골(앞쪽사골)</a></li>
                                                <li><a href="javascript:;">사태</a></li>
                                                <li><a href="javascript:;">살치살</a></li>
                                                <li><a href="javascript:;">삼겹양지</a></li>
                                                <li><a href="javascript:;">삼겹양지(조각)</a></li>
                                                <li><a href="javascript:;">설깃</a></li>
                                                <li><a href="javascript:;">설도</a></li>
                                                <li><a href="javascript:;">센터컷</a></li>
                                                <li><a href="javascript:;">스지</a></li>
                                                <li><a href="javascript:;">스지(뒷스지)</a></li>
                                                <li><a href="javascript:;">스페어립</a></li>
                                            </ul>
                                        </div> 
                                        <div className="itemCtg_box">
                                            <strong className="h-level1">ㅇ</strong>
                                            <ul>
                                                <li><a href="javascript:;">사골</a></li>
                                            </ul>
                                        </div> */}


                                    </div>
                                </div>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>2</p>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>3</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

                <div className="tabContent tabContent_wrap">
                    <div className="tabContentInner">
                        <div className="monthly">

                            <ul className="tab2 depth2">
                                <li  className="active"><span>한돈</span></li>
                                <li><span>소분한돈</span></li>
                                <li><span>양념 한돈</span></li>
                            </ul>
                            
                            <div className="depth3_wrap">
                                <div className="tabContent2 depth3 active">
                                    <p>등심</p>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>찌개</p>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>어쩌고</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

                <div className="tabContent tabContent_wrap">
                    <div className="tabContentInner">
                        <div className="monthly">

                            <ul className="tab2 depth2">
                                <li  className="active"><span>국산닭</span></li>
                                <li><span>수입닭</span></li>
                                <li><span>국산오리</span></li>
                            </ul>
                            
                            <div className="depth3_wrap">
                                <div className="tabContent2 depth3 active">
                                    <p>근위</p>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>날개</p>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>닭가슴살</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="tabContent tabContent_wrap">
                    <div className="tabContentInner">
                        <div className="monthly">

                            <ul className="tab2 depth2">
                                <li  className="active"><span>ff</span></li>
                                <li><span>5</span></li>
                                <li><span>6</span></li>
                            </ul>
                            
                            <div className="depth3_wrap">
                                <div className="tabContent2 depth3 active">
                                    <p>등심</p>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>2</p>
                                </div>
                                <div className="tabContent2 depth3">
                                    <p>3</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        
        
        
            
    )
}
export default Category;
