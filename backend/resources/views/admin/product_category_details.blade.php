@extends('layouts.adminlayout')


@section('content')
    
   <div class="row mt-4">
    <!-- Category Details -->
    <div class="col-md-6 offset-md-3 mb-lg-0 mb-4">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Category: Category Name</h6>
                    <a href="" class="btn btn-sm btn-secondary">Back</a>
                </div>
            </div>
            <div class="card-body">
                <h5>Number of Products: 12</h5>
            </div>
        </div>
    </div>
</div>

<div class="row mt-4">
    <!-- Products under this Category -->
    <div class="col-md-10 offset-md-1">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <h6 class="mb-2">Products in this Category</h6>
            </div>
            <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Created At</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>1</td>
                                <td>{{ $product['name'] }}</td>
                                <td>${{ number_format($product['price'], 2) }}</td>
                                <td>{{ $product['stock'] }}</td>
                                <td>{{ $product['created_at'] }}</td>
                                <td>
                                    <a href="" class="btn btn-sm btn-info">View</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                
            </div>
        </div>
    </div>
</div>
   
    

@endsection