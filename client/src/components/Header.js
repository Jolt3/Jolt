import React, { useState, useEffect } from 'react';
import Link from './Link';
import AuthService from '../utils/auth'

function logout() {
    AuthService.logout()
};
// import search from '../assets/img/icons8-search-50.png';

// <a target="_blank" href="https://icons8.com/icon/7695/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export const Header = ({placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    };

        

        useEffect(() => {
            const userName = sessionStorage.getItem('username')
            document.getElementById('username').textContent = userName
        }, []);

    return (
        <div className='search media'>
            {/* <div className='searchInputs'> */}
                {/* <input type='text' placeholder={placeholder} onChange={handleFilter}/> */}
                {/* <div className='searchIcon'></div> */}
            {/* </div> */}
            {/* {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.slice(0, 1).map((value, key) => {
                    return (
                        <a className='dataItem' href={value.link} target='_blank'>
                            <p>{value.title}</p>
                    </a>
                    );
                })}
            </div>
            )}
              <Link /> */}
            <div>
                <h1 className='header-head'>Welcome back, <span id='username'></span> </h1>
            </div>
            <div className='log-out'>
                <button onClick={logout}>
                    <span className='top'>Log Out</span>
                </button>
            </div>
          
        </div>
    )
}
