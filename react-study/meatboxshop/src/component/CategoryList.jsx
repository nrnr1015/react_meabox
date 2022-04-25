import React, {useState, useEffect} from 'react';
import react from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"


const CategoryList = (props) => {
    const [item, items] = useState([]);
    const callData = async () => {
        const response = await axios.get('https://e582500e-aec8-4a8a-83c9-f9859b772a8d.mock.pstmn.io/category');
        
        
        const productItemCategoryList = response.data.data.productItemCategoryList;
        const productItemName = response.data.data.categoryList.itemCatName;
        productItemCategoryList.map(function(a, i){
            return <li item={item[i]} i={i}>
                        <Link to="/itemProductList"></Link>
                    </li>   
        });
        console.log('response1', response.data.data.categoryList[0].itemCatName)
        // for(var i = 0 ; i < response.data.data.productItemCategoryList.length; i++){
        //     var elem = document.createElement('li');
        //     elem.innerHTML = '<a href="/itemProductList' + i + '">' + response.data.data.categoryList[i].itemCatName;
        //     document.getElementById('item_one').append(elem);
        // }
        //console.log('length',response.data.data.productItemCategoryList.length);
    }

    return (
        <>
        <div className="itemCtg_box">
            <strong className="h-level1">ABC</strong>
            <ul id="item_one">
                {callData}
                {/* {users.filter(filterNames).map((user) => {
                return <li key={user.id}>
                    <Link to="/itemProductList">{user.name}</Link>
                </li>
                })} */}
            </ul>
        </div>
        </>
    )
}

export default CategoryList;