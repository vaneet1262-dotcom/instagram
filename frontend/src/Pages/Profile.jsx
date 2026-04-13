const Profile = () => {
    return (
        <>
            <div className="container">
                <div className="row content">
                    <div className="col d-flex">
                        <img src="https://scontent.cdninstagram.com/v/t51.2885-19/397957229_1725745347938951_2529638416786274972_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDU3LkMzIn0%3D&_nc_ohc=FH9PP5ahXAAQ7kNvwEheXpY&_nc_oc=AdmyuuZknSqPo03AFwiZdPMOwKfBX-AG8FOSA-2MJqVGewD3zSPQqqDq_l1ldrXizAukfTYHMxk63mKuHsg0og3a&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=8&oh=00_AfzbvW0bhdZNwhnWLXjLcKwhMCzcnVV30YXS7ZdqGrMlyg&oe=69BC7477" alt="" className="image3" />
                        <div className="ms-4">
                            <h5>Vaneet_Kumar_19</h5>
                            <p>Vaneet Kumar Panjla </p>
                            <p> <b>12</b>   posts   <b> 113 </b> Followers    <b> 133</b> Following</p>

                            <div>
                                <p>🏠 PALAMPUR 🌄<br></br>
                                    🕉️ Sanatani 🚩Soul 🕉️<br></br>
                                    💮 God 🙏 Special Child 🛐<br></br>
                                    📖 Learning, Growing, Evolving 🧠<br></br>
                                    💎 Living life,loving it ⚓</p>
                            </div>

                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="button ">Edit Profile</button>
                        <button className="button ms-2">View Archieve</button>
                    </div>

                    <div className="item mt-5">
                        <span className="material-symbols-outlined">add_circle </span>
                    </div>

                </div>
            </div>

            <div className="container mt-5">
                <div className="grid g-0">
                    <div className="post-1">
                        <video controls>
                            <source src="/fighter.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="post-1">
                        <video controls>
                            <source src="/cricket.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="post-1">
                        <video controls>
                            <source src="/cricket1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="post-1">
                        <video controls>
                            <source src="/cylinder.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="post-1">
                        <video controls>
                            <source src="/kingkohli.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="post-1">
                        <video controls>
                            <source src="/matkifod.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="post-1">
                        <video  controls>
                            <source src="/roadaccident.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="post-1">
                        <video controls>
                            <source src="/cartoon.mp4" type="video/mp4" />
                        </video>
                    </div>
                     <div className="post-1">
                        <video controls>
                            <source src="/cricket2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;