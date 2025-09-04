<aside class="sidenav bg-dark navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
    id="sidenav-main">
    <div class="sidenav-header">
        <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true" id="iconSidenav"></i>
        <a class="navbar-brand m-0" href=""
            target="_blank">
            {{-- <img src="../assets/img/logo-ct-dark.png" width="26px" height="26px" class="navbar-brand-img h-100"
                alt="main_logo"> --}}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="h-4 w-24 md:h-6 md:w-6 text-green-300" style="color: #fff">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>

            <div>
                <h4 class="text-white">
                    Rosy <span class="text-primary" style="color: #99ff00e6">Herbal</span> Care
                </h4>
                
            </div>
        </a>
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active text-white" href="{{ route('dashboard.orders') }}">
                    <div
                        class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i class="icofont-dashboard fs-4 text-white"></i>
                    </div>
                    <span class="nav-link-text ms-1">Orders</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="{{ route('dashboard.inbox') }}">
                    <div
                        class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i class="icofont-page fs-4 text-white"></i>
                    </div>
                    <span class="nav-link-text ms-1">Inbox</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="{{ route('dashboard.pending_review') }}">
                    <div
                        class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i class="icofont-list fs-4 text-white"></i>
                    </div>
                    <span class="nav-link-text ms-1">Pending Reviews</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="{{ route('dashboard.wishlist') }}">
                    <div
                        class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i class="icofont-heart fs-4 text-white"></i>
                    </div>
                    <span class="nav-link-text ms-1">Wishlist</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="{{ route('dashboard.account') }}">
                    <div
                        class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i class="icofont-male fs-4 text-white "></i>
                    </div>
                    <span class="nav-link-text ms-1">Account Management</span>
                </a>
            </li>   
            {{-- <li class="nav-item">
                <a class="nav-link text-white" href="{{ route('admin.users') }}">
                    <div
                        class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i class="icofont-card fs-4 text-white"></i>
                    </div>
                    <span class="nav-link-text ms-1">Payment Setting</span>
                </a>
            </li>
             --}}
        </ul>
    </div>
    <div class="sidenav-footer mx-3 ">
        
        
        <a class="btn btn-danger btn-sm mb-0 w-100"
            href=""> <i class="icofont-logout fs-4"></i> Logout</a>
    </div>
</aside>