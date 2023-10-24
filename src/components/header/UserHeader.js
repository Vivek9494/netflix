import React,{useState, useEffect} from 'react'
import axios from '../../axios';
import { ListLink, ListGroup, List, Profile, Dropdown, Search, SearchIcon, Link, Picture, Group } from './styles/style';
import requests from '../../hooks/requests';
import './styles/header.css'

export default function UserHeader({children, ...restProps}) {
  return <ListGroup {...restProps}>{children}</ListGroup>;
}

UserHeader.Link = function UserHeaderLink({to, children, ...restProps}){
    return <List to={to} {...restProps}><ListLink {...restProps}>{children}</ListLink></List>;
};

UserHeader.Profile = function UserProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>;
};

UserHeader.Dropdown = function UserDropdown({children,...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

UserHeader.Frame = function UserHeaderFrame({ children, ...restProps }) {
    return <Group { ...restProps}>{children}</Group>;
};

UserHeader.Search = function UserHeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
        </Search>
    );
}

UserHeader.Picture = function UserHeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

UserHeader.TextLink = function UserHeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

UserHeader.Banner = function HeaderBanner({ children, ...restProps }) {
    const [show, handleShow] = useState(false);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get(requests.fetchNetflixOriginals)
            .then((res) => {
                setMovie ( res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
            }).catch((error) => {
                console.log(error);
            })
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className = "banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className = "banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className = "banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner_fadeBottom" />
            <div className={`nav ${show && "nav_black"}`}></div>
        </header>
    );
}