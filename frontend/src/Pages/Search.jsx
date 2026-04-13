const Search = () =>{
    return (
        <>
        <div className="container-fluid">
            <div className="row ms-3">
                <div className="col-4">
                    <i class="fa-solid fa-xmark icon"></i>
                    <h2>Search</h2>

                    <div className="mt-4">
                        <input type="text" className="form-control search inpt" placeholder="Search" />
                    </div>
                    
                    <div className="message">
                        <h6>Recent</h6>
                        <p className="pgh">Clear All</p>
                    </div>

                    <div className="recent-user">
                        <img src="https://scontent.cdninstagram.com/v/t51.2885-19/470902849_1242792490117965_4269136273031050791_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=QVwbfeq8e-QQ7kNvwGRD6rv&_nc_oc=Adnj6n-rFiKecbtfceQPelHO55y0eJPK0m3tEVdd8OubBEve_uSqFCD5dREzrRl9ZGHvzD0Y178hg8mDnhuajpfa&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=8&oh=00_AfxmhvFcKQIGOOSYEY9OUPcOKjjoXmF1ON5WGspO4YQdqw&oe=69B85351" alt=""className="image2"/>
                        <div>
                            <b>Storytv.official</b>
                            <p>Story Tv. Following</p>
                        </div>
                        <i class="fa-solid fa-xmark remove"></i>
                    </div>
                    <div className="recent-user">
                        <img src="https://scontent.cdninstagram.com/v/t51.2885-19/470902849_1242792490117965_4269136273031050791_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=QVwbfeq8e-QQ7kNvwGRD6rv&_nc_oc=Adnj6n-rFiKecbtfceQPelHO55y0eJPK0m3tEVdd8OubBEve_uSqFCD5dREzrRl9ZGHvzD0Y178hg8mDnhuajpfa&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=8&oh=00_AfxmhvFcKQIGOOSYEY9OUPcOKjjoXmF1ON5WGspO4YQdqw&oe=69B85351" alt=""className="image2"/>
                        <div>
                            <b>Storytv.entertainment</b>
                        </div>
                        <i class="fa-solid fa-xmark remove"></i>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Search;