@extends('layouts.userlayout')


@section('content')
    <div class="row">
        <div class="col-md-10 offset-md-1">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-2">Orders</h6>
                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="mb-2">Ongoing/Delivered</h6>
                            </div>
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="{{ asset('assets/img/logos/mastercard.png') }}" alt="product img"  width="100px" height="100px" >
                                    <div>
                                        <h4>Product Name 1</h4>
                                        <p>Order number: #12345</p>
                                        <p>Size: M</p>
                                        <p>Status: Delivered</p>
                                        <p>Estimated delivery time: 2 days</p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <img src="{{ asset('assets/img/logos/mastercard.png') }}" alt="product img"  width="100px" height="100px" >
                                    <div>
                                        <h4>Product Name 1</h4>
                                        <p>Order number: #12345</p>
                                        <p>Size: M</p>
                                        <p>Status: Delivered</p>
                                        <p>Estimated delivery time: 2 days</p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <img src="{{ asset('assets/img/logos/mastercard.png') }}" alt="product img"  width="100px" height="100px" >
                                    <div>
                                        <h4>Product Name 1</h4>
                                        <p>Order number: #12345</p>
                                        <p>size</p>
                                        <p>Status</p>
                                        <p>Estimated delivery time: 2 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-header">
                            <h6 class="mb-2">Cancelled</h6>
                        </div>
                        <div class="card-body">
                            <div class="d-flex">
                                    <img src="{{ asset('assets/img/logos/mastercard.png') }}" alt="product img"  width="100px" height="100px" >
                                    <div>
                                        <h4>Product Name 1</h4>
                                        <p>Order number: #12345</p>
                                        <p>Size: M</p>
                                        <p>Status: Delivered</p>
                                        <p>Estimated delivery time: 2 days</p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <img src="{{ asset('assets/img/logos/mastercard.png') }}" alt="product img"  width="100px" height="100px" >
                                    <div>
                                        <h4>Product Name 1</h4>
                                        <p>Order number: #12345</p>
                                        <p>Size: M</p>
                                        <p>Status: Delivered</p>
                                        <p>Estimated delivery time: 2 days</p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <img src="{{ asset('assets/img/logos/mastercard.png') }}" alt="product img"  width="100px" height="100px" >
                                    <div>
                                        <h4>Product Name 1</h4>
                                        <p>Order number: #12345</p>
                                        <p>size</p>
                                        <p>Status</p>
                                        <p>Estimated delivery time: 2 days</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection