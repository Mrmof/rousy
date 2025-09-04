@extends('layouts.userlayout')


@section('content')



    <div class="row mt-4">
        <!-- Products under this Category -->
        <div class="col-md-10 offset-md-1">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-2">Wishlist</h6>
                </div>
                <div class="card-body">
                    <!-- If there are products in the wishlist, display them here -->
                    <div>
                        <div>
                            <img src="" alt="product_image" class="img-fluid">
                            <div>
                                <h5>Product Name</h5>
                                <p>Price: $XX.XX</p>

                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a href="">Remove from Wishlist</a>
                            <p class="btn btn-outline-primary btn-sm">Out of stock</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>



@endsection