const Leftbar = () =>{
    return (
        <>
    <div className="col p-2 py-4 d-flex flex-column gap-5 left-nav">
      <div id="logo"><i class="fa-brands fa-instagram fa-2x"></i></div>

      <ul class="nav flex-column">
  <li class="nav-item">
     <a href="instagram" className="nav-link"> <i className="material-symbols-outlined">home </i> <span>Home</span> </a>
  </li>
  <li class="nav-item">
        <a href="search"  className="nav-link"> <i className="material-symbols-outlined">search </i> <span>Search</span> </a>
  </li>
  <li class="nav-item">
 <a href="explore"  className="nav-link">  <i className="material-symbols-outlined">explore </i> <span>Explore</span> </a>
  </li>
  <li class="nav-item">
    <a href="reels"  className="nav-link">  <i className="material-symbols-outlined">movie </i> <span>Reels</span> </a>
  </li>

  <li class="nav-item">
      <a href="Messages" className="nav-link"><i className="material-symbols-outlined">send </i> <span>Messages</span> </a>
  </li>
  <li class="nav-item">
       <a href="notification"  className="nav-link">
        <i className="material-symbols-outlined">favorite </i> <span>Notifications</span> </a>
  </li>
  <li class="nav-item">
       <a href=""  className="nav-link">
         <i className="material-symbols-outlined">add_circle </i> <span>Create</span>
         </a>
  </li>
   <li class="nav-item">
       <a href=""  className="nav-link">
          <i className="material-symbols-outlined">account_circle </i> <span>Profile</span>
          </a>
  </li>
   <li class="nav-item">
       <a href=""  className="nav-link">
           <i className="material-symbols-outlined">menu </i> <span>More</span>
          </a>
  </li>
</ul>
     
  
    </div>
    
        </>
    )
}
export default Leftbar;