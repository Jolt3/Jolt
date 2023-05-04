import React from 'react';
// import search from '../assets/img/icons8-search-50.png';

// <a target="_blank" href="https://icons8.com/icon/7695/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export const Header = ({placeholder, data}) => {
    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder={placeholder}/>
                <div className='searchIcon'></div>
            </div>
            <div className='dataResult'>
                {data.map((value, key) => {
                    return (
                        <a className='dataItem' href={value.link} target='_blank'>
                            <p>{value.title}</p>
                    </a>
                    );
                })}
            </div>
        </div>
    )
}
